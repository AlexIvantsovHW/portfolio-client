import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { UseFormRegister } from "react-hook-form";
import { Personal, TpersonalForm } from "@/shared/types/index";
export type TinputField = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  placeholder: string;
  registerName: keyof Personal;
  type?: "text" | "number";
  register: UseFormRegister<TpersonalForm>;
  styles?: string;
};
