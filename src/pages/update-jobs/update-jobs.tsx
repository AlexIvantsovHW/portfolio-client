import { useGetAllJobsQuery } from "@/shared/api/requests/jobs/jobs.api";
import { PageGuard } from "@/shared/hoc/page-guard";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { JobsWidget } from "@/widgets/jobs-widget";

const UpdateJobs = () => {
  const { data, isLoading } = useGetAllJobsQuery(20);

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          UpdateJobs
        </h1>
        {isLoading ? (
          <div className="w-full h-full flex-grow flex items-center justify-center">
            <RocketLoader />
          </div>
        ) : (
          <JobsWidget />
        )}
      </div>
    </PageGuard>
  );
};
export default UpdateJobs;
