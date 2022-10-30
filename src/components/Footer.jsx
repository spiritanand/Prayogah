import {
  Stack,
  Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React from 'react';
import github from "../assets/icons/github.png"

function Footer(props) {
  const theme = useTheme();
  return (
	<Stack bgcolor = {theme.palette.secondary.dark}
		   alignItems = {"center"}
		   gap = {`1rem`}
		   mt={`5rem`}
	>
	  <Typography variant = {`h5`}
				  mt = {"1rem"}
				  color = {theme.palette.primary.main}
	  >
		Made with ♥️
	  </Typography>
	  <a href = "https://github.com/spiritmonster/Prayogah"
		 target = {"_blank"}
		 rel = {"noreferrer"}
		 style = {{
		   display       : "flex",
		   justifyContent: "center",
		 }}
	  >
		<img src = {github}
			 alt = "github-icon"
			 style = {{
			   width: "30px",
			 }}
		/>
	  </a>
	  <Typography color = {theme.palette.primary.main}>
		Spirit 🙏
	  </Typography>
	</Stack>
  );
}

export default Footer;