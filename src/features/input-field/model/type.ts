import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  FieldValues,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";

export type TinputField<T extends FieldValues> = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  placeholder: string;
  registerName: Path<T>;
  type?: "text" | "number";
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  styles?: string;
};
