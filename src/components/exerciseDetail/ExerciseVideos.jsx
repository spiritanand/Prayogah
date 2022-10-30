import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React from 'react';

function ExerciseVideos({
						  name,
						  exerciseVideos
						}) {
  const theme = useTheme();
  
  return (
	<Box sx = {{
	  mt       : {
		xs: "3rem",
		lg: "6rem",
	  },
	  p        : "1rem",
	  textAlign: "center"
	}}
	>
	  <Typography variant = {`h4`}
				  mb = {`2rem`}
	  >
		Watch
		<span style = {{
		  textTransform: "uppercase",
		  color        : theme.palette.primary.main,
		  fontWeight   : "bold",
		}}
		>{` ${name} `}</span>
		Videos
	  </Typography>
	  <Stack justifyContent = {`center`}
			 alignItems = {`center`}
			 flexWrap = {`wrap`}
			 sx = {{
			   flexDirection: {
				 xs: "column",
				 lg: "row",
			   },
			   gap          : "2rem",
			 }}
	  >
		{exerciseVideos.contents?.slice(0, 3)
					   .map((vid) => (
						   <a key = {vid.video.videoId}
							  className = {`exercise-video`}
							  href = {`https://www.youtube.com/watch?v=${vid.video.videoId}`}
							  target = {`_blank`}
							  rel = {`noreferrer`}
						   >
							 <img src = {vid.video.thumbnails[0].url}
								  alt = {vid.video.title}
								  style={{
									maxWidth:"90%",
									margin:"auto",
								  }}
							 />
							 <Box>
							   <Typography variant={`h6`}>
								 {vid.video.title}
							   </Typography>
							   <Typography variant={`subtitle1`}>
								 {vid.video.channelName}
							   </Typography>
							 </Box>
						   </a>
						 )
					   )}
	  </Stack>
	</Box>
  );
}

export default ExerciseVideos;