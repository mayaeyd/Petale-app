import { Fab } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import React from "react";

const CartButton = ({ ...props }) => {
  return (
    <Fab
      sx={{
        backgroundColor: "black",
        height: "40px",
        width: "40px",
        transition: "background-color 0.5s ease",
        "&:hover": {
          backgroundColor: "#383838",
        },
      }}
      {...props}
    >
      <ShoppingCart color="#fff" />
    </Fab>
  );
};

export default CartButton;
