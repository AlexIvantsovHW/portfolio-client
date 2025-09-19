import * as i from "./imports";

const ProjectListSkillet: React.FC<i.Tprop<i.Projects[]>> = ({
  data,
  route,
}) => {
  return (
    <div className="w-full md2:w-[75%] flex items-center justify-center  md2:justify-around  gap-[20px] flex-wrap">
      <i.AnimatePresence>
        {data?.map((project, idx) => (
          <i.ProjectCard
            key={project.id || idx}
            data={project}
            idx={idx}
            route={!route}
          />
        ))}
      </i.AnimatePresence>
    </div>
  );
};

export default i.memo(ProjectListSkillet);
