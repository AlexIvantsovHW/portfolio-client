import * as i from "./imports";
type Props = {
  route?: boolean;
};
const Widget = (props: Props) => {
  const { route = false } = props;
  const data = i.useSelector(
    (state: i.AppRootState) => state.feedbacksSlice.data
  );
  const [isClient, setIsClient] = i.useState(false);
  const [value, setValue] = i.useState<number>(2);
  const listEndRef = i.useRef<HTMLDivElement | null>(null);
  const topRef = i.useRef<HTMLDivElement | null>(null);

  i.useEffect(() => {
    setIsClient(true);
  }, []);
  const filteredData = i.useMemo(() => {
    const sortedData = [...data]
      ?.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, value);
    return sortedData;
  }, [value, data]);
  const handleProjects = () => {
    if (data.length > value) {
      setValue((prev) => prev + 2);
      setTimeout(() => {
        listEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setValue(2);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full  flex flex-col items-center justify-start ">
      <div ref={topRef}></div>
      {route ? (
        <i.CustomButton
          label="Add new feedback"
          route={i.ROUTES.ADD_FEEDBACK}
          type="button"
        />
      ) : null}
      <i.FeedbackListSkillet data={filteredData} route={route} />
      <div ref={listEndRef}></div>

      <button
        onClick={handleProjects}
        className="flex-1 px-2 py-2 max-w-[200px] rounded-full border border-pink-500 bg-pink-600 text-pink-100 hover:bg-pink-900 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
      >
        <span>
          {data.length <= 2
            ? null
            : data.length > value
            ? "See More"
            : "Hidden All"}
        </span>
      </button>
    </div>
  );
};
export const FeedbackWidget = i.memo(Widget);
