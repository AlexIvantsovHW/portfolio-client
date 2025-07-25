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
type Props = {
  id: number;
};
export const UpdateEducationWidget = (props: Props) => {
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
  } = i.useForm<i.TeducationForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useUpdateEducationMutation();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.universitiesSlice
  );
  i.useEffect(() => {
    if (data?.length) {
      const education = data?.find((e) => e.id === id) ?? defaultValues;

      const formData: i.Universities = {
        ...education,
        id,
      };
      reset(formData);
    }
  }, [data]);
  const onSubmit = async (formData: i.TeducationForm) => {
    let payload: i.Universities = {
      ...formData,
      id,
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
            <i.DatePicker
              label="Start Date"
              value={i.dayjs(watch("startAt"))}
              onChange={(date) => {
                if (date) setValue("startAt", date.format("YYYY-MM-DD"));
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "outlined",
                  InputProps: {
                    sx: {
                      backgroundColor: "#1e1e1e",
                      color: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#a855f7",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ec4899",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    },
                  },
                  InputLabelProps: {
                    sx: {
                      color: "white",
                    },
                  },
                },
              }}
            />

            <i.DatePicker
              label="End Date"
              value={i.dayjs(watch("endAt"))}
              onChange={(date) => {
                if (date) setValue("endAt", date.format("YYYY-MM-DD"));
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "outlined",
                  InputProps: {
                    sx: {
                      backgroundColor: "#1e1e1e",
                      color: "white",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#a855f7",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ec4899",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    },
                  },
                  InputLabelProps: {
                    sx: {
                      color: "white",
                    },
                  },
                },
              }}
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
