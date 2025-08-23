import * as i from "./imports";

const defaultValues: i.TeducationForm = {
  companyTitle: "",
  description: "",
  endAt: "1990-01-01",
  title: "",
  companyLogo: "",
  startAt: "1990-01-01",
  certificate: "",
  link: "",
};

export const AddEducationWidget = () => {
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const navigate = i.useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = i.useForm<i.TeducationForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useAddEducationMutation();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.universitiesSlice
  );

  const onSubmit = async (formData: i.TeducationForm) => {
    let payload: i.TeducationForm = {
      ...formData,
    };

    try {
      const request = await mutate(payload).unwrap();
      setAlert({ status: true, message: request.message });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
        navigate(i.ROUTES.UPDATE_EDUCATION);
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
    icon: typeof i.JavascriptIcon;
    placeholder: string;
    registerName: keyof i.TeducationForm;
  }[] = [
    {
      icon: i.BusinessIcon,
      placeholder: "Company",
      registerName: "companyTitle",
    },
    {
      icon: i.TitleIcon,
      placeholder: "Title",
      registerName: "title",
    },
    {
      icon: i.LinkIcon,
      placeholder: "link",
      registerName: "link",
    },
    {
      icon: i.StoreIcon,
      placeholder: "Company logo",
      registerName: "companyLogo",
    },
    {
      icon: i.ArticleIcon,
      placeholder: "Certificate",
      registerName: "certificate",
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
        <i.LocalizationProvider dateAdapter={i.AdapterDayjs}>
          <div className="flex flex-col gap-6 sm:flex-row sm:col-span-2">
            <i.CustomDatePicker
              label="Start Date"
              watch={watch}
              setValue={setValue}
              registerName="startAt"
            />
            <i.CustomDatePicker
              label="End Date"
              watch={watch}
              setValue={setValue}
              registerName="endAt"
            />
          </div>
        </i.LocalizationProvider>

        <i.CustomTextArea
          Icon={i.DescriptionIcon}
          label="Description"
          errors={errors}
          register={register}
          registerName="description"
        />
        {alert.message ? (
          <i.Alert
            variant="filled"
            severity={alert.status ? "success" : "error"}
          >
            {alert.message}
          </i.Alert>
        ) : null}
        <div className="sm:col-span-2 flex justify-center mt-4">
          <i.CustomButton label="Add" type="submit" isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};
