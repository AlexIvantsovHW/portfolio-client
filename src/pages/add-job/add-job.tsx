import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { PageGuard } from "@/shared/hoc/page-guard";
import { AddExperienceWidget } from "@/widgets/add-experience-widget";

const AddJob = () => {
  const { data } = useGetAllsoftwareQuery(20);

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          Add new job
        </h1>
        <AddExperienceWidget />
      </div>
    </PageGuard>
  );
};
export default AddJob;
