import * as i from "./imports";

const defaultValues: i.TprojectForm = {
  title: "",
  description: "",
  endAt: "1990-01-01",
  logo: "",
  link: "",
  startAt: "1990-01-01",
};
type Props = {
  id: number;
};
export const UpdateProjectWidget = i.React.memo(function (props: Props) {
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
  } = i.useForm<i.TprojectForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useUpdateProjectMutation();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.projectsSlice
  );
  i.useEffect(() => {
    if (data?.length) {
      const project = data?.find((p) => p.id === id) ?? defaultValues;
      const formData: i.TprojectForm = {
        ...project,
      };
      reset(formData);
    }
  }, [data]);
  const onSubmit = async (formData: i.TprojectForm) => {
    let payload: i.Projects = {
      ...formData,
      startAt: i.dayjs(formData.startAt).toISOString(),
      endAt: i.dayjs(formData.endAt).toISOString(),
      id: id,
    };

    try {
      const request = await mutate(payload).unwrap();
      setAlert({ status: true, message: request.message });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
        navigate(i.ROUTES.UPDATE_PROJECTS);
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
    registerName: keyof i.TprojectForm;
  }[] = [
    {
      icon: i.WebAssetIcon,
      placeholder: "Project title",
      registerName: "title",
    },
    {
      icon: i.LinkIcon,
      placeholder: "Project link",
      registerName: "link",
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
              watch={watch}
              setValue={setValue}
              registerName={"startAt"}
            />{" "}
            <i.CustomDatePicker
              label="End Date"
              watch={watch}
              setValue={setValue}
              registerName={"endAt"}
            />
          </div>
        </i.LocalizationProvider>
        <i.CustomTextArea
          label="Description"
          register={register}
          registerName="description"
          errors={errors}
          Icon={i.DescriptionIcon}
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
});
