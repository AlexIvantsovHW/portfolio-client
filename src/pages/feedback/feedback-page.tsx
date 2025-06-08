import { useGetAllFeedbacksQuery } from "@/shared/api/requests/feedbacks";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { FeedbackWidget } from "@/widgets/feedback-widget";

const FeedbackPage = () => {
  const { data, isLoading } = useGetAllFeedbacksQuery(20);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-12 bg-cover bg-center relative">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        FEEDBACKS
      </h1>
      {isLoading ? (
        <div className="w-full h-full flex-grow flex items-center justify-start">
          <RocketLoader />
        </div>
      ) : (
        <FeedbackWidget />
      )}
    </div>
  );
};

export default FeedbackPage;
