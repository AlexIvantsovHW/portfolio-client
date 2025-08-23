import { useDispatch, useSelector } from "react-redux";
import * as i from "./imports";
import { AppRootState } from "@/app/store";
import { setOpen } from "@/shared/ui/navbar/slice";
import { useEffect } from "react";

export const Header = () => {
  const router = i.useNavigate();
  const dispatch = useDispatch();
  const [auth, setAuth] = i.useState(false);
  const open = useSelector((state: AppRootState) => state.navbarSlice);
  const handleBurgerMenu = async () => {
    await window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setOpen(!open.open));
  };
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    setAuth(true);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access_token");

    window.location.replace(import.meta.env.VITE_FRONTEND_URL as string);
  };
  return (
    <section
      className="sticky top-0 backdrop-blur-sm  w-full items-center flex justify-center h-[80px] bg-[#000000]/20"
      style={{ fontFamily: "Cinzel", zIndex: 999, position: "sticky", top: 0 }}
    >
      <header className=" w-full xl:w-[75%] flex items-center justify-between  h-full px-[2.5%]">
        <h1
          onClick={() => router(i.ROUTES.HOME)}
          style={{ fontFamily: "Revamped" }}
          className="font-revamped text-[60px] hover:text-[70px] hover:text-[#a855f7] hover:rotate-359 transition duration-700 ease-in-out text-[#ffffff] cursor-pointer"
        >
          A
        </h1>
        <div className="w-full hidden sm:flex flex items-center justify-end gap-[15px]">
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
          {!auth ? (
            <i.CustomizedBtn
              label="Sign In"
              Icon="LoginIcon"
              route={i.ROUTES.LOGIN}
            />
          ) : (
            <i.CustomizedBtn
              label="Logout"
              Icon="LogoutIcon"
              click={handleLogout}
            />
          )}
        </div>
        <div className="block sm:hidden flex w-full h-full items-center justify-end">
          <i.MenuIcon
            onClick={handleBurgerMenu}
            className="text-white hover:text-[#a855f7] cursor-pointer hover:scale-[105%]"
          />
        </div>
      </header>
    </section>
  );
};
export default Header;
