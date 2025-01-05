import { Fab } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import React from "react";

const CartButton = ({ ...props }) => {
  return (
    <Fab sx={{ backgroundColor: "black", height: "40px", width: "40px" }}>
      <ShoppingCart color="#fff" />
    </Fab>
  );
};

export default CartButton;
