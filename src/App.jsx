import {
  Box,
} from "@mui/material";
import {
  Route,
  Routes
} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ExerciseDetail from "./pages/ExerciseDetail.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
	<Box>
	  <Navbar></Navbar>
	  <Routes>
		<Route path = {`/`}
			   element = {<Home></Home>}
		></Route>
		<Route path = {`/exercise/:id`}
			   element = {<ExerciseDetail></ExerciseDetail>}
		></Route>
	  </Routes>
	  <Footer></Footer>
	</Box>
  )
}

export default App
