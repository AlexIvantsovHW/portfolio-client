export const ErrorComponent = () => {
  return (
    <div className="w-full   flex-grow flex items-center justify-center flex-wrap  ">
      <img src="./images/error.png" width={150} height={150} alt="error" />
      <span
        style={{ fontFamily: "Revamped" }}
        className="h-full text-[30px]  md:text-[46px] break-words text-red-400 font-extrabold tracking-wide mb-4 text-center drop-shadow-md "
      >
        {" "}
        Error
      </span>
    </div>
  );
};
