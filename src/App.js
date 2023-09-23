import { useEffect } from "react";
import CountrySelect from "./components/CountrySelect";
import { initCountries } from "./reducers/countriesReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries());
  }, []);

  return (
    <>
      <CountrySelect />
    </>
  );
};

export default App;
