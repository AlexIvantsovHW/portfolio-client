import { lazy, ReactNode, Suspense, useEffect, useState } from "react";
import { Header } from "../Header";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { shallowEqual } from "react-redux";
import { useLocation } from "react-router";
import { CosimBg } from "@/shared/ui/cosmicBg/cosmic-bg";
const Sidebar = lazy(() => import("../sidebar/sidebar"));

const Navbar = lazy(() => import("@/shared/ui/navbar/navbar"));
const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  const openNavbar = useSelector(
    (state: AppRootState) => state.navbarSlice.open,
    shallowEqual
  );
  const openSidebar = useSelector(
    (state: AppRootState) => state.sidebarSlice.open,
    shallowEqual
  );
  const router = useLocation();

  return (
    <div
      className={`relative w-full min-h-screen overflow-x-hidden ${cl} ${
        router.pathname != "/" ? "cosmic-bg" : ""
      }`}
    >
      {router.pathname === "/" && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/40"
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/images/galaxy.webp"
          playsInline
        >
          <source src="/video/main-video.webm" type="video/webm" />
        </video>
      )}

      {router.pathname !== "/" && <CosimBg />}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 h-full">
          <Suspense fallback={null}>{openSidebar && <Sidebar />}</Suspense>
          <main className={`flex-grow h-full flex flex-col `}>
            {children}
            <Suspense fallback={null}>{openNavbar && <Navbar />}</Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
