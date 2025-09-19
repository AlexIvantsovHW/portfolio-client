import { UniversityCard } from "@/features/university-card/university-card";
import { Universities } from "@/shared/types";
import { memo } from "react";
import { Tprop } from "../project-list-skillet/imports";

export const UniversityListSkillet = memo((props: Tprop<Universities[]>) => {
  const { data, route = false } = props;

  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data?.map((university) => {
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
