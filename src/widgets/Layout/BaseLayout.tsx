import { lazy, ReactNode, Suspense, useEffect, useState } from "react";
import { Header } from "../Header";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
const Sidebar = lazy(() => import("../sidebar/sidebar"));

const Navbar = lazy(() => import("@/shared/ui/navbar/navbar"));
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
  return (
    <div className={`relative w-full min-h-screen overflow-x-hidden ${cl}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/40"
        src="https://cdn.pixabay.com/video/2021/07/21/82360-577813663_large.mp4"
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/galaxy.webp"
        playsInline
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 h-full">
          <Suspense fallback={null}>{sidebar && <Sidebar />}</Suspense>
          <main className="flex-grow h-full flex flex-col">
            {children}
            <Suspense fallback={null}>{openNavbar && <Navbar />}</Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
