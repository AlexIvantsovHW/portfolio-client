import * as i from "./imports";

const defaultValues: i.TexperienceForm = {
  companyTitle: "",
  description: "",
  endAt: "1990-01-01",
  jobTitle: "",
  logo: "",
  software_id: "",
  startAt: "1990-01-01",
};
type Props = {
  id: number;
};
export const UpdateExperienceWidget = (props: Props) => {
  const { id } = props;
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const navigate = i.useNavigate();
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
  const [mutate, { isLoading }] = i.useUpdateJobMutation();
  const { data } = i.useSelector((state: i.AppRootState) => state.jobsSlice);
  i.useEffect(() => {
    if (data?.length) {
      const job = data?.find((j) => j.id === id) ?? defaultValues;

      const formData: i.TexperienceForm = {
        ...job,
        software_id: String(job.software_id),
      };
      reset(formData);
    }
  }, [data]);
  const onSubmit = async (formData: i.TexperienceForm) => {
    let payload: i.Jobs = {
      ...formData,
      software_id: [+formData.software_id],
      id: id,
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

        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            disabled={isLoading}
            type="submit"
            className="px-6 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300 font-medium shadow-md"
          >
            {isLoading ? <i.CircularProgress /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};
