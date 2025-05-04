import { UniversityCard } from "@/features/university-card/university-card";
import { Universities } from "@/shared/types";
import { memo } from "react";

type Props = {
  data: Universities[];
};
export const UniversityListSkillet = memo((props: Props) => {
  const { data } = props;
  console.log("UniversityListSkillet Render");
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data.map((university, idx) => {
        return <UniversityCard university={university} idx={idx} />;
      })}
    </div>
  );
});
