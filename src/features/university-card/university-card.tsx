import * as i from "./imports";

type Props = {
  university: i.Universities;
  idx: number;
  route: boolean;
};
export const UniversityCard = (props: Props) => {
  const { university, idx, route = false } = props;
  const [visible, setVisible] = i.useState(false);
  const [visibleDescription, setVisibleDescription] = i.useState(false);
  const [zoomed, setZoomed] = i.useState(false);
  const navigate = i.useNavigate();
  console.log(`route`, route);
  return (
    <div
      key={university.id || idx}
      className="w-full xl:w-[75%] xxl:w-[50%] h-auto"
    >
      <i.motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-lg bg-dark/20 dark:bg-white/10 shadow-xl border border-white/30 dark:border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch transition-all duration-500"
      >
        {" "}
        <div className="flex items-center justify-center p-4 bg-dark/40  ">
          <img
            src={university.companyLogo}
            alt={university.companyTitle}
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
                  navigate(i.ROUTES.UPDATE_EDUCATION + `/${university.id}`);
                }}
                endIcon={<i.EditIcon />}
              />
            </div>
          ) : null}
          <h1 className="text-2xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
            {university.companyTitle}
          </h1>
          <p className="text-xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
            {university.title}
          </p>

          <div className="w-full flex items-center justify-center gap-[10px]">
            {" "}
            <span className="text-[13px] bg-gradient-to-r from-purple-700 to-fuchsia-700 px-2 py-1 rounded-full shadow-md w-fit">
              🚀 {i.dataConvector(university.startAt)}
            </span>
            <span className="text-[13px] bg-gradient-to-r from-pink-700 to-red-600 px-2 py-1 rounded-full shadow-md w-fit">
              🛑 {i.dataConvector(university.endAt)}
            </span>
          </div>

          <p className="text-base leading-relaxed hidden md:block">
            {university.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            {visibleDescription ? (
              <i.motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  visibleDescription
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4 }}
                className="md:hidden flex absolute top-0 left-0 w-full h-full bg-black/90 p-6 rounded-2xl text-white flex flex-col items-center justify-between z-20 pointer-events-auto"
                style={{ pointerEvents: visibleDescription ? "auto" : "none" }}
              >
                {" "}
                <p className="text-base leading-relaxed max-h-[calc(100%-56px)] custom-scroll">
                  {university.description}
                </p>
                <button
                  onClick={() => setVisibleDescription(false)}
                  className="mt-4 w-full px-4 max-w-[350px] py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-sm font-semibold shadow-md"
                >
                  ❌ Hide description
                </button>
              </i.motion.div>
            ) : (
              <div className="md:hidden flex flex-col items-center justify-center">
                {" "}
                <button
                  onClick={() => setVisibleDescription(true)}
                  className="flex-1 px-2 py-2 max-w-[200px] rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
                >
                  Description
                </button>
              </div>
            )}
            <i.CustomizedBtn
              click={() => {
                setVisible(true);
              }}
              label="Diploma"
              Icon="SchoolIcon"
            />

            <a href={university.link} target="_blank" rel="noopener noreferrer">
              <i.CustomizedBtn label="University" Icon="CastForEducationIcon" />
            </a>
          </div>
        </div>
        {visible ? (
          <i.Modal
            open={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <i.Box
              onClick={() => setVisible(false)}
              sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <i.Box
                onClick={(e) => e.stopPropagation()}
                sx={{
                  overflow: "hidden",
                  cursor: zoomed ? "zoom-out" : "zoom-in",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                onDoubleClick={() => setZoomed(!zoomed)}
              >
                <img
                  src={university.certificate}
                  alt="Certificate"
                  style={{
                    transition: "transform 0.3s ease",
                    transform: zoomed ? "scale(1.5)" : "scale(1)",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </i.Box>
            </i.Box>
          </i.Modal>
        ) : null}
      </i.motion.div>
    </div>
  );
};
