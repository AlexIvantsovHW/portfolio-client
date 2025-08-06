import { Alert } from "@mui/material";

type Props = {
  message: string;
  status: boolean;
};
export const CustomAlert = (props: Props) => {
  const { message, status } = props;
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      {message ? (
        <Alert variant="filled" severity={status ? "success" : "error"}>
          {message}
        </Alert>
      ) : null}
    </div>
  );
};
