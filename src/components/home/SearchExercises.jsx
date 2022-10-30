import {
  Box,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import React, {
  Fragment,
  useEffect,
  useState
} from 'react';
import {
  exerciseOptions,
  fetchData
} from "../../utils/fetchData.js";
import {scrollToById} from "../../utils/scrollToById.js";
import HorizontalScrollBar from "../UI/HorizontalScrollBar.jsx";
import BodyPart from "./BodyPart.jsx";

function SearchExercises({
						   setExercises,
						   bodyPart,
						   setBodyPart
						 }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [bodyParts, setBodyParts] = useState([]);
  
  const BodyPartScrollableList = HorizontalScrollBar(BodyPart);
  
  useEffect(() => {
	const fetchExercisesData = async () => {
	  try {
		
		const bodyPartsData = await fetchData(
		  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions
		);
		
		setBodyParts([
		  "all",
		  ...bodyPartsData
		]);
	  } catch (err) {
		console.log(err);
	  }
	}
	
	fetchExercisesData();
  }, []);
  
  
  const handleSearch = async () => {
	if (search) {
	  setLoading(true);
	  
	  try {
		const exercisesData = await fetchData(
		  "https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
		
		const searchedExercises = exercisesData.filter(ex =>
		  ex.name.includes(search) ||
		  ex.target.includes(search) ||
		  ex.equipment.includes(search) ||
		  ex.bodyPart.includes(search));
		
		setExercises(searchedExercises);
		scrollToById("exercises");
	  } catch (err) {
		console.log("No exercise(s) found.");
		console.log(err);
	  } finally {
		setLoading(false);
		setSearch("");
	  }
	}
  }
  return (
	<Fragment>
	  <Stack alignItems = {`center`}
			 mt = {`4rem`}
	  >
		<Typography variant = {`h4`}
					fontWeight = {700}
					textAlign = {`center`}
					sx = {{
					  letterSpacing: 5,
					  mb           : "2rem"
					}}
		>
		  Awesome Exercises You <br/>Should Know
		</Typography>
		<form style = {{
		  position     : "relative",
		  display      : "flex",
		  flexDirection: "column",
		  alignItems   : "center",
		  marginBottom : "4rem",
		  width        : "100%",
		}}
		>
		  <TextField value = {search}
					 onChange = {e => setSearch(e.target.value.toLowerCase()
												 .trim())}
					 placeholder = {`Search Exercises`}
					 type = {`text`}
					 sx = {{
					   border: "none",
					   width : "min(80%,600px)",
					   input : {
						 p         : "1rem",
						 fontWeight: 500,
					   },
					 }}
		  >
		  </TextField>
		  <LoadingButton type = {`submit`}
						 className = {`search-btn`}
						 variant = {`contained`}
						 sx = {{
						   m: `1rem`,
						 }}
						 loading = {loading}
						 onClick = {handleSearch}
		  >
			Search
		  </LoadingButton>
		</form>
	  </Stack>
	  <Box position = {`relative`}>
		<BodyPartScrollableList data = {bodyParts}
							 bodyPart = {bodyPart}
							 setBodyPart = {setBodyPart}
		></BodyPartScrollableList>
	  </Box>
	</Fragment>
  
  )
	;
}

export default SearchExercises;