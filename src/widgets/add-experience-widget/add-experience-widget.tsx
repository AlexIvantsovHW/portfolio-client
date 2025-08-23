import * as i from "./imports";

const defaultValues: i.TexperienceForm = {
  companyTitle: "",
  description: "",
  endAt: "1990-01-01",
  jobTitle: "",
  logo: "",
  startAt: "1990-01-01",
};

export const AddExperienceWidget = () => {
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const [software, setSoftware] = i.useState<number>(NaN);
  const [softwareList, setSoftwareList] = i.useState<number[]>([]);
  const navigate = i.useNavigate();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.softwareSlice
  );
  const handleChange = (event: i.SelectChangeEvent) => {
    setSoftware(+event.target.value);
  };
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = i.useForm<i.TexperienceForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useAddJobMutation();

  const onSubmit = async (formData: i.TexperienceForm) => {
    if (softwareList.length === 0) return;
    let payload: i.Job = {
      ...formData,
      software_id: softwareList,
    };
    try {
      const request = await mutate(payload).unwrap();
      setAlert({ status: true, message: request.message });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
        navigate(i.ROUTES.UPDATE_EXPERIENCE);
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
  const handleSoftwareList = (software: number) => {
    setSoftwareList((prev) => [...prev, software]);
  };
  const handleDeleteSoftware = (software: number) => {
    const list = softwareList.filter((e) => e != software);
    setSoftwareList(list);
  };
  const inputData: {
    icon: typeof i.JavascriptIcon;
    placeholder: string;
    registerName: keyof i.TexperienceForm;
  }[] = [
    {
      icon: i.BusinessIcon,
      placeholder: "Company",
      registerName: "companyTitle",
    },
    {
      icon: i.WorkIcon,
      placeholder: "Job title",
      registerName: "jobTitle",
    },
    {
      icon: i.ViewCarouselIcon,
      placeholder: "Company logo",
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
        <i.LocalizationProvider dateAdapter={i.AdapterDayjs}>
          <div className="flex flex-col gap-6 sm:flex-row sm:col-span-2">
            <i.CustomDatePicker
              label="Start Date"
              registerName="startAt"
              watch={watch}
              setValue={setValue}
            />
            <i.CustomDatePicker
              label="End Date"
              registerName="endAt"
              watch={watch}
              setValue={setValue}
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
        <i.SoftwareSelect
          handleChange={handleChange}
          software={software}
          softwareData={data}
          softwareList={softwareList}
          handleSoftwareList={handleSoftwareList}
          handleDeleteSoftware={handleDeleteSoftware}
        />
        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            disabled={isLoading || softwareList.length === 0}
            type="submit"
            className={`
      px-6 py-2 rounded-full border font-medium shadow-md transition-all duration-300
      ${
        isLoading || softwareList.length === 0
          ? "bg-gray-500 text-white cursor-not-allowed border-gray-500"
          : "border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white"
      }
    `}
          >
            {isLoading ? (
              <i.CircularProgress size={20} color="inherit" />
            ) : (
              "Create"
            )}
          </button>
        </div>{" "}
        <i.CustomAlert message={alert.message} status={alert.status} />
      </form>
    </div>
  );
};
