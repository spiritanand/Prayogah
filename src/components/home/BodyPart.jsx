import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import React from 'react';
import {useTheme} from '@mui/material/styles';
import gymIcon from "../../assets/icons/gym.png"
import {scrollToById} from "../../utils/scrollToById.js";

function BodyPart({
					data: item,
					setBodyPart,
					bodyPart
				  }) {
  const theme = useTheme();
  return (
	<Stack type = {`button`}
		   alignItems = {`center`}
		   justifyContent = {`center`}
		   m = {"1rem 2rem"}
		   className = {`bodyPart-card`}
		   p = {`1rem`}
		   sx = {{
			 borderTop  : "4px solid",
			 borderColor: bodyPart === item
						  ? theme.palette.primary.main
						  : "transparent",
			 cursor     : "pointer",
		   }}
		   onClick = {() => {
			 setBodyPart(item);
			 scrollToById("exercises");
		   }}
	>
	  <img src = {gymIcon}
		   alt = ""
		   style = {{
			 width: "30px",
		   }}
	  />
	  <Typography m = {`1rem`}
				  textAlign = {`center`}
				  fontWeight = {`bold`}
				  variant = {`h6`}
				  color = {theme.palette.primary.dark}
				  sx = {{
					textTransform: "uppercase",
					lineHeight   : 1.3
				  }}
	  >
		{item}
	  </Typography>
	</Stack>
  );
}

export default BodyPart;
