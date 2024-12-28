import React, { useState } from "react";
import { Card, CardContent, List, Typography } from "@mui/material";
import { useThemeContext } from "../providers/ThemeContextProvider";
import { useDeviceContext } from "../providers/DeviceContextProvider";
import { Link } from "react-router-dom";
interface Props {
  label: string;
  objectEndpoint: string;
  children?: JSX.Element[] | JSX.Element;
}

const DataCard: React.FC<Props> = ({
  label,
  children,
  objectEndpoint,
}: Props) => {
  const { isMobile } = useDeviceContext();

  const { theme } = useThemeContext();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  if (isMobile) {
    return (
      <Link
        to={objectEndpoint}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "35vh",
            borderRadius: 3,
            boxShadow: `0px 3px 5px ${theme.palette.primary.main}`,
          }}
        >
          <CardContent>
            <Typography variant="h3">{label}</Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (!isMobile) {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          overflow: "scroll",
          overflowY: isHovered ? "visible" : "hidden",
          overflowX: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "35vh",
          borderRadius: 3,
          ":hover": {
            boxShadow: `0px 7px 17px ${theme.palette.primary.main}`,
          },
        }}
      >
        <CardContent>
          <Typography variant="h3">{label}</Typography>
        </CardContent>
        {/* Card list */}
        <List
          component="div"
          disablePadding
          sx={{
            position: "absolute",
            top: "0",
            left: 0,
            height: "auto",
            width: "100%",
            backgroundColor: "background.paper",
            boxShadow: 20,
            display: isHovered ? "block" : "none",
            zIndex: 1,
          }}
        >
          {children}
        </List>
      </Card>
    );
  }
};

export default DataCard;
