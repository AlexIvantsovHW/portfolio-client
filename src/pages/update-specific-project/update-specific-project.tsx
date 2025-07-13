import { PageGuard } from "@/shared/hoc/page-guard";

import { UpdateProjectWidget } from "@/widgets/update-project-widget";
import { useParams } from "react-router";

const UpdateSpeificProject = () => {
  const { id } = useParams();

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        {id ? (
          <UpdateProjectWidget id={+id} />
        ) : (
          <h1
            style={{ fontFamily: "Revamped" }}
            className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
          >
            There is an error related to the id!
          </h1>
        )}
      </div>
    </PageGuard>
  );
};
export default UpdateSpeificProject;
