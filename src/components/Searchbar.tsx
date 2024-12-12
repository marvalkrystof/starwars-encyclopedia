import { TextField } from "@mui/material";

interface SearchbarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onChange }) => {
  return (
    <TextField
      sx={{ marginTop: 2 }}
      label="Search"
      variant="outlined"
      onChange={onChange} // Update state on input change
    />
  );
};

export default Searchbar;
