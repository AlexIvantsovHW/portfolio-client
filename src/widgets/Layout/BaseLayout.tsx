import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const BaseLayout = ({ children, cl }: { children: ReactNode; cl?: string }) => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col md:flex-row  justify-between ${cl} bg-[#263337] `}
    >
      <div className="w-full flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default BaseLayout;
