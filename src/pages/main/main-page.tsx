const MainPage = () => {
  return (
    <div className="flex border flex-grow flex-col items-center justify-center w-full h-full">
      <div className="px-[10px] py-[20px] flex flex-col items-center justify-center">
        <h1
          style={{ fontFamily: "Revamped" }}
          className="text-[80px] font-bold font-revamped uppercase outline-black
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#ffffff] via-[#a855f7] to-[#ffffff]
            bg-[length:200%_200%] animate-wave"
        >
          From Idea to Interface
        </h1>
        <h4
          style={{ fontFamily: "Revamped" }}
          className="text-[#ffffff] text-[20px] font-bold font-revamped uppercase"
        >
          Fullstack development – Aleksandr Ivantsov
        </h4>
      </div>
    </div>
  );
};

export default MainPage;
