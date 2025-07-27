import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  registerName: Path<T>;
  label: string;
};
export const CustomDatePicker = <T extends FieldValues>(props: Props<T>) => {
  const { watch, setValue, registerName, label } = props;
  return (
    <DatePicker
      label
      value={dayjs(watch(registerName) as string)}
      onChange={(date) => {
        if (date)
          setValue(
            registerName,
            date.toISOString() as PathValue<T, typeof registerName>
          );
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
  );
};
