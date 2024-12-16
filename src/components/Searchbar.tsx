import { TextField } from "@mui/material";
import { useThemeContext } from "../providers/ThemeContextProvider";

interface Props {
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<Props> = ({ onChange, defaultValue }: Props) => {
  const { theme } = useThemeContext();
  return (
    <TextField
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          "&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
            borderColor: "divider",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            transition: theme.transitions.create([
              "border-color",
              "box-shadow",
            ]),
            boxShadow: `0px 10px 20px ${theme.palette.primary.main}`,
          },
        },
      }}
      label="Search"
      variant="outlined"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default Searchbar;
