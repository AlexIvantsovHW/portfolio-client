import { useNavigate } from "react-router";
import * as icons from "../icons/index";

type Props = {
  label?: string;
  Icon?:
    | "WebStoriesIcon"
    | "WorkIcon"
    | "SmartphoneIcon"
    | "ThumbUpAltIcon"
    | "LoginIcon"
    | "PersonIcon"
    | "CastForEducationIcon"
    | "SchoolIcon"
    | "GitHubIcon"
    | "LinkedInIcon"
    | "AlternateEmailIcon"
    | "LocalPhoneIcon"
    | "WhatsAppIcon"
    | "TelegramIcon"
    | "CodewarsIcon"
    | "ContactPageIcon"
    | "HttpIcon";

  route?: string;
  href?: string;
  click?: () => void;
  labelStyle?: string;
  sx?: { width: number; height: number };
};
export const CustomizedBtn: React.FC<Props> = ({
  label,
  Icon,
  route,
  href,
  click,
  labelStyle,
  sx,
}) => {
  const router = useNavigate();
  const IconComponent = Icon ? icons[Icon] : null;
  const styles = labelStyle ?? "md2:block hidden";

  const buttonStyles = {
    width: sx?.width && sx?.width * 1.1,
    height: sx?.height && sx?.height * 1.1,
  };

  const className =
    "group flex w-[40px] h-[40px] cursor-pointer hover:rotate-359 hover:bg-[#ffffff]/90 border border-[#ffffff]/50 rounded-[50px] transition duration-700 ease-in-out bg-[#ffffff]/0 gap-[5px] items-center justify-center text-[15px] py-[5px]";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyles}
        className={className}
      >
        {IconComponent && (
          <IconComponent
            sx={sx}
            className="text-white transition duration-300 group-hover:text-[#a855f7]"
          />
        )}
        <span className={`${styles}`}>{label?.toUpperCase()}</span>
      </a>
    );
  }

  return (
    <button
      onClick={() => (route ? router(route) : click?.())}
      style={buttonStyles}
      className={className}
    >
      {IconComponent && (
        <IconComponent
          sx={sx}
          className="text-white transition duration-300 group-hover:text-[#a855f7]"
        />
      )}
      <span className={`${styles}`}>{label?.toUpperCase()}</span>
    </button>
  );
};
