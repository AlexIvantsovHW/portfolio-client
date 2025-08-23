import { UniversityCard } from "@/features/university-card/university-card";
import { Universities } from "@/shared/types";
import { memo } from "react";

type Props = {
  data: Universities[];
  route?: boolean;
};
export const UniversityListSkillet = memo((props: Props) => {
  const { data, route = false } = props;

  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data.map((university) => {
        return (
          <UniversityCard
            key={university.id}
            university={university}
            idx={university.id}
            route={route}
          />
        );
      })}
    </div>
  );
});
