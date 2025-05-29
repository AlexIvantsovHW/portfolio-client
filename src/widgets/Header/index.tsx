import * as i from "./imports";

export const Header = () => {
  const router = i.useNavigate();
  return (
    <section
      className="sticky w-full items-center flex justify-center h-[80px]"
      style={{ fontFamily: "Cinzel" }}
    >
      <header className="w-full xl:w-[75%] flex items-center justify-between  h-full px-[2.5%]">
        <img
          onClick={() => router(i.ROUTES.HOME)}
          src="./logo.png"
          width={30}
          height={30}
          alt="logo"
          className="cursor-pointer hover:scale-[105%] transition ease-in-out  duration-500"
        />{" "}
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
