import { useGetAllProjectsQuery } from "@/shared/api/requests/projects/projects.api";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { ProjectWidget } from "@/widgets/project-widget/project-widget";

const UpdateProjects = () => {
  const { data, isLoading } = useGetAllProjectsQuery(20);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        update-projects
      </h1>
      {isLoading ? (
        <div className="w-full h-full flex-grow flex items-center justify-start">
          <RocketLoader />
        </div>
      ) : (
        <ProjectWidget />
      )}
    </div>
  );
};

export default UpdateProjects;
