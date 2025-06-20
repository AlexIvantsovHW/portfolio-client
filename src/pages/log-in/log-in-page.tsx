import { useGetPersonalDataQuery } from "@/shared/api/requests/personal";
import { RocketLoader } from "@/shared/ui/rocket-loader";
import { LoginWidget } from "@/widgets/login-widget";

const LoginPage = () => {
  const { data, isLoading } = useGetPersonalDataQuery(20);

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12 bg-cover bg-center relative">
      {isLoading ? (
        <div className="w-full h-full flex-grow flex items-center justify-center">
          <RocketLoader />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-[20px] items-center justify-start">
          {" "}
          <h1
            style={{ fontFamily: "Revamped" }}
            className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
          >
            Login
          </h1>
          <LoginWidget />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
