import * as i from "./imports";

const defaultValues: i.TfeedbackForm = {
  description: "",
  logo: "",
  name: "",
  position: "",
  companyTitle: "",
  country: "",
  city: "",
};
type Props = { feedback: i.Tfeedbacks };

export const UpdateSpecificFeedbackWidget = (props: Props) => {
  const { feedback } = props;
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const navigate = i.useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = i.useForm<i.TfeedbackForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  i.useEffect(() => {
    setValue("city", feedback.city);
    setValue("companyTitle", feedback.companyTitle);
    setValue("country", feedback.country);
    setValue("description", feedback.description);
    setValue("logo", feedback.logo);
    setValue("name", feedback.name);
    setValue("position", feedback.position);
  }, [feedback]);
  const [mutate, { isLoading }] = i.useUpdateFeedbackMutation();

  const onSubmit = async (formData: i.TfeedbackForm) => {
    let payload: i.Tfeedbacks & { date: string } = {
      ...formData,
      date: i.dayjs().toISOString(),
      id: feedback.id,
    };

    try {
      const request = await mutate(payload).unwrap();
      setAlert({ status: true, message: request.message });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
        navigate(i.ROUTES.UPDATE_FEEDBACK);
      }, 4000);
    } catch (e: any) {
      const errorMessage =
        e?.data?.message || e?.error?.data?.message || e?.message || "Error";
      setAlert({ status: false, message: e.message || errorMessage });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
      }, 4000);
    }
  };

  const inputData: {
    icon: typeof i.WebAssetIcon;
    placeholder: string;
    registerName: keyof i.TfeedbackForm;
  }[] = [
    {
      icon: i.BadgeIcon,
      placeholder: "User name",
      registerName: "name",
    },
    {
      icon: i.WorkIcon,
      placeholder: "Position, ex.Frontend dev.",
      registerName: "position",
    },
    {
      icon: i.CorporateFareIcon,
      placeholder: "Company title",
      registerName: "companyTitle",
    },
    {
      icon: i.PublicIcon,
      placeholder: "Country",
      registerName: "country",
    },
    {
      icon: i.LocationCityIcon,
      placeholder: "City",
      registerName: "city",
    },
    {
      icon: i.AccountCircleIcon,
      placeholder: "User avatar",
      registerName: "logo",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 rounded-xl bg-black/20 shadow-2xl text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {inputData?.map((el, idx) => (
          <i.InputField
            key={idx}
            Icon={el.icon}
            placeholder={el.placeholder}
            registerName={el.registerName}
            register={register}
            errors={errors}
          />
        ))}

        <i.CustomTextArea
          label="Description"
          register={register}
          registerName="description"
          errors={errors}
          Icon={i.DescriptionIcon}
          placeholder="Type your feedback"
        />
        <i.CustomAlert message={alert.message} status={alert.status} />
        <div className="sm:col-span-2 flex justify-center mt-4">
          <i.CustomButton label="Update" isLoading={isLoading} type="submit" />
        </div>
      </form>
    </div>
  );
};
