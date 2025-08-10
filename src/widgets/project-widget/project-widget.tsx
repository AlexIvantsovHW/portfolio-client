import * as i from "./imports";
type Props = {
  route: boolean;
};
const widget = (props: Props) => {
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
    <div className="w-full  flex flex-col items-center justify-start gap-[10px] ">
      <i.ProjectListSkillet
        data={filteredData.sort(
          (a, b) => Date.parse(b.endAt) - Date.parse(a.endAt)
        )}
        route={props.route}
      />

      {data.length <= 3 ? null : (
        <i.CustomButton
          onclick={handleProjects}
          label={data.length > value ? "See More" : "Hidden All"}
        />
      )}
    </div>
  );
};
export const ProjectWidget = i.memo(widget);
