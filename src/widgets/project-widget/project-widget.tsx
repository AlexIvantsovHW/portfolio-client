import * as i from "./imports";
const ProjectWidget = () => {
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.projectsSlice
  );
  const [isClient, setIsClient] = i.useState(false);
  const [value, setValue] = i.useState<number>(2);
  i.useEffect(() => {
    setIsClient(true);
  }, []);
  const filteredData = i.useMemo(() => {
    return data.slice(0, value);
  }, [value]);
  const handleProjects = () => {
    if (data.length > value) {
      setValue(value + 2);
    } else {
      setValue(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start ">
      <h1 className="text-orangeLight">PROJECTS</h1>
      <video>
        <source />
      </video>
      <i.ProjectListSkillet data={filteredData} />
      <button
        onClick={handleProjects}
        className="flex items-center justify-center text-orangeLight text-[15px] hover:border-b hover:border-b-orangeLight py-[5px] hover:text-orangeDark hover:border-orangeDark transition ease-in-out  duration-500 "
      >
        <span>{data.length > value ? "See More" : "Hidden All"}</span>
      </button>
    </div>
  );
};
export default i.memo(ProjectWidget);
