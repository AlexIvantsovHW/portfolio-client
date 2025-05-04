import * as i from "./imports";
type Props = {
  project: i.Projects;
  idx: number;
};
export const ProjectCard: React.FC<Props> = ({ project, idx }) => {
  console.log(idx);
  return (
    <i.motion.div
      initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "tween", duration: 0.4 }}
      key={project.id}
      className="hover:scale-[105%] transition ease-in-out  duration-500  relative overflow-hidden w-[250px] min-h-[300px] rounded-2xl  text-white backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
    >
      <div className="relative z-10 flex flex-col items-center justify-between w-[250px] min-h-[300px]  p-6 ">
        <img src={project.logo} alt={project.title} />
        <p className="text-[20px] font-bold">{project.title}</p>
        <p className="text-[15px] italic">
          {i.dataConvector(project.startAt)}-{i.dataConvector(project.endAt)}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-1/5 h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.4),transparent)] rounded-2xl opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-1/5 h-full bg-[linear-gradient(to_left,rgba(255,255,255,0.4),transparent)] rounded-2xl opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-10 pointer-events-none z-0 rounded-2xl" />
    </i.motion.div>
  );
};
