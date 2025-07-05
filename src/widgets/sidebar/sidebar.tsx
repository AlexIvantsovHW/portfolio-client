import * as i from "./imports";
type Props = {
  label: string;
  router: string;
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
    | "HttpIcon"
    | "LogoutIcon";
};

export const Sidebar = () => {
  const navigate = i.useNavigate();

  const SidebarBtn = ({ label, router, Icon }: Props) => {
    const IconComponent = Icon ? i.icons[Icon] : null;

    return (
      <i.Button
        onClick={() => navigate(router)}
        sx={{
          color: "white",
          justifyContent: "flex-start",
          width: "100%",
          px: 2,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
        startIcon={IconComponent ? <IconComponent /> : null}
      >
        {label}
      </i.Button>
    );
  };

  const btnList: Props[] = [
    { label: "Personal", router: i.ROUTES.UPDATE_ABOUT, Icon: "PersonIcon" },
    {
      label: "Experience",
      router: i.ROUTES.UPDATE_EXPERIENCE,
      Icon: "WorkIcon",
    },
    {
      label: "Projects",
      router: i.ROUTES.UPDATE_PROJECTS,
      Icon: "WebStoriesIcon",
    },
    {
      label: "Education",
      router: i.ROUTES.UPDATE_EDUCATION,
      Icon: "SchoolIcon",
    },
    {
      label: "Feedback",
      router: i.ROUTES.UPDATE_FEEDBACK,
      Icon: "ThumbUpAltIcon",
    },
  ];

  return (
    <div className="w-[200px] min-h-[calc(100vh-80px)] flex-shrink-0 backdrop-blur-sm flex flex-col items-start justify-start bg-[#000000]/40 p-2 space-y-1">
      {btnList.map((btn, idx) => (
        <SidebarBtn key={idx} {...btn} />
      ))}
    </div>
  );
};
