import { useGetAllUniversitiesQuery } from "@/shared/api/requests/universities/universities.api";
import * as i from "./imports";
import { RocketLoader } from "@/imports";
const widget = ({ route }: { route?: boolean }) => {
  const { data, isLoading } = useGetAllUniversitiesQuery(20);

  const [isClient, setIsClient] = i.useState(false);
  const [value, setValue] = i.useState<number>(3);
  i.useEffect(() => {
    setIsClient(true);
  }, []);

  if (isLoading || !data)
    return (
      <div className="w-full h-full flex-grow flex items-center justify-start">
        <RocketLoader />
      </div>
    );
  const filteredData = i.useMemo(() => {
    return data.slice(0, value);
  }, [value, data]);
  const handleProjects = () => {
    if (data.length > value) {
      setValue(value + 3);
    } else {
      setValue(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  console.log("filtered data", filteredData);

  console.log(" data", data);
  return (
    <div className="w-full  flex flex-col gap-[10px] items-center justify-start  ">
      {route ? (
        <i.CustomButton
          label={"Add new university"}
          type="button"
          route={i.ROUTES.ADD_EDUCATION}
        />
      ) : null}

      {
        <i.UniversityListSkillet
          route={route}
          data={filteredData.sort(
            (a, b) => Date.parse(b.endAt) - Date.parse(a.endAt)
          )}
        />
      }
      {data.length <= 3 ? null : (
        <i.CustomButton
          onclick={handleProjects}
          label={data.length > value ? "See More" : "Hidden All"}
        />
      )}
    </div>
  );
};
export const EducationWidget = i.memo(widget);
