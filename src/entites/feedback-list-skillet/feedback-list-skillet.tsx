import { FeedbackCard } from "@/features/feedback-card/feedback-card";
import { Tfeedbacks } from "@/shared/types";
import { memo } from "react";

type Props = {
  data: Tfeedbacks[];
  route?: boolean;
};
export const FeedbackListSkillet = memo((props: Props) => {
  const { data, route } = props;
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data.map((feedback, idx) => {
        return (
          <FeedbackCard feedback={feedback} key={feedback.id} route={route} />
        );
      })}
    </div>
  );
});
