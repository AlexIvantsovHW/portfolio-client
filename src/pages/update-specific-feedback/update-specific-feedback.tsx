import { AppRootState } from "@/app/store";
import { UpdateSpecificFeedbackWidget } from "@/widgets/update-specific-feedback-widget";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const UpdateSpecificFeedback = () => {
  const feedbacks = useSelector(
    (state: AppRootState) => state.feedbacksSlice.data
  );
  const params = useParams();
  const feedbackId = params?.id;
  if (!feedbackId) return;
  const feedback = feedbacks?.filter((f) => +f.id === +feedbackId)[0];

  return (
    <div className="w-full h-full flex items-center flex-col justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        Update Feedback
      </h1>
      <UpdateSpecificFeedbackWidget feedback={feedback} />
    </div>
  );
};

export default UpdateSpecificFeedback;
