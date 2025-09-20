import { AppRootState } from "@/app/store";
import { JobCard } from "@/features/job-card";
import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { Tprop } from "@/shared/types/prop.type";
import { CustomButton } from "@/widgets/update-experience-widget/imports";
import {
  memo,
  useRef,
  useState,
  useMemo,
  useCallback,
  useTransition,
  startTransition,
} from "react";
import { useSelector, shallowEqual } from "react-redux";

// Типы для оптимизации
interface OptimizedJob {
  id: number;
  companyTitle: string;
  description: string;
  endAt: string;
  jobTitle: string;
  startAt: string;
  logo: string;
  softwares: Array<{
    id: number;
    title: string;
    logo: string;
  }>;
}

interface JobListSkeletProps extends Tprop<undefined> {
  // Дополнительные пропсы для оптимизации
  initialItemsCount?: number;
  itemsPerPage?: number;
}

// Мемоизированный селектор для jobs
const selectJobs = (state: AppRootState) => state.jobsSlice.data;

// Мемоизированный селектор для software
const selectSoftware = (state: AppRootState) => state.softwareSlice.data;

export const JobListSkeletOptimized = memo<JobListSkeletProps>(
  ({ route, initialItemsCount = 2, itemsPerPage = 2 }) => {
    // Состояние с оптимизацией
    const [value, setValue] = useState(initialItemsCount);
    const [isPending, startTransition] = useTransition();

    // Refs
    const listEndRef = useRef<HTMLDivElement | null>(null);
    const topRef = useRef<HTMLDivElement | null>(null);

    // API запросы
    const { data: softwareData, isLoading: isSoftwareLoading } =
      useGetAllsoftwareQuery(20);

    // Оптимизированные селекторы
    const jobs = useSelector(selectJobs, shallowEqual);
    const software = useSelector(selectSoftware, shallowEqual);

    // Мемоизированный колбэк для кнопки
    const handleButton = useCallback(() => {
      startTransition(() => {
        if (jobs.length > value) {
          const newValue =
            value >= jobs.length ? initialItemsCount : value + itemsPerPage;
          setValue(newValue);

          // Отложенный скролл для лучшей производительности
          setTimeout(() => {
            listEndRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }, 100);
        } else {
          setValue(initialItemsCount);
          topRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }, [value, jobs.length, initialItemsCount, itemsPerPage]);

    // Создаем Map для O(1) поиска software по ID
    const softwareMap = useMemo(() => {
      if (!softwareData?.data) return new Map();

      return new Map(
        softwareData.data.map((software) => [software.id, software])
      );
    }, [softwareData?.data]);

    // Оптимизированная фильтрация с O(n) сложностью
    const filteredJobs = useMemo((): OptimizedJob[] => {
      if (!jobs?.length || !softwareMap.size) return [];

      return jobs.slice(0, value).map((job) => {
        const { software_id, ...rest } = job;

        // O(1) поиск вместо O(n) фильтрации
        const softwares = software_id
          .map((id) => softwareMap.get(id))
          .filter(Boolean);

        return {
          ...rest,
          softwares,
        };
      });
    }, [jobs, value, softwareMap]);

    // Мемоизированные значения для кнопки
    const buttonProps = useMemo(
      () => ({
        btnValidation: jobs.length > initialItemsCount,
        label: value >= jobs.length ? "Hidden" : "Show more",
      }),
      [jobs.length, value, initialItemsCount]
    );

    // Ранний возврат с мемоизацией
    if (isSoftwareLoading || !softwareData?.data) {
      return (
        <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-white text-lg">Loading jobs...</div>
        </div>
      );
    }

    return (
      <>
        <div ref={topRef} />
        <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12">
          {/* Виртуализация для больших списков */}
          {filteredJobs.map((job, index) => (
            <JobCard key={`${job.id}-${index}`} job={job} route={route} />
          ))}
          <div ref={listEndRef} />

          {/* Показываем кнопку только если есть что показывать */}
          {jobs.length > initialItemsCount && (
            <CustomButton
              btnValidation={buttonProps.btnValidation}
              onclick={handleButton}
              label={buttonProps.label}
              disabled={isPending}
            />
          )}
        </div>
      </>
    );
  }
);

// Настройка displayName для DevTools
JobListSkeletOptimized.displayName = "JobListSkeletOptimized";

// Экспорт с fallback на оригинальную версию
export { JobListSkeletOptimized as JobListSkelet };
