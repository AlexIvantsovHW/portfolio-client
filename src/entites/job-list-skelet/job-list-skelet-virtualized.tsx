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
  useEffect,
} from "react";
import { useSelector, shallowEqual } from "react-redux";

// Константы для виртуализации
const ITEM_HEIGHT = 300; // Примерная высота JobCard
const CONTAINER_HEIGHT = 600; // Высота видимого контейнера
const OVERSCAN = 2; // Количество элементов для предзагрузки

interface VirtualizedJobListProps extends Tprop<undefined> {
  enableVirtualization?: boolean;
  initialItemsCount?: number;
  itemsPerPage?: number;
}

export const JobListSkeletVirtualized = memo<VirtualizedJobListProps>(
  ({
    route,
    enableVirtualization = false,
    initialItemsCount = 2,
    itemsPerPage = 2,
  }) => {
    const [value, setValue] = useState(initialItemsCount);
    const [isPending, startTransition] = useTransition();
    const [scrollTop, setScrollTop] = useState(0);

    const listEndRef = useRef<HTMLDivElement | null>(null);
    const topRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { data: softwareData, isLoading: isSoftwareLoading } =
      useGetAllsoftwareQuery(20);
    const jobs = useSelector(selectJobs, shallowEqual);
    const software = useSelector(selectSoftware, shallowEqual);

    // Создаем Map для O(1) поиска software
    const softwareMap = useMemo(() => {
      if (!softwareData?.data) return new Map();
      return new Map(
        softwareData.data.map((software) => [software.id, software])
      );
    }, [softwareData?.data]);

    // Оптимизированная фильтрация
    const filteredJobs = useMemo(() => {
      if (!jobs?.length || !softwareMap.size) return [];

      return jobs.slice(0, value).map((job) => {
        const { software_id, ...rest } = job;
        const softwares = software_id
          .map((id) => softwareMap.get(id))
          .filter(Boolean);
        return { ...rest, softwares };
      });
    }, [jobs, value, softwareMap]);

    // Виртуализация
    const virtualizedItems = useMemo(() => {
      if (!enableVirtualization || filteredJobs.length === 0) {
        return { visibleItems: filteredJobs, totalHeight: 0, offsetY: 0 };
      }

      const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + OVERSCAN;
      const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
      const endIndex = Math.min(startIndex + visibleCount, filteredJobs.length);

      const visibleItems = filteredJobs.slice(startIndex, endIndex);
      const totalHeight = filteredJobs.length * ITEM_HEIGHT;
      const offsetY = startIndex * ITEM_HEIGHT;

      return { visibleItems, totalHeight, offsetY };
    }, [filteredJobs, scrollTop, enableVirtualization]);

    // Обработчик скролла для виртуализации
    const handleScroll = useCallback(
      (e: React.UIEvent<HTMLDivElement>) => {
        if (enableVirtualization) {
          setScrollTop(e.currentTarget.scrollTop);
        }
      },
      [enableVirtualization]
    );

    // Мемоизированный колбэк для кнопки
    const handleButton = useCallback(() => {
      startTransition(() => {
        if (jobs.length > value) {
          const newValue =
            value >= jobs.length ? initialItemsCount : value + itemsPerPage;
          setValue(newValue);

          setTimeout(() => {
            if (enableVirtualization) {
              containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              listEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        } else {
          setValue(initialItemsCount);
          if (enableVirtualization) {
            containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }, [
      value,
      jobs.length,
      initialItemsCount,
      itemsPerPage,
      enableVirtualization,
    ]);

    // Мемоизированные значения для кнопки
    const buttonProps = useMemo(
      () => ({
        btnValidation: jobs.length > initialItemsCount,
        label: value >= jobs.length ? "Hidden" : "Show more",
      }),
      [jobs.length, value, initialItemsCount]
    );

    // Ранний возврат
    if (isSoftwareLoading || !softwareData?.data) {
      return (
        <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-white text-lg">Loading jobs...</div>
        </div>
      );
    }

    // Обычный рендеринг без виртуализации
    if (!enableVirtualization) {
      return (
        <>
          <div ref={topRef} />
          <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12">
            {filteredJobs.map((job, index) => (
              <JobCard key={`${job.id}-${index}`} job={job} route={route} />
            ))}
            <div ref={listEndRef} />

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

    // Виртуализированный рендеринг
    return (
      <>
        <div ref={topRef} />
        <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start">
          <div
            ref={containerRef}
            className="w-full"
            style={{ height: CONTAINER_HEIGHT, overflow: "auto" }}
            onScroll={handleScroll}
          >
            <div
              style={{
                height: virtualizedItems.totalHeight,
                position: "relative",
              }}
            >
              <div
                style={{
                  transform: `translateY(${virtualizedItems.offsetY}px)`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {virtualizedItems.visibleItems.map((job, index) => (
                  <div
                    key={`${job.id}-${index}`}
                    style={{ height: ITEM_HEIGHT, marginBottom: "12px" }}
                  >
                    <JobCard job={job} route={route} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {jobs.length > initialItemsCount && (
            <div className="mt-8">
              <CustomButton
                btnValidation={buttonProps.btnValidation}
                onclick={handleButton}
                label={buttonProps.label}
                disabled={isPending}
              />
            </div>
          )}
        </div>
      </>
    );
  }
);

// Селекторы
const selectJobs = (state: AppRootState) => state.jobsSlice.data;
const selectSoftware = (state: AppRootState) => state.softwareSlice.data;

JobListSkeletVirtualized.displayName = "JobListSkeletVirtualized";
