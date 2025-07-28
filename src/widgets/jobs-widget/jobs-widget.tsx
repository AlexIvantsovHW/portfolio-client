import * as i from "./imports";
type Props = { route: boolean };
export const JobsWidget = (props: Props) => {
  const navigate = i.useNavigate();
  return (
    <div className="w-full">
      <div>
        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            onClick={() => navigate(i.ROUTES.CREATE_JOB)}
            className="px-6 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300 font-medium shadow-md"
          >
            Add new job
          </button>
        </div>
      </div>
      <i.JobListSkelet route={props.route} />
    </div>
  );
};
