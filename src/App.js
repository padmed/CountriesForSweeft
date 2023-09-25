import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";
import CountryInfo from "./components/CountryInfo";
import Navigation from "./components/Navigation";
import CurrencyAirportRouter from "./routers/CurrencyAirportRouter";
import { Grid } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} style={{ height: "70px" }}>
        <CountrySelect />
      </Grid>
      <Grid item xs={12} style={{ height: "250px" }}>
        <CountryInfo />
      </Grid>
      <Grid item xs={12} style={{ height: "50px" }}>
        <Navigation />
      </Grid>
      <Grid item xs={12} style={{ height: "300px" }}>
        <CurrencyAirportRouter />
      </Grid>
    </Grid>
  );
};

export default App;
