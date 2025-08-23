import { AppRootState } from "@/app/store";
import { JobCard } from "@/features/job-card";
import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { CustomButton } from "@/widgets/update-experience-widget/imports";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

type Props = { route?: boolean };
export const JobListSkelet = (props: Props) => {
  const { data, isLoading } = useGetAllsoftwareQuery(20);
  const jobs = useSelector((state: AppRootState) => state.jobsSlice.data);
  const [value, setValue] = useState(2);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleButton = () => {
    value >= jobs.length ? setValue(2) : setValue(value + 2);
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [value - 1]);

  const filteredJobs = useMemo(
    () =>
      jobs?.slice(0, value).map((j) => {
        const { software_id, ...rest } = j;
        return {
          softwares:
            data?.data?.filter((s) => j.software_id.includes(s.id)) || [],
          ...rest,
        };
      }),
    [value, jobs, data]
  );

  if (isLoading || !data?.data) return;
  return (
    <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12 ">
      {filteredJobs?.map((job) => (
        <JobCard key={job.id} job={job} route={props.route} ref={ref} />
      ))}

      <CustomButton
        btnValidation={data.data.length > 2 || false}
        onclick={handleButton}
        label={value >= jobs.length ? "Hidden" : "Show more"}
      />
    </div>
  );
};
