import * as i from "./imports";

export const UniversityCard = i.memo(
  (props: i.Tprop<i.Universities> & { idx: number }) => {
    const { data, idx, route = false } = props;
    const [configs, setConfigs] = i.useState({
      visible: false,
      visibleDescription: false,
      zoomed: false,
    });

    const navigate = i.useNavigate();
    const [mutate, { isLoading }] = i.useDeleteEducationMutation();
    const handleCard = i.useMemo(() => {
      console.log("handleCard");
      return {
        visible: () =>
          setConfigs((prev) => ({ ...prev, visible: !prev.visible })),
        zoomed: () => setConfigs((prev) => ({ ...prev, zoomed: !prev.zoomed })),
        description: () =>
          setConfigs((prev) => ({
            ...prev,
            visibleDescription: !prev.visibleDescription,
          })),
      };
    }, []);
    return (
      <div
        key={data?.id || idx}
        className="w-full xl:w-[75%] xxl:w-[50%] h-auto"
      >
        <i.motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="backdrop-blur-lg bg-dark/20 dark:bg-white/10 shadow-xl border border-white/30 dark:border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch transition-all duration-500"
        >
          {" "}
          <div className="flex items-center justify-center p-4 bg-dark/40  ">
            <img
              src={data?.companyLogo}
              alt={data?.companyTitle}
              loading="lazy"
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
                    navigate(i.ROUTES.UPDATE_EDUCATION + `/${data?.id}`);
                  }}
                  endIcon={<i.EditIcon />}
                />{" "}
                <i.Button
                  onClick={() => mutate(data?.id)}
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
            <h1 className="text-2xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
              {data?.companyTitle}
            </h1>
            <p className="text-xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
              {data?.title}
            </p>

            <div className="w-full flex items-center justify-center gap-[10px]">
              {" "}
              <span className="text-[13px] bg-gradient-to-r from-purple-700 to-fuchsia-700 px-2 py-1 rounded-full shadow-md w-fit">
                🚀 {i.dataConvector(data?.startAt)}
              </span>
              <span className="text-[13px] bg-gradient-to-r from-pink-700 to-red-600 px-2 py-1 rounded-full shadow-md w-fit">
                🛑 {i.dataConvector(data?.endAt)}
              </span>
            </div>

            <p className="text-base leading-relaxed hidden md:block">
              {data?.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              {configs.visibleDescription ? (
                <i.motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    configs.visibleDescription
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4 }}
                  className="md:hidden flex absolute top-0 left-0 w-full h-full bg-black/90 p-6 rounded-2xl text-white flex flex-col items-center justify-between z-20 pointer-events-auto"
                  style={{
                    pointerEvents: configs.visibleDescription ? "auto" : "none",
                  }}
                >
                  {" "}
                  <p className="text-base leading-relaxed max-h-[calc(100%-56px)] custom-scroll">
                    {data?.description}
                  </p>
                  <i.CardBtn
                    label="❌ Hide description"
                    click={handleCard.description}
                    close={false}
                  />
                </i.motion.div>
              ) : (
                <div className="md:hidden flex flex-col items-center justify-center">
                  {" "}
                  <i.CardBtn
                    label="Description"
                    click={handleCard.description}
                  />
                </div>
              )}
              <i.CustomizedBtn
                click={handleCard.visible}
                label="Diploma"
                Icon="SchoolIcon"
              />

              <a href={data?.link} target="_blank" rel="noopener noreferrer">
                <i.CustomizedBtn
                  label="University"
                  Icon="CastForEducationIcon"
                />
              </a>
            </div>
          </div>
          {configs.visible ? (
            <i.Modal
              open={configs.visible}
              onClose={handleCard.visible}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <i.Box
                onClick={handleCard.visible}
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
                    cursor: configs.zoomed ? "zoom-out" : "zoom-in",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  onDoubleClick={handleCard.zoomed}
                >
                  <img
                    src={data?.certificate ?? "./images/education-default.png"}
                    alt="Certificate"
                    loading="lazy"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: configs.zoomed ? "scale(1.5)" : "scale(1)",
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
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  }
);
