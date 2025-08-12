import { PageGuard } from "@/shared/hoc/page-guard";
import { AddEducationWidget } from "@/widgets/add-education-widget/add-education-widget";

const AddEducation = () => {
  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        <AddEducationWidget />
      </div>
    </PageGuard>
  );
};
export default AddEducation;
