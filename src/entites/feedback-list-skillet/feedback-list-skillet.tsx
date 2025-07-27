import { FeedbackCard } from "@/features/feedback-card/feedback-card";
import { Feedbacks } from "@/shared/types";
import { memo } from "react";

type Props = {
  data: Feedbacks[];
};
export const FeedbackListSkillet = memo((props: Props) => {
  const { data } = props;
  console.log("FeedbackListSkillet Render");
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[10px]">
      {data.map((feedback, idx) => {
        return <FeedbackCard feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
});
