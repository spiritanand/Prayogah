import {
  Button,
  Stack,
  Typography
} from "@mui/material";
import {yellow} from "@mui/material/colors";
import {
  useTheme,
  styled
} from "@mui/material/styles";
import React from 'react';
import {Link} from "react-router-dom";

function ExerciseCard({data: exercise}) {
  const theme = useTheme();
  
  const TagButton = styled(Button)(({theme}) => (
	{
	  color   : "azure",
	  fontSize: "0.75rem",
	}
  ));
  
  return (
	<Link className = {`exercise-card`}
		  to = {`/exercise/${exercise.id}`}
	>
	  <img src = {exercise.gifUrl}
		   alt = {exercise.name}
		   loading = {`lazy`}
	  />
	  <Stack direction = {`row`}
			 justifyContent = {`center`}
			 gap = {`0.5rem`}
	  >
		<TagButton sx = {{
		  backgroundColor: theme.palette.secondary.dark,
		}}
		>
		  {exercise.target}
		</TagButton>
		<TagButton sx = {{
		  backgroundColor: theme.palette.secondary.light,
		}}
		>
		  {exercise.bodyPart}
		</TagButton>
	  </Stack>
	  <Typography fontWeight = {`bold`}
				  p = {`0.5rem`}
				  textTransform = {`capitalize`}
				  textAlign = {`center`}
	  >
		{exercise.name}
	  </Typography>
	</Link>
  );
}

export default ExerciseCard;
