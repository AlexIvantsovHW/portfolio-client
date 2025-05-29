import * as i from "./imports";

export const Header = () => {
  const router = i.useNavigate();
  return (
    <section
      className="sticky w-full items-center flex justify-center h-[80px] bg-[#000000]/20"
      style={{ fontFamily: "Cinzel" }}
    >
      <header className="w-full xl:w-[75%] flex items-center justify-between  h-full px-[2.5%]">
        <h1
          onClick={() => router(i.ROUTES.HOME)}
          style={{ fontFamily: "Revamped" }}
          className="font-revamped text-[60px] hover:text-[70px] hover:text-[#a855f7] hover:rotate-359 transition duration-700 ease-in-out text-[#ffffff] cursor-pointer"
        >
          A
        </h1>
        <div className="w-full flex items-center justify-end gap-[15px]">
          <i.CustomizedBtn
            label="About"
            Icon="PersonIcon"
            route={i.ROUTES.ABOUT}
          />
          <i.CustomizedBtn
            label="Experience"
            Icon="WorkIcon"
            route={i.ROUTES.EXPERIENCE}
          />
          <i.CustomizedBtn
            label="Projects"
            Icon="WebStoriesIcon"
            route={i.ROUTES.PROJECTS}
          />
          <i.CustomizedBtn
            label="Education"
            Icon="SchoolIcon"
            route={i.ROUTES.EDUCATION}
          />
          <i.CustomizedBtn
            label="Contact"
            Icon="SmartphoneIcon"
            route={i.ROUTES.CONTACT}
          />
          <i.CustomizedBtn
            label="Feedback"
            Icon="ThumbUpAltIcon"
            route={i.ROUTES.FEEDBACK}
          />
          <i.CustomizedBtn
            label="Sign In"
            Icon="LoginIcon"
            route={i.ROUTES.SIGN_IN}
          />
        </div>
      </header>
    </section>
  );
};
export default Header;
