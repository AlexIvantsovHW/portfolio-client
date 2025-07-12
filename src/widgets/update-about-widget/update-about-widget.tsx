import * as i from "./imports";
const defaultValues: i.TpersonalForm = {
  username: "",
  surname: "",
  country: "",
  city: "",
  avatar: "",
  age: "",
  yearExperince: "",
  description: "",
};

export const UpdateAbooutWidget = () => {
  const [alert, setAlert] = i.useState({ status: true, message: "" });

  const { register, reset, handleSubmit } = i.useForm<i.TpersonalForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useUpdatePersonalDataMutation();
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.personalSlice
  );
  i.useEffect(() => {
    if (data?.length) {
      const formData: i.TpersonalForm = {
        ...data[0],
        age: String(data[0].age),
        yearExperince: String(data[0].yearExperince),
      };
      reset(formData);
    }
  }, [data]);
  const onSubmit = async (formData: i.TpersonalForm) => {
    let payload: i.Personals = {
      ...formData,
      age: +formData.age,
      yearExperince: +formData.yearExperince,
      id: data[0]?.id || 1,
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

  return (
    <div className="w-full max-w-5xl mx-auto p-8 rounded-xl bg-black/40 shadow-2xl text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Update Profile</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <i.InputField
          Icon={i.PersonIcon}
          placeholder="User name"
          registerName="username"
          register={register}
        />
        <i.InputField
          Icon={i.SensorOccupiedIcon}
          placeholder="Surname"
          registerName="surname"
          register={register}
        />
        <i.InputField
          Icon={i.FlagIcon}
          placeholder="Country"
          registerName="country"
          register={register}
        />
        <i.InputField
          Icon={i.LocationCityIcon}
          placeholder="City"
          registerName="city"
          register={register}
        />
        <i.InputField
          Icon={i.Looks6Icon}
          placeholder="Age"
          registerName="age"
          register={register}
        />
        <i.InputField
          Icon={i.Timer3SelectIcon}
          placeholder="Experience (years)"
          registerName="yearExperince"
          register={register}
        />
        <div className="sm:col-span-2">
          <label className="text-sm font-semibold flex items-center gap-2 mb-2">
            <i.AccountBoxIcon className="text-green-500" />
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Tell us about yourself"
            className="w-full min-h-[100px] bg-zinc-800 text-white p-4 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
        </div>
        <i.InputField
          Icon={i.FaceIcon}
          placeholder="Avatar (URL)"
          registerName="avatar"
          register={register}
          styles="sm:col-span-2"
        />{" "}
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
