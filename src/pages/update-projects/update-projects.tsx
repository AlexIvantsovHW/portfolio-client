import { useGetAllProjectsQuery } from "@/shared/api/requests/projects/projects.api";
import { PageGuard } from "@/shared/hoc/page-guard";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { ProjectWidget } from "@/widgets/project-widget/project-widget";
import {
  CustomButton,
  ROUTES,
} from "@/widgets/update-experience-widget/imports";

const UpdateProjects = () => {
  const { data, isLoading } = useGetAllProjectsQuery(20);

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-center gap-[10px] px-6 py-12 bg-cover bg-center relative">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          Projects
        </h1>
        <CustomButton label="Create" route={ROUTES.ADD_PROJECT} />
        {isLoading ? (
          <div className="w-full h-full flex-grow flex items-center justify-start">
            <RocketLoader />
          </div>
        ) : (
          <ProjectWidget route={true} />
        )}
      </div>
    </PageGuard>
  );
};

export default UpdateProjects;
