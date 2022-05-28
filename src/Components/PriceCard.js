import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

const PriceCard = ({ offer, price, storage, users, send }) => {
  return (
    <>
      <Box
        container
        sx={{
          height: "450px",
          width: "280px",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        <Typography variant="body1">{offer}</Typography>
        <Typography variant="h2">{price}</Typography>
        <Divider />
        <Typography variant="body1">{storage}</Typography>
        <Divider />
        <Typography variant="body1">{users}</Typography>
        <Divider variant="middle" />
        <Typography variant="body1">{send}</Typography>
        <Button variant="outlined" sx={{ width: "90%" }}>
          LEARN MORE
        </Button>
      </Box>
    </>
  );
};

export default PriceCard;
