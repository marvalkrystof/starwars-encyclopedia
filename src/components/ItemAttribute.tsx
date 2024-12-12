import { Icon, ListItem, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  label?: string;
  icon?: SvgIconComponent;
  data: string;
};

const ItemAttribute: React.FC<Props> = ({ label, data, icon }: Props) => {
  return (
    <ListItem
      sx={{
        pl: 4,
        display: "flex", // Flexbox for row layout
        alignItems: "center", // Align texts vertically
        gap: 0.5, // Minimal gap between items
      }}
    >
      {icon && <Icon component={icon} fontSize="medium" />}
      {label && (
        <Typography sx={{ fontWeight: 900, fontSize: 20 }}>{label}</Typography>
      )}
      <Typography sx={{ fontSize: 20 }}>{data}</Typography>
    </ListItem>
  );
};

export default ItemAttribute;
