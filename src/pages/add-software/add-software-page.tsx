import { useGetAllsoftwareQuery } from "@/shared/api/requests/software/software.api";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { AddSoftwareWidget } from "@/widgets/add-software-widget";

const AddSoftware = () => {
  const { data, isLoading } = useGetAllsoftwareQuery(20);

  return (
    <div className="w-full h-full flex items-center flex-col justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        Add software
      </h1>
      {isLoading ? (
        <div className="w-full h-full flex-grow flex items-center justify-center">
          <RocketLoader />
        </div>
      ) : (
        <AddSoftwareWidget />
      )}
    </div>
  );
};

export default AddSoftware;
