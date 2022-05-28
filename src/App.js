import { useState } from "react";
import PricingSwitch from "./Components/PricingSwitch";
import PriceCard from "./Components/PriceCard";
import BigPriceCard from "./Components/BigPriceCard";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./App.css";

function App() {
  //Annual price data
  const anlPrice = {
    basic: 199.99,
    professional: 249.99,
    master: 399.99,
  };

  //Monthly price data
  const mlyPrice = {
    basic: 19.99,
    professional: 24.99,
    master: 39.99,
  };

  const [value, setValue] = useState(0);
  function handleChange(event) {
    setValue(value + 1);
  }
  console.log(value);
  return (
    <>
      <Grid
        container
        xs={12}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" pt={10} pb={5}>
          Our Pricing
        </Typography>
        <PricingSwitch onchange={() => handleChange()} />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <PriceCard
              offer="Basic"
              price={`$${mlyPrice.basic}`}
              storage="500 GB Storage"
              users="2 Users Allowed"
              send="Send up to 3 GB"
              className="leftCard"
            />
          </Grid>
          <Grid item>
            <BigPriceCard
              offer="Professional"
              price={`$${mlyPrice.professional}`}
              storage="1 TB Storage"
              users="5 Users Allowed"
              send="Send up to 10 GB"
            />
          </Grid>
          <Grid item>
            <PriceCard
              offer="Master"
              price={`$${mlyPrice.master}`}
              storage="2 TB Storage"
              users="10 Users Allowed"
              send="Send up to 20 GB"
            />
          </Grid>
        </Grid>
        <Box>
          Coded by <a>Isak Antunevik</a>.
        </Box>
      </Grid>
    </>
  );
}

export default App;

// Our Pricing Annually Monthly Basic &dollar;19.99 &dollar;199.99 500 GB
//         Storage 2 Users Allowed Send up to 3 GB Learn More Professional
//         &dollar;24.99 &dollar;249.99 1 TB Storage 5 Users Allowed Send up to 10
//         GB Learn More Master &dollar;39.99 &dollar;399.99 2 TB Storage 10 Users
//         Allowed Send up to 20 GB Learn More
