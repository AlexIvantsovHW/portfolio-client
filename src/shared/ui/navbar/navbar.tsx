import * as i from "./imports";
export const Navbar = () => {
  const dispatch = i.useDispatch();

  return (
    <i.motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 999 }}
      className="absolute top-0 backdrop-blur-sm flex text-white  left-0 w-[200px] min-h-screen  bg-black/80 "
    >
      <div className="relative w-full h-full flex flex-col items-start justify-center gap-[20px] py-[20px] px-[10px]">
        <i.motion.div
          onClick={() => dispatch(i.setOpen(false))}
          className="w-[20px] h-[20px] absolute right-[10px] top-[10px]"
          whileHover={{ rotate: 360, scale: 1.3 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <i.CloseIcon className="text-white cursor-pointer" />
        </i.motion.div>
        <i.NavbarBtn label="About" Icon="PersonIcon" route={i.ROUTES.ABOUT} />
        <i.NavbarBtn label="Work" Icon="WorkIcon" route={i.ROUTES.EXPERIENCE} />
        <i.NavbarBtn
          label="Projects"
          Icon="WorkIcon"
          route={i.ROUTES.PROJECTS}
        />
        <i.NavbarBtn
          label="Education"
          Icon="SchoolIcon"
          route={i.ROUTES.EDUCATION}
        />
        <i.NavbarBtn
          label="Contact"
          Icon="SmartphoneIcon"
          route={i.ROUTES.CONTACT}
        />
        <i.NavbarBtn
          label="Feedback"
          Icon="ThumbUpAltIcon"
          route={i.ROUTES.FEEDBACK}
        />
      </div>
    </i.motion.div>
  );
};
