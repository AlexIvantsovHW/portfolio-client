import * as i from "./imports";
export const EducationWidget = () => {
  const universityData = i.useSelector(
    (state: i.AppRootState) => state.universitiesSlice.data
  );
  const memoUniversityData = i.useMemo(() => {
    return [...universityData].sort((a, b) => {
      const bDate = new Date(b.endAt).getTime();
      const aDate = new Date(a.endAt).getTime();
      return bDate - aDate;
    });
  }, [universityData]);
  const [value, setValue] = i.useState(1);
  console.log("Render EducationWidget");

  return (
    <div>
      Education widget
      <i.UniversityListSkillet data={memoUniversityData} />
      <button onClick={() => setValue(value + 1)}>clicks</button>
    </div>
  );
};
