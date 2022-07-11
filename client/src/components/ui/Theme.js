import { createTheme } from "@mui/material/styles";

const chillBlue = "#0B72B9"
const chillOrange = "#FFBA60"

export default createTheme({
  palette: {
    common: {
      blue: `${chillBlue}`,
      orange: `${chillOrange}`
    },
    primary: {
      main: `${chillBlue}`
    },
    secondary: {
      main: `${chillOrange}`
    }
  }
})
