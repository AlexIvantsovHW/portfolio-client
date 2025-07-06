import { useGetPersonalDataQuery } from "@/shared/api/requests/personal";
import { PageGuard } from "@/shared/hoc/page-guard";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { AboutWidget } from "@/widgets/about-widget";

const UpdateAboout = () => {
  const { data, isLoading } = useGetPersonalDataQuery(20);

  return (
    <PageGuard>
      <div className="w-full h-full flex items-center justify-center px-6 py-12 bg-cover bg-center relative">
        <div className="absolute inset-0 backdrop-blur-sm z-0" />
        {isLoading ? (
          <div className="w-full h-full flex-grow flex items-center justify-center">
            <RocketLoader />
          </div>
        ) : (
          <AboutWidget />
        )}
      </div>
    </PageGuard>
  );
};

export default UpdateAboout;
