import * as i from "./imports";
export const LoginWidget = () => {
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
  return (
    <div className="relative z-10 flex flex-col gap-[20px] items-center justify-start max-w-4xl w-full bg-[#111827]/80 border border-indigo-500 shadow-2xl rounded-2xl p-10 backdrop-blur-sm">
      <i.Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <i.TextField
            error={false}
            id="outlined-error-helper-text"
            label="Username"
            helperText="ex: Alex"
            variant="outlined"
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <i.InputAdornment position="start">
                  <i.PersonIcon sx={{ color: "gray" }} />
                </i.InputAdornment>
              ),
            }}
            sx={i.sx}
          />
          <i.TextField
            error={false}
            id="outlined-error-helper-text"
            label="password"
            type={showPassword ? "text" : "password"}
            helperText="ex: Gh)2Zfk@4!23"
            variant="outlined"
            required
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
          <i.TextField
            error={false}
            id="outlined-error-helper-text"
            label="email"
            helperText="ex: example@gmail.com"
            variant="outlined"
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <i.InputAdornment position="start">
                  <i.AlternateEmailIcon sx={{ color: "gray" }} />
                </i.InputAdornment>
              ),
            }}
            sx={i.sx}
          />
        </div>
      </i.Box>
      <button
        type="submit"
        className="flex-1 px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition duration-300 text-[13px] font-semibold shadow-md text-center"
      >
        Login
      </button>
      <div className="text-gray-300">
        If you don't have an account, please{" "}
        <i.Link to={i.ROUTES.SIGN_IN}>
          <strong className="italic text-blue-300 ">sign in</strong>
        </i.Link>
      </div>
    </div>
  );
};
