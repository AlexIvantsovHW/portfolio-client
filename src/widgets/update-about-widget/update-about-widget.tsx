import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { schema } from "./model/index";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FaceIcon from "@mui/icons-material/Face";
import FlagIcon from "@mui/icons-material/Flag";
import Looks6Icon from "@mui/icons-material/Looks6";
import Timer3SelectIcon from "@mui/icons-material/Timer3Select";

import { InputField } from "@/features/input-field/input-field";
import { Personal } from "@/shared/types";

const defaultValues: Personal = {
  username: "",
  surname: "",
  country: "",
  city: "",
  avatar: "",
  age: 0,
  yearExperince: 0,
  description: "",
};

export const UpdateAbooutWidget = () => {
  const { register, reset, handleSubmit } = useForm<Personal>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { data } = useSelector((state: AppRootState) => state.personalSlice);

  useEffect(() => {
    if (data?.length) {
      reset(data[0]);
    }
  }, [data, reset]);

  const onSubmit = (data: Personal) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 rounded-xl bg-black/20 from-black via-zinc-900 to-black shadow-2xl text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Update Profile</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <InputField
          Icon={PersonIcon}
          placeholder="User name"
          registerName="username"
          register={register}
        />
        <InputField
          Icon={SensorOccupiedIcon}
          placeholder="Surname"
          registerName="surname"
          register={register}
        />
        <InputField
          Icon={FlagIcon}
          placeholder="Country"
          registerName="country"
          register={register}
        />
        <InputField
          Icon={LocationCityIcon}
          placeholder="City"
          registerName="city"
          register={register}
        />
        <InputField
          Icon={Looks6Icon}
          placeholder="Age"
          registerName="age"
          register={register}
        />
        <InputField
          Icon={Timer3SelectIcon}
          placeholder="Experience (years)"
          registerName="yearExperince"
          register={register}
        />

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold flex items-center gap-2 mb-2">
            <AccountBoxIcon className="text-green-500" />
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Tell us about yourself"
            className="w-full min-h-[100px] bg-zinc-800 text-white p-4 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          />
        </div>

        <InputField
          Icon={FaceIcon}
          placeholder="Avatar (URL)"
          registerName="avatar"
          register={register}
          styles="sm:col-span-2"
        />

        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300 font-medium shadow-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
