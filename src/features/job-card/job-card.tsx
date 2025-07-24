import { useNavigate } from "react-router-dom";

import * as i from "./imports";

type JobCardType = {
  job: i.Jobs;
  route: boolean;
};
export const JobCard = ({ job, route }: JobCardType) => {
  console.log(`route`, route);
  const {
    companyTitle,
    description,
    endAt,
    jobTitle,
    software_id,
    startAt,
    id,
    logo,
  } = job;
  const navigate = useNavigate();
  console.log(route);
  return (
    <i.motion.div
      onClick={() => {
        if (route) {
          navigate(i.ROUTES.UPDATE_EXPERIENCE + `/${id}`);
        }
      }}
      key={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: id * 0.2, ease: "easeOut" }}
      className="cursor-pointer
 transform-gpu relative w-full md:w-[80%] xl:w-[60%] bg-[#13131f]/70 border border-fuchsia-600/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,0,200,0.15)] hover:shadow-[0_0_70px_rgba(255,0,200,0.35)] hover:scale-[1.025] hover:bg-[#13131f]/95 ]  transition-all duration-700 ease-in-out overflow-hidden group "
    >
      {" "}
      {route ? (
        <div className="w-full flex items-center justify-end">
          {" "}
          <i.Button
            sx={{
              color: "white",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={() => {
              navigate(i.ROUTES.EXPERIENCE + `/${id}`);
            }}
            endIcon={<i.EditIcon />}
          />
        </div>
      ) : null}
      <div className="absolute top-[-40%] left-[-40%] w-[180%] h-[180%] bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-blue-500 opacity-20 animate-pulse-slow z-0" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-xl border border-pink-500/30 bg-white/10 flex items-center justify-center overflow-hidden shadow-inner shadow-pink-800/50 will-change-transform">
            <img
              src={
                logo === "https://avatar.com" || !logo
                  ? "./images/job-default.png"
                  : logo
              }
              alt={companyTitle}
              className="w-11 h-11 object-contain pointer-events-none will-change-transform"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="text-sm text-pink-400 uppercase tracking-wider font-bold">
              {companyTitle}
            </p>
            <h3 className="text-2xl font-extrabold text-white leading-tight drop-shadow-md">
              {jobTitle}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row flex-wrap gap-3 text-xs font-semibold text-white/90">
          <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 px-4 py-1 rounded-full shadow-md w-fit">
            🚀 Start: {startAt}
          </span>
          <span className="bg-gradient-to-r from-pink-700 to-red-600 px-4 py-1 rounded-full shadow-md w-fit">
            🛑 End: {endAt}
          </span>
        </div>

        <p className="text-sm text-gray-200 text-center sm:text-start leading-relaxed tracking-wide italic">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 via-blue-500 to-fuchsia-500 animate-pulse" />
    </i.motion.div>
  );
};
