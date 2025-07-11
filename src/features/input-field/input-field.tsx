import { Box, TextField } from "@mui/material";
import { TinputField } from "./model";

export const InputField = ({
  Icon,
  placeholder,
  registerName,
  type = "text",
  styles,
  register,
}: TinputField) => {
  const isMultiline = registerName === "description";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: isMultiline ? "flex-start" : "center",
        gap: 2,
        backgroundColor: "#222436",
        p: 2,
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease",
        width: "100%",
        maxWidth: 600,
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 24px rgba(0, 230, 118, 0.4)",
        },
      }}
      className={styles}
    >
      <Icon sx={{ color: "#00e676", fontSize: 30, mt: isMultiline ? 1 : 0 }} />
      <TextField
        fullWidth
        type={type}
        variant="outlined"
        placeholder={placeholder}
        {...register(registerName)}
        multiline={isMultiline}
        rows={isMultiline ? 4 : undefined}
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
        sx={{
          textarea: { color: "white" },
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#00e676",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00e676",
            },
          },
        }}
      />
    </Box>
  );
};
