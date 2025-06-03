import { useNavigate } from "react-router";
import * as icons from "../icons/index";

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
  route?: string;
  click?: () => void;
  labelStyle?: string;
};

export const CustomizedBtn: React.FC<Props> = ({
  label,
  Icon,
  route,
  click,
  labelStyle,
}) => {
  const router = useNavigate();
  const IconComponent = Icon ? icons[Icon] : null;
  const styles = labelStyle ?? "md2:block hidden";

  return (
    <button
      onClick={() => (route ? router(route) : click?.())}
      className="group flex w-[40px] h-[40px] cursor-pointer hover:rotate-359 hover:bg-[#ffffff]/90 border border-[#ffffff]/50 rounded-[50px] transition duration-700 ease-in-out bg-[#ffffff]/0 gap-[5px] items-center justify-center text-[15px]  py-[5px]"
    >
      {IconComponent && (
        <IconComponent className="text-white transition duration-300 group-hover:text-[#a855f7]" />
      )}
      <span className={`${styles}`}>{label.toUpperCase()}</span>
    </button>
  );
};
