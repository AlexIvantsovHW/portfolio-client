import { useGetAllJobsQuery } from "@/shared/api/requests/jobs/jobs.api";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { JobsWidget } from "@/widgets/jobs-widget";

const JobsPage = () => {
  const { data, isLoading } = useGetAllJobsQuery(20);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        EXPERIENCE
      </h1>
      {isLoading ? (
        <div className="w-full h-full flex-grow flex items-center justify-center">
          <RocketLoader />
        </div>
      ) : (
        <JobsWidget />
      )}
    </div>
  );
};
export default JobsPage;
