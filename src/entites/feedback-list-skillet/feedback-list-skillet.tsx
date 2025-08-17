import { FeedbackCard } from "@/features/feedback-card/feedback-card";
import { Tfeedbacks } from "@/shared/types";
import { memo } from "react";

type Props = {
  data: Tfeedbacks[];
  route?: boolean;
};
export const FeedbackListSkillet = memo((props: Props) => {
  const { data, route } = props;
  console.log("data FeedbackListSkillet", data);
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data.map((feedback) => {
        return (
          <FeedbackCard feedback={feedback} key={feedback.id} route={route} />
        );
      })}
    </div>
  );
});
