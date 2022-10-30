import {
  Typography
} from "@mui/material";
import React, {useContext} from 'react';
import {
  ScrollMenu,
  VisibilityContext
} from "react-horizontal-scrolling-menu";
import leftArrowIcon from "../../assets/icons/left-arrow.png"
import rightArrowIcon from "../../assets/icons/right-arrow.png"

const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);
  
  return (
	<Typography onClick = {() => scrollPrev()}
				className = "left-arrow"
	>
	  <img src = {leftArrowIcon}
		   alt = "right-arrow"
	  />
	</Typography>
  );
};

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);
  
  return (
	<Typography onClick = {() => scrollNext()}
				className = "right-arrow"
	>
	  <img src = {rightArrowIcon}
		   alt = "right-arrow"
	  />
	</Typography>
  );
};

const HorizontalScrollBar = (Component) => ({
							   data,
							   bodyPart,
							   setBodyPart
							 }) => {
  return (
	<ScrollMenu LeftArrow = {LeftArrow}
				RightArrow = {RightArrow}
	>
	  {data?.map(item => (
		  <Component
			key = {item.id || item}
			itemID = {item.id || item}
			title = {item.id || item}
			data = {item}
			bodyPart = {bodyPart}
			setBodyPart = {setBodyPart}
		  >
		  </Component>
	  ))}
	</ScrollMenu>
  );
}

export default HorizontalScrollBar;