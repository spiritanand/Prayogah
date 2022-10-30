import {Box} from "@mui/material";
import React, {
  useEffect,
  useState
} from 'react';
import {useParams} from "react-router-dom";
import Detail from "../components/exerciseDetail/Detail.jsx";
import ExerciseVideos from "../components/exerciseDetail/ExerciseVideos.jsx";
import SimilarExercises from "../components/exerciseDetail/SimilarExercises.jsx";
import Loader from "../components/UI/Loader.jsx";
import {
  exerciseOptions,
  fetchData,
  fetchYtVideos,
  ytVideoDbOptions
} from "../utils/fetchData.js";

function ExerciseDetail(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  
  const {id} = useParams();
  
  useEffect(() => {
	const fetchExerciseData = async () => {
	  try {
		setIsLoading(true);
		const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
		
		const exerciseData = await fetchData(
		  `${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
		
		ytVideoDbOptions.params.query = `${exerciseData.name} exercise`;
		const ytVideoData = fetchYtVideos(ytVideoDbOptions);
		
		const targetMuscleExercisesData = fetchData(
		  `${exerciseDbUrl}/exercises/target/${exerciseData.target}`, exerciseOptions);
		
		const equipmentExercisesData = fetchData(
		  `${exerciseDbUrl}/exercises/equipment/${exerciseData.equipment}`,
		  exerciseOptions
		);
		
		const promisedData = await Promise.all([
		  ytVideoData,
		  targetMuscleExercisesData,
		  equipmentExercisesData
		]);
		
		setExerciseDetail(exerciseData);
		
		setExerciseVideos(promisedData[0]);
		setTargetMuscleExercises(promisedData[1]);
		setEquipmentExercises(promisedData[2]);
	  } catch (err) {
		console.log(err);
	  } finally {
		setIsLoading(false);
	  }
	}
	
	fetchExerciseData();
  }, [id]);
  
  return (
	isLoading
	? <Loader/>
	: (
	  <Box>
		<Detail exerciseDetail = {exerciseDetail}></Detail>
		<ExerciseVideos name = {exerciseDetail.name}
						exerciseVideos = {exerciseVideos}
		></ExerciseVideos>
		<SimilarExercises targetMuscleExercises = {targetMuscleExercises}
						  equipmentExercises = {equipmentExercises}
		></SimilarExercises>
	  </Box>
	)
  );
}

export default ExerciseDetail;