import { ReactNode } from "react";
import { Header } from "../Header";
import { Navbar } from "@/shared/ui/navbar";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { AnimatePresence } from "framer-motion";

const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  const openNavbar = useSelector(
    (state: AppRootState) => state.navbarSlice.open
  );
  return (
    <div className={`relative w-full min-h-screen overflow-x ${cl}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/40 "
        src="/video/main-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-90 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow h-full flex flex-col top-[100px]">
          {children}
          <AnimatePresence>{openNavbar && <Navbar />}</AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
