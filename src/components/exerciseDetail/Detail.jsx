import {
  Stack,
  Typography
} from "@mui/material";
import React from 'react';
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

function Detail({exerciseDetail}) {
  const {
		  name,
		  gifUrl,
		  target,
		  equipment,
		  bodyPart,
		} = exerciseDetail;
  
  const iconDetails = [
	{
	  icon: BodyPartImage,
	  name: bodyPart,
	},
	{
	  icon: TargetImage,
	  name: target,
	},
	{
	  icon: EquipmentImage,
	  name: equipment,
	},
  ];
  
  return (
	<Stack gap = {`4rem`}
		   p = {`1rem`}
		   alignItems = {`center`}
		   justifyContent = {`center`}
		   textAlign={`center`}
		   direction = {{
			 xs: "column",
			 lg: "row"
		   }}
	>
	  <img src = {gifUrl}
		   alt = {name}
		   loading = {`lazy`}
	  />
	  <Stack gap = {{
		xs: `2rem`,
		lg: `3rem`
	  }}
	  >
		<Typography variant = {`h2`}
					fontSize={{
					  xs:"2rem",
					  lg:"3rem",
					}}
					fontWeight = {`bold`}
					textTransform = {`uppercase`}
		>
		  {name}
		</Typography>
		{iconDetails.map((icon) => (
		  <Stack key = {icon.name}
				 direction = {`row`}
				 alignItems = {`center`}
				 justifyContent={"center"}
				 gap = {`2rem`}
		  >
			<img src = {icon.icon}
				 alt = {icon.name}
				 style = {{
				   width: "min(25%,80px)",
				 }}
			/>
			<Typography variant = {`h5`}
						textTransform = {`capitalize`}
						width={"50%"}
			>
			  {icon.name}
			</Typography>
		  </Stack>
		))}
	  </Stack>
	</Stack>
  );
}

export default Detail;