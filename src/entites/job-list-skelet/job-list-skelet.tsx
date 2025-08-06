import { AppRootState } from "@/app/store";
import { JobCard } from "@/features/job-card";
import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { useSelector } from "react-redux";

type Props = { route: boolean };
export const JobListSkelet = (props: Props) => {
  const jobs = useSelector((state: AppRootState) => state.jobsSlice.data);
  const { data, isLoading } = useGetAllsoftwareQuery(20);
  if (isLoading) return;
  const updatedJob = jobs?.map((j) => {
    const { software_id, ...rest } = j;
    return {
      softwares: data?.data.filter((s) => j.software_id.includes(s.id)) || [],
      ...rest,
    };
  });
  console.log("updatedJob", updatedJob);

  return (
    <div className="w-full min-h-screen py-12 px-4 flex flex-col items-center justify-start gap-12 ">
      {updatedJob?.map((job) => (
        <JobCard key={job.id} job={job} route={props.route} />
      ))}
    </div>
  );
};
