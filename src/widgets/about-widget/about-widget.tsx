import * as i from "./imports";
export const AboutWidget = () => {
  const personal = i.useSelector(
    (state: i.AppRootState) => state.personalSlice.data
  );
  return (
    <div className="relative z-10 max-w-4xl w-full bg-[#111827]/80 border border-indigo-500 shadow-2xl rounded-2xl p-10 backdrop-blur-sm">
      <div className="flex justify-center mb-8">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img
            src={personal[0]?.avatar}
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        About Me
      </h1>

      <h2
        style={{ fontFamily: "Rocket" }}
        className="text-md md:text-xl text-indigo-200 font-medium mb-6 text-center uppercase tracking-widest"
      >
        Precision. Performance. Results.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#e2e8f0] text-lg">
        <div>
          <p>
            <span className="text-white font-semibold">Name:</span>{" "}
            {personal[0]?.username} {personal[0]?.surname}
          </p>
          <p>
            <span className="text-white font-semibold">Age:</span>{" "}
            {personal[0]?.age}
          </p>
          <p>
            <span className="text-white font-semibold">Location:</span>{" "}
            {personal[0]?.city}, {personal[0]?.country}
          </p>
        </div>
        <div>
          <p>
            <span className="text-white font-semibold">Experience:</span>{" "}
            {personal[0]?.yearExperince} years
          </p>
          <p>
            <span className="text-white font-semibold">Role:</span>{" "}
            {personal[0]?.description}
          </p>
          <p>
            <span className="text-white font-semibold">Focus:</span> Fullstack
            development, system design
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-[#cbd5e1] text-base leading-relaxed">
        <p>
          I build scalable, modern, and maintainable web applications with
          precision and speed. Every project I take on is approached as a
          mission: to deliver excellence through code.
        </p>
      </div>
    </div>
  );
};
