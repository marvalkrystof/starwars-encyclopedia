import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ItemAttribute from "./ItemAttribute";

interface Props {
  link: string;
  key: string;
  label?: string;
  data: string;
  openNewTab?: boolean;
}

const LinkItemAttribute = ({ link, key, label, data, openNewTab }: Props) => {
  return (
    <Link
      to={link}
      target={openNewTab ? "_blank" : "_self"}
      rel={openNewTab ? "noopener noreferrer" : ""}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ItemAttribute
        key={key}
        label={label}
        data={data}
        iconAfter={ArrowOutwardIcon}
      />
    </Link>
  );
};

export default LinkItemAttribute;
