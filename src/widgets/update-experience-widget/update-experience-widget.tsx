import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as i from "./imports";
import dayjs from "dayjs";

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

  const { register, reset, handleSubmit, setValue, watch } =
    i.useForm<i.TexperienceForm>({
      resolver: i.zodResolver(i.schema),
      defaultValues,
    });
  const [mutate, { isLoading }] = i.useUpdateJobMutation();
  const { data } = i.useSelector((state: i.AppRootState) => state.jobsSlice);
  i.useEffect(() => {
    if (data?.length) {
      const formData: i.TexperienceForm = {
        ...data[0],
        software_id: String(data[0].software_id),
      };
      reset(formData);
    }
  }, [data]);
  const onSubmit = async (formData: i.TexperienceForm) => {
    let payload: i.Jobs = {
      ...formData,
      software_id: +formData.software_id,
      id: id,
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
          />
        ))}{" "}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex flex-col gap-6 sm:flex-row sm:col-span-2">
            <DatePicker
              label="Start Date"
              value={dayjs(watch("startAt"))}
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

            <DatePicker
              label="End Date"
              value={dayjs(watch("endAt"))}
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
        </LocalizationProvider>
        <div className="sm:col-span-2">
          <label className="text-sm font-semibold flex items-center gap-2 mb-2">
            <i.DescriptionIcon className="text-green-500" />
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Tell us about yourself"
            className="w-full min-h-[100px] bg-zinc-800 text-white p-4 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
        </div>
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
