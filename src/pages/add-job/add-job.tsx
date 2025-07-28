import { PageGuard } from "@/shared/hoc/page-guard";
import { AddExperienceWidget } from "@/widgets/add-experience-widget";

const AddJob = () => {
  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        <AddExperienceWidget />
      </div>
    </PageGuard>
  );
};
export default AddJob;
