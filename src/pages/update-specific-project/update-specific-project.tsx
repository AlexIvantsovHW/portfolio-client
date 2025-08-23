import { PageGuard } from "@/shared/hoc/page-guard";

import { UpdateProjectWidget } from "@/widgets/update-project-widget";
import React, { useMemo } from "react";
import { useParams } from "react-router";

const Widget = () => {
  const { id } = useParams();
  const memoId = useMemo(() => (id ? +id : 1), []);

  return (
    <PageGuard>
      <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12 bg-cover bg-center relative">
        {id ? (
          <UpdateProjectWidget id={memoId} />
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
const UpdateSpeificProject = React.memo(Widget);
export default UpdateSpeificProject;
