import React from "react";
import { Link, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Navigation = () => {
  const path = useLocation();
  const countryCode = path.pathname.split("/")[1];

  return (
    <nav>
      <Tabs value={path.pathname}>
        <Tab
          label="Currency exchange"
          value={`/${countryCode}`}
          component={Link}
          to={`/${countryCode}`}
        />
        <Tab
          label="Airports"
          value={`/${countryCode}/airports`}
          component={Link}
          to={`${countryCode}/airports`}
        />
      </Tabs>
    </nav>
  );
};

export default Navigation;
