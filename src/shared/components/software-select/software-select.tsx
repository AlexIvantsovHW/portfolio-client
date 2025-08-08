import * as i from "./imports";
type Props = {
  handleChange: (event: i.SelectChangeEvent) => void;
  software: number;
  softwareData: i.Tsoftwares[];
  softwareList: number[];
  handleSoftwareList: (software: number) => void;
  handleDeleteSoftware: (software: number) => void;
};
export const SoftwareSelect = (props: Props) => {
  const {
    handleChange,
    handleSoftwareList,
    software,
    softwareData,
    softwareList,
    handleDeleteSoftware,
  } = props;
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <i.FormControl fullWidth>
        <div className="flex items-center gap-4">
          <i.InputLabel id="software-select-label" sx={{ color: "white" }}>
            Software
          </i.InputLabel>
          <i.Select
            labelId="software-select-label"
            id="software-select"
            value={software.toString()}
            onChange={handleChange}
            error={softwareList.length === 0}
            sx={{
              backgroundColor: "#222436",
              p: 1,
              color: "white",
              borderRadius: 2,
              minWidth: 200,
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 10px 24px rgba(0, 230, 118, 0.4)",
              },
              ".MuiSvgIcon-root": {
                color: "white",
              },
            }}
          >
            {softwareData?.map((s) => (
              <i.MenuItem value={s.id} key={s.id}>
                {s.title}
              </i.MenuItem>
            ))}
          </i.Select>

          <i.Button
            variant="contained"
            size="medium"
            color="secondary"
            sx={{
              height: "40px",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
            disabled={softwareList.includes(software) || isNaN(software)}
            onClick={() => handleSoftwareList(software)}
          >
            Add
          </i.Button>
        </div>
      </i.FormControl>

      <ul className="flex flex-col gap-2 mt-4">
        {softwareList?.map((s) => (
          <li
            key={s}
            className="flex items-center gap-2 text-white bg-[#1e1f2b] px-4 py-2 rounded-lg shadow-md"
          >
            <span
              className="cursor-pointer transition-transform hover:scale-125"
              onClick={() => handleDeleteSoftware(s)}
            >
              <i.ClearIcon
                color="error"
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "rotate(180deg)",
                  },
                }}
              />
            </span>
            <span className="text-sm font-medium">
              {softwareData.find((e) => s === e.id)?.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
