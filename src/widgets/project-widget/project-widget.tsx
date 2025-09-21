import * as i from "./imports";
type Props = {
  route: boolean;
};
const widget = (props: Props) => {
  const projects = i.useSelector(
    (state: i.AppRootState) => state.projectsSlice.data,
    i.shallowEqual
  );
  const [isClient, setIsClient] = i.useState(false);
  const [value, setValue] = i.useState<number>(3);
  i.useEffect(() => {
    setIsClient(true);
  }, []);
  const filteredData = i.useMemo(() => {
    return projects.slice(0, value);
  }, [projects, value]);
  const handleProjects = i.useCallback(() => {
    if (projects.length > value) {
      setValue(value + 2);
    } else {
      setValue(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [projects, value]);

  return (
    <div className="w-full  flex flex-col items-center justify-start gap-[10px] ">
      <i.ProjectListSkillet data={filteredData} route={props.route} />

      {projects.length <= 3 ? null : (
        <i.CustomButton
          onclick={handleProjects}
          label={projects.length > value ? "See More" : "Hidden All"}
        />
      )}
    </div>
  );
};
export const ProjectWidget = i.memo(widget);
