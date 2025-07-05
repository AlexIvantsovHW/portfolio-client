import { ReactNode, useEffect, useState } from "react";
import { Header } from "../Header";
import { Navbar } from "@/shared/ui/navbar";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { AnimatePresence } from "framer-motion";
import { Sidebar } from "../sidebar";

const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  const openNavbar = useSelector(
    (state: AppRootState) => state.navbarSlice.open
  );
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return setSidebar(false);
    setSidebar(true);
  }, []);
  console.log(sidebar);
  return (
    <div className={`relative w-full min-h-screen overflow-x-hidden ${cl}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/40"
        src="/video/main-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 h-full">
          {sidebar ? <Sidebar /> : null}
          <main className="flex-grow h-full flex flex-col">
            {children}
            <AnimatePresence>{openNavbar && <Navbar />}</AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
