import { Icon, ListItem, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  label?: string;
  icon?: SvgIconComponent;
  data: string;
  iconAfter?: SvgIconComponent;
};

const ItemAttribute: React.FC<Props> = ({
  label,
  data,
  icon,
  iconAfter,
}: Props) => {
  return (
    <ListItem
      sx={{
        pl: 4,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        borderBottom: "1px solid",
        borderColor: "divider",
        "&:hover .bounce-icon": {
          animation: "bounce 0.6s infinite",
        },
        "@keyframes bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
      }}
    >
      {icon && (
        <Icon
          className="bounce-icon"
          component={icon}
          fontSize="medium"
          sx={{
            transition: "transform 0.3s ease",
          }}
        />
      )}
      {label && (
        <Typography sx={{ fontWeight: 900, fontSize: 20 }}>{label}</Typography>
      )}
      <Typography sx={{ fontSize: 20 }}>{data}</Typography>
      {iconAfter && (
        <Icon
          className="bounce-icon"
          component={iconAfter}
          fontSize="medium"
          sx={{
            transition: "transform 0.3s ease",
          }}
        />
      )}
    </ListItem>
  );
};

export default ItemAttribute;
