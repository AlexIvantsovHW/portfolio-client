import FeedbackCard from "@/features/feedback-card/feedback-card";
import { Tfeedbacks } from "@/shared/types";
import { Suspense } from "react";
import { memo } from "react";

type Props = {
  data: Tfeedbacks[];
  route?: boolean;
};
export const FeedbackListSkillet = memo((props: Props) => {
  const { data, route } = props;

  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((f) => (
          <FeedbackCard
            id={f.id}
            name={f.name}
            date={f.date}
            description={f.description}
            key={f.id}
            position={f.position}
            companyTitle={f.companyTitle}
            logo={f.logo}
            country={f.country}
            city={f.city}
            route={route}
          />
        ))}
      </Suspense>
    </div>
  );
});
