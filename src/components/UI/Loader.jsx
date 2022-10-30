import {
  Box,
  CircularProgress,
  Stack,
  Typography
} from "@mui/material";
import React from 'react';

function Loader(props) {
  return (
	<Stack justifyContent = {`center`}
		   alignItems = {"center"}
		   gap = {`1.5rem`}
		   height = {`80vh`}
	>
	  <Typography variant = {`h2`}
				  fontWeight = {`bold`}
	  >
		Loading...
	  </Typography>
	  <CircularProgress color = "secondary"/>
	</Stack>
  );
}

export default Loader;