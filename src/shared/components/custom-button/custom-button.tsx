import { CircularProgress } from "@mui/material";

type Props = {
  isLoading: boolean;
  array?: any[];
  label: string;
  type?: "submit" | "button" | "reset";
};
export const CustomButton = (props: Props) => {
  const { isLoading, array, label, type = "button" } = props;
  return (
    <button
      disabled={isLoading || array?.length === 0}
      type={type}
      className={`
       px-6 py-2 rounded-full border font-medium shadow-md transition-all duration-300
       ${
         isLoading || array?.length === 0
           ? "bg-gray-500 text-white cursor-not-allowed border-gray-500"
           : "border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white"
       }
     `}
    >
      {isLoading ? <CircularProgress /> : label}
    </button>
  );
};
