import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  FieldErrors,
  Path,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  registerName: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder?: string;
};

export const CustomTextArea = <T extends FieldValues>(props: Props<T>) => {
  const { Icon, register, registerName, label, errors, placeholder } = props;
  return (
    <div className="sm:col-span-2">
      <label className="text-sm font-semibold flex items-center gap-2 mb-2">
        <Icon className="text-green-500" />
        {label}
      </label>
      <textarea
        {...register(registerName)}
        placeholder={placeholder ? placeholder : "Tell us about yourself"}
        className="w-full min-h-[100px] bg-zinc-800 text-white p-4 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
      />
      {errors[registerName] ? (
        <div className="text-red-500">
          {errors[registerName]?.message as string}
        </div>
      ) : null}
    </div>
  );
};
