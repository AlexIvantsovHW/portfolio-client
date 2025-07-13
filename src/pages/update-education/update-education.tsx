import { useGetAllUniversitiesQuery } from "@/shared/api/requests/universities/universities.api";
import { PageGuard } from "@/shared/hoc/page-guard";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { EducationWidget } from "@/widgets/education-widget";

const UpdateEducation = () => {
  const { data, isLoading } = useGetAllUniversitiesQuery(20);

  return (
    <PageGuard>
      {" "}
      <div className="w-full h-full flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center relative">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          UpdateEducation
        </h1>
        {isLoading ? (
          <div className="w-full h-full flex-grow flex items-center justify-start">
            <RocketLoader />
          </div>
        ) : (
          <EducationWidget />
        )}
      </div>
    </PageGuard>
  );
};

export default UpdateEducation;
