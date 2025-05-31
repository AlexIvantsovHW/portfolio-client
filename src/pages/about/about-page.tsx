import { AppRootState } from "@/app/store";
import { useGetPersonalDataQuery } from "@/shared/api/requests/personal";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const { data } = useGetPersonalDataQuery(20);

  const personal = useSelector(
    (state: AppRootState) => state.personalSlice.data
  );
  const { age, city, country, description, surname, username, yearExperince } =
    personal[0];

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12 bg-cover bg-center relative">
      <div className="absolute inset-0 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-4xl w-full bg-[#111827]/80 border border-indigo-500 shadow-2xl rounded-2xl p-10 backdrop-blur-sm">
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <img
              src="/images/avatar.jpg"
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[40px] md:text-[56px] text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
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
              <span className="text-white font-semibold">Name:</span> {username}{" "}
              {surname}
            </p>
            <p>
              <span className="text-white font-semibold">Age:</span> {age}
            </p>
            <p>
              <span className="text-white font-semibold">Location:</span> {city}
              , {country}
            </p>
          </div>
          <div>
            <p>
              <span className="text-white font-semibold">Experience:</span>{" "}
              {yearExperince} years
            </p>
            <p>
              <span className="text-white font-semibold">Role:</span>{" "}
              {description}
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
    </div>
  );
};

export default AboutPage;
