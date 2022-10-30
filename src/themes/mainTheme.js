import {createTheme} from "@mui/material";

export const mainTheme = createTheme({
  palette   : {
	primary  : {
	  main: "#FF2625",
	  dark: "#a20d0d",
	},
	secondary: {
	  main: "#7787d9",
	  dark: "#1d2555",
	}
  },
  typography: {
	fontFamily: "Josefin Sans"
  }
})