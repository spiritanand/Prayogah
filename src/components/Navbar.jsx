import {
  Stack,
} from "@mui/material";
import {
  useTheme
} from '@mui/material/styles';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/images/Logo.png"
import {scrollToById} from "../utils/scrollToById.js";

function Navbar(props) {
  const theme = useTheme();
  const [isActive, setIsActive] = useState("home");
  
  return (
	<Stack
	  className = {`navbar`}
	  direction = {`row`}
	  spacing = {2}
	  fontSize = {`1.5rem`}
	  sx = {{
		gap           : {
		  xs: "2rem",
		  sm: "10rem",
		},
		m             : {
		  xs: `1rem`,
		  sm: "2rem"
		},
		justifyContent: "none",
	  }}
	>
	  <Link to = {`/`}>
		<img src = {Logo}
			 alt = "healthy-logo"
			 style = {{
			   margin: "0 1rem"
			 }}
		/>
	  </Link>
	  <Stack direction = {`row`}
			 gap = {`1rem`}
			 alignItems = {`flex-end`}
	  >
		<Link to = {`/`}
			  className = {isActive === "home"
						   ? "active"
						   : ""}
			  style = {{
				borderBottomColor: isActive === "home"
								   ? theme.palette.primary.main
								   : "transparent,"
			  }}
			  onClick = {e => {
				setIsActive("home");
			  }}
		>Home</Link>
		<Link to = "/#exercises"
			  className = {isActive === "exercises"
						   ? "active"
						   : ""}
			  onClick = {e => {
				setIsActive("exercises");
				scrollToById("exercises");
			  }}
		>Exercises</Link>
	  </Stack>
	</Stack>
  );
}

export default Navbar;