import { AddFeedbackWidget } from "@/widgets/add-feedback-widget";

const AddFeedback = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        Add Feedback
      </h1>
      <AddFeedbackWidget />
    </div>
  );
};

export default AddFeedback;
