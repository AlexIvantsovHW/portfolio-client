import { UniversityCard } from "@/features/university-card/university-card";
import { Universities } from "@/shared/types";
import { memo } from "react";
import { Tprop } from "../project-list-skillet/imports";

export const UniversityListSkillet = memo(
  (props: Tprop<Universities[]>) => {
    const { data, route = false } = props;
    return (
      <div className="w-full flex flex-col items-center justify-start gap-[10px]">
        {data?.map((university) => {
          return (
            <UniversityCard
              key={university.id}
              data={university}
              idx={university.id}
              route={route}
            />
          );
        })}
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.data && prevProps.data?.length !== nextProps.data?.length)
      return false;
    if (prevProps.route && prevProps.route !== nextProps.route) {
      return false;
    }
    if (!prevProps.data || !nextProps.data) {
      return prevProps.data === nextProps.data;
    }
    return prevProps?.data?.every(
      (item, index) =>
        (item.id === nextProps.data?.[index].id &&
          item.certificate === nextProps.data?.[index].certificate &&
          item.companyLogo === nextProps.data?.[index].companyLogo &&
          item.description === nextProps.data?.[index].description &&
          item.endAt === nextProps.data?.[index].endAt &&
          item.link === nextProps.data?.[index].link &&
          item.startAt === nextProps.data?.[index].startAt &&
          item.title === nextProps.data?.[index].title) ??
        true
    );
  }
);
