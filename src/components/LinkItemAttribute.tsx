import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ItemAttribute from "./ItemAttribute";

interface Props {
  link: string;
  label?: string;
  data: string;
  openNewTab?: boolean;
}

const LinkItemAttribute = ({ link, label, data, openNewTab }: Props) => {
  return (
    <Link
      to={link}
      target={openNewTab ? "_blank" : "_self"}
      rel={openNewTab ? "noopener noreferrer" : ""}
      style={{
        display: "flex",
        flexGrow: 1,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <ItemAttribute label={label} data={data} iconAfter={ArrowOutwardIcon} />
    </Link>
  );
};

export default LinkItemAttribute;
