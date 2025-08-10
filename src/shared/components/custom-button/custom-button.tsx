import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
type Props = {
  isLoading?: boolean;
  array?: any[];
  label: string;
  type?: "submit" | "button" | "reset";
  route?: string;
  onclick?: () => void;
};

export const CustomButton = (props: Props) => {
  const { isLoading, array, label, type = "button", route, onclick } = props;

  const isDisabled = isLoading || array?.length === 0;

  const buttonContent = (
    <button
      disabled={isDisabled}
      onClick={onclick}
      type={type}
      className={`
        px-6 py-2 rounded-full border font-medium shadow-md transition-all duration-300
        ${
          isDisabled
            ? "bg-gray-500 text-white cursor-not-allowed border-gray-500"
            : "border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white"
        }
      `}
    >
      {isLoading ? <CircularProgress size={20} /> : label}
    </button>
  );

  return route ? <Link to={route}>{buttonContent}</Link> : buttonContent;
};
