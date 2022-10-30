import {Box} from "@mui/material";
import React, {useState} from 'react';
import Exercises from "../components/home/Exercises.jsx";
import HeroBanner from "../components/home/HeroBanner.jsx";
import SearchExercises from "../components/home/SearchExercises.jsx";

function Home(props) {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  
  
  return (
	<Box>
	  <HeroBanner></HeroBanner>
	  <SearchExercises setExercises = {setExercises}
					   bodyPart = {bodyPart}
					   setBodyPart = {setBodyPart}
	  ></SearchExercises>
	  <Exercises exercises = {exercises}
				 setExercises = {setExercises}
				 bodyPart = {bodyPart}
	  ></Exercises>
	</Box>
  );
}

export default Home;