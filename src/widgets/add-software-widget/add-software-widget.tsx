import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as i from "./imports";
import { CustomAlert } from "@/shared/components/custom-alert/custom-alert";
const defaultValues: i.TsoftwareForm = {
  title: "",
  logo: "",
};

export const AddSoftwareWidget = () => {
  const [alert, setAlert] = i.useState({ status: true, message: "" });
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.softwareSlice
  );
  const {
    register,

    handleSubmit,

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
          <FormControl fullWidth>
            <div className="flex items-center gap-4">
              <InputLabel id="software-select-label" sx={{ color: "white" }}>
                Software
              </InputLabel>
              <Select
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
                  <MenuItem
                    value={s.id}
                    key={s.id}
                    aria-readonly
                    className="flex items-center justify-center gap-[5px]"
                  >
                    <img src={s.logo} alt={s.title} width={30} height={30} />{" "}
                    <span>{s.title}</span>
                  </MenuItem>
                ))}
              </Select>
            </div>
          </FormControl>
        </div>
        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            disabled={isLoading}
            type="submit"
            className={`
      px-6 py-2 rounded-full border font-medium shadow-md transition-all duration-300
      ${
        isLoading
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
        <CustomAlert message={alert.message} status={alert.status} />
      </form>
    </div>
  );
};
