import { SignInWidget } from "@/widgets/sign-in-widget";

const SigninPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12 bg-cover bg-center relative">
      <div className="w-full h-full flex flex-col gap-[20px] items-center justify-start">
        {" "}
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
        >
          Sign In
        </h1>
        <SignInWidget />
      </div>
    </div>
  );
};

export default SigninPage;
