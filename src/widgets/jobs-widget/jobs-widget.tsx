import * as i from "./imports";
type Props = { route: boolean };
export const JobsWidget = (props: Props) => {
  return (
    <div className="w-full">
      <i.JobListSkelet route={props.route} />
    </div>
  );
};
