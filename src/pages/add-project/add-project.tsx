import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { PageGuard } from "@/shared/hoc/page-guard";
import { AddExperienceWidget } from "@/widgets/add-experience-widget";
import { AddProjectWidget } from "@/widgets/add-project-widget";

const AddProject = () => {
  const { data } = useGetAllsoftwareQuery(20);

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          Add new project
        </h1>
        <AddProjectWidget />
      </div>
    </PageGuard>
  );
};
export default AddProject;
