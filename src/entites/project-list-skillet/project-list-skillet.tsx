import * as i from "./imports";
type Props = {
  data: i.Projects[];
  route: boolean;
};
const ProjectListSkillet: React.FC<Props> = ({ data, route }) => {
  return (
    <div className="w-full md2:w-[75%] flex items-center justify-center  md2:justify-around  gap-[20px] flex-wrap">
      <i.AnimatePresence>
        {data?.map((project, idx) => (
          <i.ProjectCard
            key={project.id || idx}
            project={project}
            idx={idx}
            route={route}
          />
        ))}
      </i.AnimatePresence>
    </div>
  );
};

export default i.memo(ProjectListSkillet);
