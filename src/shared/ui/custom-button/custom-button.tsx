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
      onClick={() => (route ? router(route) : click)}
      className="flex cursor-pointer  hover:rotate-359 hover:bg-[#ffffff]/90 border border-[#ffffff]/50 rounded-[25px] hover:text-[#a855f7] transition duration-700 ease-in-out  bg-[#ffffff]/0 w-fit  gap-[5px] items-center justify-center text-orangeLight text-[15px] hover:border-b hover:border-b-orangeLight py-[5px] hover:text-orangeDark hover:border-orangeDark transition ease-in-out  duration-500 "
    >
      {IconComponent && (
        <IconComponent className="hover:text-[#a855f7] text-[#ffffff]" />
      )}
      <span className={`${styles}`}>{label.toUpperCase()}</span>
    </button>
  );
};
