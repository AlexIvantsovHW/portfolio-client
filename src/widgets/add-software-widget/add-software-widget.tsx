import * as i from "./imports";

const defaultValues: i.TsoftwareForm = {
  title: "",
  logo: "",
};

export const AddSoftwareWidget = () => {
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const [value, setValue] = i.useState<number>(NaN);
  const [deleteMutation, { isLoading: deleteIsLoading }] =
    i.useDeleteSoftwareMutation();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.softwareSlice
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = i.useForm<i.TsoftwareForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useAddSoftwareMutation();

  const onSubmit = async (formData: i.TsoftwareForm) => {
    let payload: i.TsoftwareForm = {
      ...formData,
    };
    try {
      const request = await mutate(payload).unwrap();
      setAlert({ status: true, message: request.message });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
      }, 4000);
      reset();
    } catch (e: any) {
      const errorMessage =
        e?.data?.message || e?.error?.data?.message || e?.message || "Error";
      setAlert({ status: false, message: e.message || errorMessage });
      setTimeout(() => {
        setAlert({ status: true, message: "" });
      }, 4000);
    }
  };
  const onDelete = async (id: number) => {
    try {
      const request = await deleteMutation(id).unwrap();
      setAlert({ status: true, message: request.message });
      setValue(NaN);
      setTimeout(() => {
        setAlert({ status: true, message: "" });
      }, 4000);
    } catch (e: any) {
      const errorMessage =
        e?.data?.message || e?.error?.data?.message || e?.message || "Error";
      setAlert({ status: false, message: e.message || errorMessage });
      setValue(NaN);
      setTimeout(() => {
        setAlert({ status: true, message: "" });
      }, 4000);
    }
  };
  const inputData: {
    icon: typeof i.JavascriptIcon;
    placeholder: string;
    registerName: keyof i.TsoftwareForm;
  }[] = [
    {
      icon: i.BusinessIcon,
      placeholder: "Logo",
      registerName: "logo",
    },
    {
      icon: i.WorkIcon,
      placeholder: "Software title",
      registerName: "title",
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
        <div className="w-full flex flex-col items-start gap-4">
          <i.FormControl fullWidth>
            <div className="flex items-center gap-4">
              <i.InputLabel id="software-select-label" sx={{ color: "white" }}>
                Software
              </i.InputLabel>
              <i.Select
                labelId="software-select-label"
                id="software-select"
                sx={{
                  backgroundColor: "#222436",
                  p: 1,
                  color: "white",
                  borderRadius: 2,
                  minWidth: 200,
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 10px 24px rgba(0, 230, 118, 0.4)",
                  },
                  ".MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                {data?.map((s) => (
                  <i.MenuItem
                    value={s.id}
                    key={s.id}
                    onClick={() => setValue(s.id)}
                    className="flex items-center justify-center gap-[5px]"
                  >
                    <img src={s.logo} alt={s.title} width={30} height={30} />{" "}
                    <span>{s.title}</span>
                  </i.MenuItem>
                ))}
              </i.Select>
              {value ? (
                <div>
                  <span onClick={() => onDelete(value)}>
                    {" "}
                    <i.DeleteForeverIcon
                      color="error"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          fill: "white",
                          scale: "110%",
                        },
                      }}
                    />
                  </span>
                </div>
              ) : null}
            </div>
          </i.FormControl>
        </div>
        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            disabled={isLoading || deleteIsLoading}
            type="submit"
            className={`
      px-6 py-2 rounded-full border font-medium shadow-md transition-all duration-300
      ${
        isLoading || deleteIsLoading
          ? "bg-gray-500 text-white cursor-not-allowed border-gray-500"
          : "border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white"
      }
    `}
          >
            {isLoading || deleteIsLoading ? (
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
