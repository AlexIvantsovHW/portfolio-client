import { AppRootState } from "@/app/store";
import { JobCard } from "@/features/job-card";
import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { Tprop } from "@/shared/types/prop.type";
import { CustomButton } from "@/widgets/update-experience-widget/imports";
import { memo, useRef, useState, useCallback, useMemo } from "react";
import { useSelector, shallowEqual } from "react-redux";

export const JobListSkelet = memo(
  (props: Tprop<undefined>) => {
    const { data: rawData, isLoading } = useGetAllsoftwareQuery(20);
    const jobs = useSelector(
      (state: AppRootState) => state.jobsSlice.data,
      shallowEqual
    );
    const data = useMemo(() => rawData, [rawData]);
    const [value, setValue] = useState(2);
    const listEndRef = useRef<HTMLDivElement | null>(null);
    const topRef = useRef<HTMLDivElement | null>(null);

    const handleButton = useCallback(() => {
      if (jobs.length > value) {
        value >= jobs.length ? setValue(2) : setValue(value + 2);
        setTimeout(() => {
          listEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setValue(2);
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [jobs.length, value]);

    const filteredJobs = useMemo(() => {
      return jobs?.slice(0, value).map((j) => {
        const { software_id, ...rest } = j;
        return {
          softwares:
            data?.data?.filter((s) => j.software_id.includes(s.id)) || [],
          ...rest,
        };
      });
    }, [jobs, data, value]);
    const buttonData = useMemo(() => {
      if (!data?.data) return false;
      return data?.data?.length > 2 || false;
    }, [data?.data]);
    if (isLoading || !data?.data) return;
    return (
      <>
        {" "}
        <div ref={topRef}></div>
        <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12 ">
          {filteredJobs?.map((job) => (
            <JobCard key={job.id} job={job} route={props.route} />
          ))}
          <div ref={listEndRef}></div>
          <CustomButton
            btnValidation={buttonData}
            onclick={handleButton}
            label={value >= jobs.length ? "Hidden" : "Show more"}
          />
        </div>
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.route === nextProps.route;
  }
);
