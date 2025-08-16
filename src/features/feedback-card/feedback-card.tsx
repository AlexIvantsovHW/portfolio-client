import * as i from "./imports";

type Props = {
  feedback: i.Tfeedbacks;
  route?: boolean;
};

export const FeedbackCard = ({ feedback, route }: Props) => {
  const [visible, setVisible] = i.useState(false);
  const [mutate, { isLoading }] = i.useDeleteFeedbackMutation();
  const navigate = i.useNavigate();
  return (
    <div className="w-full xl:w-[75%] xxl:w-[50%] px-4 py-6">
      <i.motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative b bg-gradient-to-br from-[#0f0c29]/50 via-[#302b63]/80 to-[#24243e]/50 
                   backdrop-blur-xl border border-[#ffffff22] rounded-3xl 
                   shadow-[0_0_30px_#ff00ff44] overflow-hidden 
                   flex flex-col md:flex-row items-center transition-all duration-500"
      >
        {" "}
        <div className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] bg-pink-500 rounded-full opacity-30 blur-[120px] z-0" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-30 blur-[120px] z-0" />
        <div className="flex flex-col gap-[10px] items-center justify-center w-full md:w-[40%] p-6 z-10">
          <img
            src={feedback.logo ?? "./images/not-found-avatart.png"}
            alt={feedback.name}
            className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] 
                       object-cover rounded-full border-4 border-fuchsia-600 
                       shadow-[0_0_30px_rgba(255,0,255,0.4)]"
          />
          <p className="text-center text-break text-md md:text-md font-semibold text-pink-300 uppercase tracking-wider">
            {feedback.name}
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center p-6 w-full text-white z-10">
          <h2
            className="text-center text-xl md:text-2xl font-black uppercase text-fuchsia-200 tracking-widest 
                         drop-shadow-[0_0_6px_rgba(255,0,255,0.9)]"
          >
            {feedback.companyTitle}
          </h2>

          <p className="text-center text-md md:text-md font-semibold text-pink-300 uppercase tracking-wider">
            {feedback.position}
          </p>

          <div className="flex justify-center flex-wrap items-center gap-[10px]">
            <span className="font-bold break-words">
              {feedback.city} ({feedback.country})
            </span>{" "}
            <span className="italic">{i.dataConvector(feedback.date)}</span>
          </div>
          {visible ? (
            <i.motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="md:hidden flex absolute top-0 left-0 w-full h-full bg-black/90 p-6 rounded-2xl text-white flex flex-col items-center justify-between z-20 pointer-events-auto"
              style={{ pointerEvents: visible ? "auto" : "none" }}
            >
              <p className="overflow-y-auto text-[14px] leading-relaxed font-light max-h-[calc(100%-56px)] custom-scroll">
                {feedback.description}
              </p>
              <button
                onClick={() => setVisible(false)}
                className="mt-4 w-full transition duration-300  px-4 max-w-[350px] py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-sm font-semibold shadow-md"
              >
                ❌ Hide feedback
              </button>
            </i.motion.div>
          ) : (
            <div className="md:hidden transition duration-300  flex flex-col items-center justify-center">
              {" "}
              <button
                onClick={() => setVisible(true)}
                className="flex-1 px-2 py-2 max-w-[200px] rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
              >
                Feedback
              </button>
            </div>
          )}
          <p className="hidden md:block text-base text-white/90 leading-relaxed text-center md:text-left font-light">
            {feedback.description}
          </p>
          {route ? (
            <div className="w-full flex items-center justify-end">
              {" "}
              <i.Button
                sx={{
                  color: "white",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
                onClick={() => {
                  navigate(i.ROUTES.UPDATE_FEEDBACK + `/${feedback.id}`);
                }}
                endIcon={<i.EditIcon />}
              />
              <i.Button
                onClick={() => mutate(feedback.id).unwrap()}
                sx={{
                  color: "red",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    color: "white",
                  },
                }}
                endIcon={
                  isLoading ? (
                    <i.CircularProgress size={10} />
                  ) : (
                    <i.DeleteForeverIcon />
                  )
                }
              />
            </div>
          ) : null}
        </div>
      </i.motion.div>
    </div>
  );
};
