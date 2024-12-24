import { Masonry } from "@mui/lab";
import { Box, Paper, styled } from "@mui/material";
import React from "react";

const items = [
  150, 40, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const MasonryHero = () => {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {items.map((item, index) => (
          <Item key={index} sx={{ height: item.height }}>
            <img
              src={item.image}
              alt={`Item ${index + 1}`}
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
