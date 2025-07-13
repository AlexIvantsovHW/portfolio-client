import * as i from "./imports";
export const SignInWidget = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = i.useForm<i.Tsignin>({ resolver: i.zodResolver(i.schema) });
  const [mutate] = i.useSigninMutation();
  const [alert, setAlert] = i.useState("");
  const [alertType, setAlertType] = i.useState<"success" | "error">("success");
  const [showPassword, setShowPassword] = i.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const onSubmit = async (data: i.Tsignin) => {
    try {
      const response = await mutate(data).unwrap();
      setAlertType("success");
      setAlert(response.message || "Login successful");
      setTimeout(() => setAlert(""), 4000);
    } catch (error: unknown) {
      const err = error as { data?: { message?: string }; message?: string };
      const errorMessage =
        err?.data?.message || err?.message || "An unknown error occurred";
      setAlertType("error");
      setAlert(errorMessage);
      setTimeout(() => setAlert(""), 4000);
    }
  };

  return (
    <div className="relative z-10 flex flex-col gap-[20px] items-center justify-start max-w-4xl w-full bg-[#111827]/80 border border-indigo-500 shadow-2xl rounded-2xl p-10 backdrop-blur-sm">
      <i.Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center gap-[20px] flex-col"
      >
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <i.TextField
            error={!!errors.username}
            label="username"
            variant="outlined"
            helperText={errors.username?.message || "ex: Alex"}
            fullWidth
            {...register("username", { required: true })}
            InputProps={{
              startAdornment: (
                <i.InputAdornment position="start">
                  <i.PersonIcon sx={{ color: "gray" }} />
                </i.InputAdornment>
              ),
            }}
            sx={i.sx}
          />{" "}
          <i.TextField
            error={!!errors.email}
            label="email"
            variant="outlined"
            helperText={errors.email?.message || "ex: example@gmail.com"}
            fullWidth
            {...register("email", { required: true })}
            InputProps={{
              startAdornment: (
                <i.InputAdornment position="start">
                  <i.AlternateEmailIcon sx={{ color: "gray" }} />
                </i.InputAdornment>
              ),
            }}
            sx={i.sx}
          />{" "}
          <i.TextField
            error={!!errors.password}
            label="password"
            type={showPassword ? "text" : "password"}
            helperText={errors.password?.message || "ex: Gh)2Zfk@4!23"}
            variant="outlined"
            {...register("password", { required: true })}
            fullWidth
            InputProps={{
              endAdornment: (
                <i.InputAdornment position="end">
                  <i.IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <i.VisibilityOff sx={{ color: "gray" }} />
                    ) : (
                      <i.Visibility sx={{ color: "gray" }} />
                    )}
                  </i.IconButton>
                </i.InputAdornment>
              ),
            }}
            sx={i.sx}
          />
        </div>
        <button
          type="submit"
          className="flex-1 px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
        >
          Sign in
        </button>
      </i.Box>
      {alert && <i.Alert severity={alertType}>{alert}</i.Alert>}
      <div className="text-gray-300">
        Do you have already account?
        <i.Link to={i.ROUTES.LOGIN}>
          <strong className="italic text-blue-300 ">Login</strong>
        </i.Link>
      </div>
    </div>
  );
};
