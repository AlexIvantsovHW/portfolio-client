import * as i from "./imports";
const widget = ({ route }: { route: boolean }) => {
  const data = i.useSelector(
    (state: i.AppRootState) => state.universitiesSlice.data
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
    <div className="w-full  flex flex-col items-center justify-start  ">
      <i.UniversityListSkillet
        route={route}
        data={filteredData.sort(
          (a, b) => Date.parse(b.endAt) - Date.parse(a.endAt)
        )}
      />
      <button
        onClick={handleProjects}
        className="flex items-center justify-center text-orangeLight text-[15px] hover:border-b hover:border-b-orangeLight py-[5px] hover:text-orangeDark hover:border-orangeDark transition ease-in-out  duration-500 "
      >
        <span>
          {data.length <= 3
            ? null
            : data.length > value
            ? "See More"
            : "Hidden All"}
        </span>
      </button>
    </div>
  );
};
export const EducationWidget = i.memo(widget);
