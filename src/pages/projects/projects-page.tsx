import { useGetAllProjectsQuery } from "@/shared/api/requests/projects/projects.api";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import ProjectWidget from "@/widgets/project-widget/project-widget";

const ProjectsPage = () => {
  const { data, isLoading } = useGetAllProjectsQuery(20);

  return (
    <div className="w-full h-full flex items-start justify-center px-6  bg-cover bg-center relative">
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

export default ProjectsPage;
