import { Button } from "@mui/material";
import * as i from "./imports";

type Props = {
  project: i.Projects;
  idx: number;
  route: boolean;
};

export const ProjectCard: React.FC<Props> = ({
  project,
  idx,
  route = false,
}) => {
  const [visible, setVisible] = i.useState(false);
  const navigate = i.useNavigate();

  return (
    <i.motion.div
      initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      key={project.id}
      className="relative group overflow-hidden w-[280px] min-h-[240px] rounded-2xl border border-white/30 bg-black/40 backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,0,80,0.5)] transition-all duration-500"
    >
      <div className="absolute top-0 left-0 h-full w-1 bg-pink-500 opacity-50 animate-pulse z-0" />
      <div className="absolute top-0 right-0 h-full w-1 bg-fuchsia-500 opacity-50 animate-pulse z-0" />

      <div
        className={`relative z-10 flex flex-col items-center justify-around p-6 text-white h-full transition-opacity duration-500 ${
          visible
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {route ? (
          <div className="w-full flex items-center justify-end">
            {" "}
            <Button
              sx={{
                color: "white",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                navigate(i.ROUTES.UPDATE_PROJECTS + `/${project.id}`);
              }}
              endIcon={<i.EditIcon />}
            />
          </div>
        ) : null}

        <img
          src={project.logo}
          alt={project.title}
          className="w-[80px] h-[80px] object-contain mb-4 drop-shadow-[0_0_5px_white]"
        />
        <p className="text-xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
          {project.title}
        </p>
        <div className="flex w-full items-center justify-center gap-[10px] mt-2">
          <span className="text-[13px] bg-gradient-to-r from-purple-700 to-fuchsia-700 px-2 py-1 rounded-full shadow-md w-fit">
            🚀 {i.dataConvector(project.startAt)}
          </span>
          <span className="text-[13px] bg-gradient-to-r from-pink-700 to-red-600 px-2 py-1 rounded-full shadow-md w-fit">
            🛑 {i.dataConvector(project.endAt)}
          </span>
        </div>

        <div className="flex w-full gap-2 mt-6">
          <a
            href={project.link}
            target="_blank"
            className="flex-1 text-[13px] px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300  font-semibold shadow-md text-center"
          >
            Visit Project
          </a>
          <button
            onClick={() => setVisible(true)}
            className="flex-1 px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
          >
            Description
          </button>
        </div>
      </div>

      <i.motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 w-full h-full bg-black/90 p-6 rounded-2xl text-white flex flex-col justify-between z-20 pointer-events-auto"
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        <div className="overflow-y-auto text-[14px] leading-relaxed font-light max-h-[calc(100%-56px)] custom-scroll">
          {project.description}
        </div>
        <button
          onClick={() => setVisible(false)}
          className="mt-4 w-full px-4 py-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-sm font-semibold shadow-md"
        >
          ❌ Hide description
        </button>
      </i.motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/0 opacity-10 z-0 pointer-events-none rounded-2xl" />
    </i.motion.div>
  );
};
