import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  return (
    <div className={`relative w-full min-h-screen overflow-hidden ${cl}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-black/40 "
        src="/video/main-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow h-full flex flex-col">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
