import {
  Box,
  Pagination,
  Stack,
  Typography
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {
  exerciseOptions,
  fetchData
} from "../../utils/fetchData.js";
import {scrollToById} from "../../utils/scrollToById.js";
import ExerciseCard from "../excercise/ExerciseCard.jsx"
import React, {
  useEffect,
  useState
} from 'react';
import Loader from "../UI/Loader.jsx";

function Exercises({
					 exercises,
					 setExercises,
					 bodyPart
				   }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const theme = useTheme();
  
  const NO_OF_EXERCISES_PER_PAGE = 6;
  
  const indexOfLastExercise = currentPage * NO_OF_EXERCISES_PER_PAGE;
  const indexOfFirstExercise = indexOfLastExercise - NO_OF_EXERCISES_PER_PAGE;
  const currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise);
  
  function paginate(e, value) {
	setCurrentPage(value);
	scrollToById("exercises");
  }
  
  useEffect(() => {
	const fetchExercisesData = async () => {
	  let exercisesData = [];
	  setIsLoading(true);
	  
	  try {
		
		if (bodyPart === 'all')
		  exercisesData = await fetchData(
			"https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
		else
		  exercisesData = await fetchData(
			`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
			exerciseOptions
		  );
	  } catch (error) {
		console.log(error)
	  } finally {
		{
		  setIsLoading(false);
		}
	  }
	  
	  setExercises(exercisesData);
	}
	
	fetchExercisesData();
  }, [bodyPart]);
  
  
  return (
	isLoading
	? <Loader/>
	: (
	  <Box id = {`exercises`}
		   mt = {`4rem`}
	  >
		<Typography variant = {`h3`}
					textAlign = {`center`}
					mb = {`3rem`}
					color = {theme.palette.secondary.dark}
		>
		  Exercises
		</Typography>
		<Stack direction = {`row`}
			   flexWrap = {`wrap`}
			   justifyContent = {`center`}
			   sx = {{
				 gap: {
				   xs: "3rem",
				   lg: "8rem"
				 }
			   }}
		>
		  {currentExercises.map(exercise => (
			<ExerciseCard key = {exercise.id}
						  data = {exercise}
			></ExerciseCard>
		  ))}
		</Stack>
		<Stack alignItems = {`center`}
			   mt = {`2rem`}
		>
		  {exercises.length > NO_OF_EXERCISES_PER_PAGE
		   ?
		   (
			 <Pagination count = {Math.ceil(exercises.length / NO_OF_EXERCISES_PER_PAGE)}
						 page = {currentPage}
						 onChange = {paginate}
						 color = "primary"
						 shape = "rounded"
						 showFirstButton
						 showLastButton
			 >
			 </Pagination>
		   )
		   : ""}
		</Stack>
	  </Box>
	)
  );
}

export default Exercises;