import * as i from "./imports";

type Props = {
  feedback: i.Feedback;
  idx: number;
};
export const FeedbackCard = (props: Props) => {
  const { feedback, idx } = props;
  return (
    <div key={idx} className="w-full xl:w-[75%] xxl:w-[50%] h-auto">
      <i.motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-lg bg-dark/20 dark:bg-white/10 shadow-xl border border-white/30 dark:border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch transition-all duration-500"
      >
        <div className="flex items-center justify-center p-4 bg-dark/40  ">
          <img
            src={feedback.logo}
            alt={feedback.name}
            className="
            w-[150px] h-[150px] 
            sm:w-[200px] sm:h-[200px] 
            md:w-[250px] md:h-[250px] 
            lg:w-[300px] lg:h-[300px]
            object-contain
          "
          />
        </div>

        <div className="w-full flex-grow flex flex-col gap-4 justify-center p-6 text-white bg-black/40 dark:text-white">
          <h1 className="text-2xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
            {feedback.companyTitle}
          </h1>
          <p className="text-xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
            {feedback.position}
          </p>

          <div className="w-full flex items-center justify-center gap-[10px]">
            {" "}
            <span className="text-[13px] bg-gradient-to-r from-purple-700 to-fuchsia-700 px-2 py-1 rounded-full shadow-md w-fit">
              🚀 {i.dataConvector(feedback.date)}
            </span>
          </div>

          <p className="text-base leading-relaxed hidden md:block">
            {feedback.description}
          </p>
        </div>
      </i.motion.div>
    </div>
  );
};
