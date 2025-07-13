import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

export type TinputField<T extends FieldValues> = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  placeholder: string;
  registerName: Path<T>;
  type?: "text" | "number";

  register: UseFormRegister<T>;
  styles?: string;
};
