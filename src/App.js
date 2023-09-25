import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";
import CountryInfo from "./components/CountryInfo";
import Navigation from "./components/Navigation";
import CurrencyAirportRouter from "./routers/CurrencyAirportRouter";
import { Grid } from "@mui/material";
import { componentSize } from "./utils/styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      style={{ minHeight: "100vh" }}
      direction="column"
    >
      <Grid item xs={12} style={componentSize}>
        <CountrySelect />
      </Grid>
      <Grid item xs={12} style={componentSize}>
        <CountryInfo />
      </Grid>
      <Grid item xs={12} style={componentSize}>
        <Navigation />
      </Grid>
      <Grid item xs={12} style={componentSize}>
        <CurrencyAirportRouter />
      </Grid>
    </Grid>
  );
};

export default App;
