import { createTheme } from "@mui/material/styles";

const darkGoldishTheme = createTheme({
  palette: {
    primary: {
      main: "#FFD700", // Set the primary color to gold
    },
    secondary: {
      main: "#424242", // Set the secondary color to a dark gray
    },
    type: "dark", // Use dark theme
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Customize the font family
  },
  // Add more customizations as needed
});

export default { darkGoldishTheme };
