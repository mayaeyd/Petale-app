import { Masonry } from "@mui/lab";
import { Box, Paper, styled } from "@mui/material";
import React from "react";
import "./style.css";

import image1 from "../../../assets/images/MasonryImages/1.jpeg";
import image2 from "../../../assets/images/MasonryImages/2.jpeg";
import image3 from "../../../assets/images/MasonryImages/3.jpeg";
import image4 from "../../../assets/images/MasonryImages/4.jpeg";
import image5 from "../../../assets/images/MasonryImages/5.jpeg";
import image6 from "../../../assets/images/MasonryImages/6.jpeg";
import image7 from "../../../assets/images/MasonryImages/7.jpeg";
import image8 from "../../../assets/images/MasonryImages/8.jpeg";
import image9 from "../../../assets/images/MasonryImages/9.jpeg";
import image10 from "../../../assets/images/MasonryImages/10.jpeg";
import image11 from "../../../assets/images/MasonryImages/11.jpeg";
import image12 from "../../../assets/images/MasonryImages/12.jpeg";
import image13 from "../../../assets/images/MasonryImages/13.jpeg";
import image14 from "../../../assets/images/MasonryImages/14.jpeg";
import image15 from "../../../assets/images/MasonryImages/15.jpeg";

const items = [
  { height: 150, image: image1 },
  { height: 110, image: image2 },
  { height: 120, image: image3 },
  { height: 100, image: image4 },
  { height: 110, image: image5 },
  { height: 150, image: image6 },
  { height: 130, image: image7 },
  { height: 110, image: image8 },
  { height: 120, image: image9 },
  { height: 130, image: image10 },
  { height: 110, image: image11 },
  { height: 120, image: image12 },
  { height: 130, image: image13 },
  { height: 120, image: image14 },
  { height: 90, image: image15 },
  
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  borderRadius: 0,
}));

const MasonryHero = () => {
  return (
    <Box sx={{ width: 500, minHeight: 500 }} className="masonry-container">
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {items.map((item, index) => (
          <Item key={index} sx={{ height: item.height }}>
            <img
              src={item.image}
              alt={`Flower ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Item>
        ))}
      </Masonry>
    </Box>
  );
};

export default MasonryHero;
