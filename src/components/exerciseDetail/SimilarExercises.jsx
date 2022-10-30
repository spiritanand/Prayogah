import {
  Box,
  Stack,
  Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React from 'react';
import ExerciseCard from "../excercise/ExerciseCard.jsx";
import HorizontalScrollBar from "../UI/HorizontalScrollBar.jsx";

const SimilarExercises = ({
							targetMuscleExercises,
							equipmentExercises
						  }) => {
  const theme = useTheme();
  const ExercisesScrollList = HorizontalScrollBar(ExerciseCard);
  return (
	<Box my = {`5rem`}>
	  <Typography variant = {`h4`}
				  fontWeight = {`bold`}
				  textAlign = {`center`}
				  textTransform = {`capitalize`}
	  >
		Same <span style = {{
		textTransform: "uppercase",
		color        : theme.palette.primary.main,
		fontWeight   : "bold",
	  }}
	  >muscle group</span> exercises
	  </Typography>
	  <Stack position = {`relative`}
			 p = {`1rem`}
	  >
		<ExercisesScrollList data = {targetMuscleExercises}>
		</ExercisesScrollList>
	  </Stack>
	  <Typography variant = {`h4`}
				  fontWeight = {`bold`}
				  textAlign = {`center`}
				  textTransform = {`capitalize`}
				  mt = {`4rem`}
	  >
		Same <span style = {{
		textTransform: "uppercase",
		color        : theme.palette.primary.main,
		fontWeight   : "bold",
	  }}
	  >equipment</span> exercises
	  </Typography>
	  <Stack position = {`relative`}
			 p = {`1rem`}
	  >
		<ExercisesScrollList data = {equipmentExercises}>
		</ExercisesScrollList>
	  </Stack>
	</Box>
  );
};

export default SimilarExercises;
