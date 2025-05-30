import * as icons from "@/shared/ui/icons";
import * as i from "./imports";

type Props = {
  label: string;
  Icon?:
    | "WebStoriesIcon"
    | "WorkIcon"
    | "SmartphoneIcon"
    | "ThumbUpAltIcon"
    | "LoginIcon"
    | "PersonIcon"
    | "CastForEducationIcon"
    | "SchoolIcon";
  route: string;
};

export const NavbarBtn: React.FC<Props> = ({ label, Icon, route }) => {
  const router = i.useNavigate();
  const dispatch = i.useDispatch();
  const IconComponent = Icon ? icons[Icon] : null;
  const handleClick = async () => {
    await dispatch(i.setOpen(false));
    router(route);
  };
  return (
    <div
      className="group flex items-center justify-start gap-[10px] cursor-pointer
           border border-transparent rounded-[25px] p-[5px] min-h-[40px] min-w-[140px]
           hover:border-white hover:bg-white
           transition-colors duration-700 ease-in-out"
      onClick={handleClick}
    >
      {" "}
      {IconComponent && (
        <IconComponent className="text-white transition-colors duration-300 group-hover:text-[#a855f7]" />
      )}
      <span className="group-hover:text-[#a855f7]">{label}</span>
    </div>
  );
};
