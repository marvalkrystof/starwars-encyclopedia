import { Card } from "@mui/material";
import { useThemeContext } from "../providers/ThemeContextProvider";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const TextCard = ({ children }: Props) => {
  const { theme } = useThemeContext();
  return (
    <Card
      sx={{
        padding: 4,
        boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
      }}
    >
      {children}
    </Card>
  );
};

export default TextCard;
