import * as i from "./imports";

const widget = ({ route }: { route?: boolean }) => {
  const { data, isLoading } = i.useGetAllUniversitiesQuery(20);
  const [isClient, setIsClient] = i.useState(false);
  const [value, setValue] = i.useState<number>(2);
  const listEndRef = i.useRef<HTMLDivElement | null>(null);
  const topRef = i.useRef<HTMLDivElement | null>(null);
  i.useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = i.useMemo(() => {
    return data && data.slice(0, value);
  }, [value, data]);
  const handleProjects = () => {
    if (data && data.length > value) {
      setValue(value + 2);
      setTimeout(() => {
        listEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setValue(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  if (isLoading || !data || !filteredData)
    return (
      <div className="w-full h-full flex-grow flex items-center justify-start">
        <i.RocketLoader />
      </div>
    );

  return (
    <div className="w-full  flex flex-col gap-[10px] items-center justify-start  ">
      <div ref={topRef}></div>
      {route ? (
        <i.CustomButton
          btnValidation={true}
          label={"Add new university"}
          type="button"
          route={i.ROUTES.ADD_EDUCATION}
        />
      ) : null}

      <i.UniversityListSkillet
        route={route}
        data={filteredData?.sort(
          (a, b) => Date.parse(b.endAt) - Date.parse(a.endAt)
        )}
      />
      <div ref={listEndRef}></div>
      <i.CustomButton
        btnValidation={data.length <= 2 ? false : true}
        onclick={handleProjects}
        label={data.length > value ? "See More" : "Hidden All"}
      />
    </div>
  );
};
export const EducationWidget = i.memo(widget);
