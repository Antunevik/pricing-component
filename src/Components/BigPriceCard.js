import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

const PriceCard = ({ offer, price, storage, users, send }) => {
  return (
    <>
      <Box
        container
        sx={{
          height: { xs: "450px", md: "500px" }, // component just as
          width: "280px",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "linear-gradient(#a2a8f0, #696fdd )",
        }}
      >
        <Typography variant="body1">{offer}</Typography>
        <Typography variant="h2">{price}</Typography>
        <Divider variant="middle" />
        <Typography variant="body1">{storage}</Typography>
        <Divider variant="middle" />
        <Typography variant="body1">{users}</Typography>
        <Divider variant="middle" />
        <Typography variant="body1">{send}</Typography>
        <Button
          variant="contained"
          sx={{
            width: "90%",
            border: "solid 1px white",
            color: "#a2a8f0",
            bgcolor: "#ffffff",
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </>
  );
};

export default PriceCard;
