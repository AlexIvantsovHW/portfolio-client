import { AppRootState } from "@/app/store";
import { JobCard } from "@/features/job-card";
import { useSelector } from "react-redux";

export const JobListSkelet = () => {
  const jobs = useSelector((state: AppRootState) => state.jobsSlice.data);

  return (
    <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12 ">
      {jobs?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
