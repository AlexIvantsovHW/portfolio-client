export const sx = {
  input: {
    color: "white",
    fontSize: "1rem",
    padding: "12px",
  },
  label: {
    color: "gray",
    fontSize: "0.95rem",
  },
  "& .MuiFormHelperText-root": {
    color: "#cccccc",
    fontSize: "0.8rem",
    marginLeft: 0,
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "gray",
      transition: "border-color 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "#888",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00c853",
    },
  },
};
