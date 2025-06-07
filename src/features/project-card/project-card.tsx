import * as i from "./imports";

type Props = {
  project: i.Projects;
  idx: number;
};

export const ProjectCard: React.FC<Props> = ({ project, idx }) => {
  return (
    <i.motion.div
      initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      key={project.id}
      className="relative group overflow-hidden w-[280px] min-h-[340px] rounded-2xl border border-white/30 bg-black/40 backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,0,80,0.5)] transition-all duration-500"
    >
      <div className="absolute top-0 left-0 h-full w-1 bg-pink-500 opacity-50 animate-pulse z-0" />
      <div className="absolute top-0 right-0 h-full w-1 bg-fuchsia-500 opacity-50 animate-pulse z-0" />

      <div className="relative z-10 flex flex-col items-center justify-between p-6 text-white h-full">
        <img
          src={project.logo}
          alt={project.title}
          className="w-[80px] h-[80px] object-contain mb-4 drop-shadow-[0_0_5px_white]"
        />
        <p className="text-xl font-extrabold tracking-wide uppercase text-center text-pink-400 drop-shadow-[0_0_4px_rgba(255,0,100,0.5)]">
          {project.title}
        </p>
        <p className="text-sm italic text-white/80 text-center">
          {i.dataConvector(project.startAt)} – {i.dataConvector(project.endAt)}
        </p>
        <p
          className="mt-4 text-[13px] overflow-y-auto
custom-scroll text-center text-white/90 font-light leading-snug max-h-[100px] overflow-y-auto "
        >
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          className="mt-6 px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-sm font-semibold shadow-md"
        >
          Visit Project →
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/0 opacity-10 z-0 pointer-events-none rounded-2xl" />
    </i.motion.div>
  );
};
