const MainPage = () => {
  return (
    <div className="flex  flex-grow flex-col items-center justify-center w-full h-full">
      <div className="px-[10px] py-[20px] flex flex-col items-center justify-center">
        <h1
          style={{ fontFamily: "Revamped" }}
          className=" xs:text-[40px] md:text-[80px] text-[45px] text-center break-words font-revamped uppercase 
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#ffffff] via-[#a855f7] to-[#ffffff]
           "
        >
          From Idea to Interface
        </h1>
        <h4
          style={{ fontFamily: "Revamped" }}
          className="text-[#ffffff] text-[20px] md:text-[30px] text-center font-bold font-revamped uppercase  
break-words  "
        >
          Fullstack development – Aleksandr Ivantsov
        </h4>
      </div>
    </div>
  );
};

export default MainPage;
