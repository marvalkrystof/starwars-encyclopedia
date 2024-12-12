import React, { useState } from "react";
import { Card, CardContent, List, Typography } from "@mui/material";

interface Props {
  label: string;
  children: JSX.Element[];
}

const DataCard: React.FC<Props> = ({ label, children }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
        minHeight: "30vh",
        aspectRatio: "1 / 1",
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardContent>
        <Typography variant="h3">{label}</Typography>
      </CardContent>
      <List
        component="div"
        disablePadding
        sx={{
          position: "absolute",
          top: "0",
          left: 0,
          height: "auto",
          width: "100%",
          backgroundColor: "white",
          boxShadow: 20,
          display: isHovered ? "block" : "none",
          zIndex: 1,
        }}
      >
        {children}
      </List>
    </Card>
  );
};

export default DataCard;
