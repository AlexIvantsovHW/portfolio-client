import { useGetPersonalDataQuery } from "@/shared/api/requests/personal";
import { PageGuard } from "@/shared/hoc/page-guard";
import { UpdateAbooutWidget } from "@/widgets/update-about-widget/update-about-widget";

const UpdateAboout = () => {
  const { data, isLoading } = useGetPersonalDataQuery(20);

  return (
    <PageGuard>
      <UpdateAbooutWidget />
    </PageGuard>
  );
};

export default UpdateAboout;
