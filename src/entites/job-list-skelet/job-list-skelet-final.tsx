import { JobCard } from "@/features/job-card";
import { Tprop } from "@/shared/types/prop.type";
import { CustomButton } from "@/widgets/update-experience-widget/imports";
import { memo, useTransition, useCallback } from "react";
import {
  useJobListData,
  useJobListPagination,
  useJobListScroll,
} from "./hooks/useJobListData";

interface JobListSkeletProps extends Tprop<undefined> {
  initialItemsCount?: number;
  itemsPerPage?: number;
  enableSmoothTransitions?: boolean;
}

export const JobListSkeletFinal = memo<JobListSkeletProps>(
  ({
    route,
    initialItemsCount = 2,
    itemsPerPage = 2,
    enableSmoothTransitions = true,
  }) => {
    // Кастомные хуки
    const { jobs, getFilteredJobs, isLoading, hasError } = useJobListData(20);

    const { value, isAtEnd, togglePagination } = useJobListPagination(
      jobs.length,
      initialItemsCount,
      itemsPerPage
    );

    const { listEndRef, topRef, scrollToEnd, scrollToTop } = useJobListScroll();

    // Transitions для плавности
    const [isPending, startTransition] = useTransition();

    // Мемоизированные данные
    const filteredJobs = getFilteredJobs(jobs, value);

    // Обработчик кнопки с оптимизацией
    const handleButton = useCallback(() => {
      if (enableSmoothTransitions) {
        startTransition(() => {
          togglePagination();

          // Плавный скролл
          if (isAtEnd) {
            scrollToTop();
          } else {
            scrollToEnd();
          }
        });
      } else {
        togglePagination();
      }
    }, [
      togglePagination,
      isAtEnd,
      scrollToEnd,
      scrollToTop,
      enableSmoothTransitions,
    ]);

    // Мемоизированные пропсы для кнопки
    const buttonProps = useMemo(
      () => ({
        btnValidation: jobs.length > initialItemsCount,
        label: isAtEnd ? "Hidden" : "Show more",
        disabled: isPending,
      }),
      [jobs.length, initialItemsCount, isAtEnd, isPending]
    );

    // Обработка состояний
    if (isLoading) {
      return (
        <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-white text-lg animate-pulse">
            Loading jobs...
          </div>
        </div>
      );
    }

    if (hasError) {
      return (
        <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-red-400 text-lg">
            Error loading jobs. Please try again.
          </div>
        </div>
      );
    }

    if (!jobs.length) {
      return (
        <div className="w-full min-h-screen py-12 px-4 flex items-center justify-center">
          <div className="text-gray-400 text-lg">No jobs found.</div>
        </div>
      );
    }

    return (
      <>
        <div ref={topRef} />
        <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12">
          {/* Список jobs с оптимизацией */}
          {filteredJobs.map((job, index) => (
            <JobCard key={`${job.id}-${index}`} job={job} route={route} />
          ))}

          <div ref={listEndRef} />

          {/* Кнопка пагинации */}
          {jobs.length > initialItemsCount && (
            <CustomButton
              btnValidation={buttonProps.btnValidation}
              onclick={handleButton}
              label={buttonProps.label}
              disabled={buttonProps.disabled}
            />
          )}
        </div>
      </>
    );
  }
);

// Настройка displayName
JobListSkeletFinal.displayName = "JobListSkeletFinal";

// Экспорт
export { JobListSkeletFinal as JobListSkelet };
