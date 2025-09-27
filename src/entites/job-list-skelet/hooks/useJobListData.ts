import { useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { AppRootState } from "@/app/store";
import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";

// Селекторы
const selectJobs = (state: AppRootState) => state.jobsSlice.data;
const selectSoftware = (state: AppRootState) => state.softwareSlice.data;

// Типы
interface Software {
  id: number;
  title: string;
  logo: string;
}

interface Job {
  id: number;
  companyTitle: string;
  description: string;
  endAt: string;
  jobTitle: string;
  startAt: string;
  logo: string;
  software_id: number[];
}

interface OptimizedJob extends Omit<Job, "software_id"> {
  softwares: Software[];
}

// Кастомный хук для оптимизации данных
export const useJobListData = (limit: number = 20) => {
  // API запрос
  const {
    data: softwareData,
    isLoading: isSoftwareLoading,
    error: softwareError,
  } = useGetAllsoftwareQuery(limit);

  // Redux селекторы с оптимизацией
  const jobs = useSelector(selectJobs, shallowEqual);
  const software = useSelector(selectSoftware, shallowEqual);

  // Создаем Map для O(1) поиска software по ID
  const softwareMap = useMemo(() => {
    if (!softwareData?.data) return new Map<number, Software>();

    return new Map(
      softwareData.data.map((software) => [software.id, software])
    );
  }, [softwareData?.data]);

  // Мемоизированная функция для фильтрации jobs
  const getFilteredJobs = useMemo(() => {
    return (jobs: Job[], value: number): OptimizedJob[] => {
      if (!jobs?.length || !softwareMap.size) return [];

      return jobs.slice(0, value).map((job) => {
        const { software_id, ...rest } = job;

        // O(1) поиск вместо O(n) фильтрации
        const softwares = software_id
          .map((id) => softwareMap.get(id))
          .filter(Boolean) as Software[];

        return {
          ...rest,
          softwares,
        };
      });
    };
  }, [softwareMap]);

  // Состояние загрузки
  const isLoading = isSoftwareLoading || !softwareData?.data;
  const hasError = !!softwareError;

  return {
    jobs,
    software,
    softwareMap,
    getFilteredJobs,
    isLoading,
    hasError,
    error: softwareError,
  };
};

// Хук для управления пагинацией
export const useJobListPagination = (
  totalItems: number,
  initialItemsCount: number = 2,
  itemsPerPage: number = 2
) => {
  const [value, setValue] = useState(initialItemsCount);

  const canShowMore = totalItems > value;
  const canShowLess = value > initialItemsCount;
  const isAtEnd = value >= totalItems;

  const showMore = useCallback(() => {
    setValue((prev) => Math.min(prev + itemsPerPage, totalItems));
  }, [itemsPerPage, totalItems]);

  const showLess = useCallback(() => {
    setValue(initialItemsCount);
  }, [initialItemsCount]);

  const togglePagination = useCallback(() => {
    if (isAtEnd) {
      showLess();
    } else {
      showMore();
    }
  }, [isAtEnd, showLess, showMore]);

  return {
    value,
    canShowMore,
    canShowLess,
    isAtEnd,
    showMore,
    showLess,
    togglePagination,
  };
};

// Хук для управления скроллом
export const useJobListScroll = () => {
  const listEndRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  const scrollToEnd = useCallback(() => {
    setTimeout(() => {
      listEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  }, []);

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  return {
    listEndRef,
    topRef,
    scrollToEnd,
    scrollToTop,
  };
};
