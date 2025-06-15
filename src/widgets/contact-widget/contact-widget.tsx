import * as i from "./imports";
export const ContactWidget = () => {
  const contacts = i.useSelector(
    (state: i.AppRootState) => state.contactSlice.data
  );
  const [open, setOpen] = i.useState(false);
  const handleClose = () => setOpen(false);

  const size = 80;
  const sx = { width: size, height: size };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-9 gap-[10px] w-fit  mx-[5%]  ">
      <i.CustomizedBtn
        Icon="LinkedInIcon"
        sx={sx}
        href={contacts[0].linkedIn}
      />
      <i.CustomizedBtn
        Icon="ContactPageIcon"
        sx={sx}
        click={() => (window.location.href = contacts[0].cv)}
      />
      <i.CustomizedBtn
        Icon="CodewarsIcon"
        sx={sx}
        href={contacts[0].codewars}
      />
      <i.CustomizedBtn Icon="HttpIcon" sx={sx} href={contacts[0].website} />

      <i.CustomizedBtn Icon="GitHubIcon" sx={sx} href={contacts[0].github} />
      <i.CustomizedBtn
        Icon="WhatsAppIcon"
        sx={sx}
        href={`https://wa.me/${contacts[0].whatsApp}`}
      />
      <i.CustomizedBtn
        Icon="AlternateEmailIcon"
        sx={sx}
        href={`mailto:${contacts[0].email}`}
      />
      <i.CustomizedBtn
        Icon="LocalPhoneIcon"
        sx={sx}
        click={() => setOpen(true)}
      />
      <i.CustomizedBtn
        Icon="TelegramIcon"
        sx={sx}
        href={`https://t.me/${contacts[0].telegram}`}
      />
      <i.ModalComponent
        open={open}
        onClose={handleClose}
        text={contacts[0].phone.toString()}
      />
    </div>
  );
};
