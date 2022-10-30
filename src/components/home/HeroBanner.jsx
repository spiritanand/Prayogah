import {
  Box,
  Button,
  Typography
} from "@mui/material";
import React from 'react';
import HeroBannerImg from "../../assets/images/banner.png";

function HeroBanner(props) {
  return (
	<Box sx = {{
	  mt: "2rem",
	  ml: {
		xs: "1rem",
		sm: "5rem",
	  },
	  p : "1rem",
	}}
	>
	  <Typography variant = {`subtitle1`}
				  color = {`primary`}
				  fontWeight = {`600`}
	  >
		Fitness Club
	  </Typography>
	  <Typography variant = {`h3`}
				  fontWeight = {`500`}
				  my = {3}
				  sx = {{
					lineHeight   : 1.5,
					letterSpacing: 2,
				  }}
	  >
		Sweat, Smile <br/> and Repeat!
	  </Typography>
	  <Typography variant = {`body2`}
				  mb = {2}
	  >
		Check out the most effective exercises.
	  </Typography>
	  <Button color = {`primary`}
			  variant = {`contained`}
			  href = {`#exercises`}
			  sx = {{
				p: 1.5,
			  }}
	  >Explore Exercises</Button>
	  <Typography fontWeight = {`600`}
				  fontSize = {`7rem`}
				  color = {"primary"}
				  sx = {{
					opacity       : 0.125,
					display       : {
					  xs: "none",
					  lg: "block",
					},
					letterSpacing : 30,
					background    : "linear-gradient(to bottom, #ff2625, #e7201f,"
									+ " #cf1a19, #b81313, #a20d0d)",
					backgroundClip: "text",
					textFillColor : "transparent",
				  }}
	  >
		Exercise
	  </Typography>
	  <img src = {HeroBannerImg}
		   alt = "HeroImg"
		   className = {`hero-banner-img`}
	  />
	</Box>
  );
}

export default HeroBanner;