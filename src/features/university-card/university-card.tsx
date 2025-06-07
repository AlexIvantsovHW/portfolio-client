import { Box, Modal } from "@mui/material";
import * as i from "./imports";

type Props = {
  university: i.Universities;
  idx: number;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const UniversityCard = (props: Props) => {
  const { university, idx } = props;
  const [visible, setVisible] = i.useState(false);
  const [zoomed, setZoomed] = i.useState(false);
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
        className="backdrop-blur-lg bg-white/20 dark:bg-white/10 shadow-xl border border-white/30 dark:border-white/20 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch transition-all duration-500"
      >
        <div className="flex items-center justify-center p-4 bg-white/10 dark:bg-white/5 ">
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

        <div className="w-full flex-grow flex flex-col gap-4 justify-center p-6 text-white dark:text-white">
          <h1 className="text-2xl font-bold tracking-wide text-orange-500">
            {university.companyTitle}
          </h1>
          <p className="text-lg font-medium  text-white dark:text-orange-400">
            {university.title}
          </p>
          <p className="text-sm text-white dark:text-gray-300">
            {i.dataConvector(university.startAt)} –{" "}
            {i.dataConvector(university.endAt)}
          </p>
          <p className="text-base leading-relaxed">{university.description}</p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
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
          <Modal
            open={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
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
              <Box
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
              </Box>
            </Box>
          </Modal>
        ) : null}
      </i.motion.div>
    </div>
  );
};
