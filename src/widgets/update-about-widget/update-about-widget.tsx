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
  const { data } = i.useSelector(
    (state: i.AppRootState) => state.personalSlice
  );
  const { data: softwareData } = i.useSelector(
    (state: i.AppRootState) => state.softwareSlice
  );
  const [software, setSoftware] = i.useState<number>(NaN);
  const [softwareList, setSoftwareList] = i.useState<number[]>(
    data?.at(0)?.software_id || []
  );
  const [alert, setAlert] = i.useState({ status: true, message: "" });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = i.useForm<i.TpersonalForm>({
    resolver: i.zodResolver(i.schema),
    defaultValues,
  });
  const [mutate, { isLoading }] = i.useUpdatePersonalDataMutation();

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
      software_id: softwareList,
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
  const handleSoftwareList = (software: number) => {
    setSoftwareList((prev) => [...prev, software]);
  };
  const handleDeleteSoftware = (software: number) => {
    const list = softwareList.filter((e) => e != software);
    setSoftwareList(list);
  };
  const handleChange = (event: i.SelectChangeEvent) => {
    setSoftware(+event.target.value);
  };
  return (
    <div className="w-full max-w-5xl mx-auto p-8 rounded-xl bg-black/20 shadow-2xl text-white">
      <h1
        style={{ fontFamily: "Revamped" }}
        className="text-[30px] sm:text-[40px] md:text-[56px] break-words text-white font-extrabold tracking-wide mb-4 text-center drop-shadow-md"
      >
        Update Profile
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <i.InputField
          Icon={i.PersonIcon}
          placeholder="User name"
          registerName="username"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.SensorOccupiedIcon}
          placeholder="Surname"
          registerName="surname"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.FlagIcon}
          placeholder="Country"
          registerName="country"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.LocationCityIcon}
          placeholder="City"
          registerName="city"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.Looks6Icon}
          placeholder="Age"
          registerName="age"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.Timer3SelectIcon}
          placeholder="Experience (years)"
          registerName="yearExperince"
          register={register}
          errors={errors}
        />
        <i.CustomTextArea
          Icon={i.AccountBoxIcon}
          registerName="description"
          label="Description"
          register={register}
          errors={errors}
        />
        <i.InputField
          Icon={i.FaceIcon}
          placeholder="Avatar (URL)"
          registerName="avatar"
          register={register}
          errors={errors}
          styles="sm:col-span-2"
        />{" "}
        <i.SoftwareSelect
          handleChange={handleChange}
          software={software}
          softwareData={softwareData}
          softwareList={softwareList}
          handleSoftwareList={handleSoftwareList}
          handleDeleteSoftware={handleDeleteSoftware}
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
        <i.CustomAlert status={alert.status} message={alert.message} />
      </form>
    </div>
  );
};
