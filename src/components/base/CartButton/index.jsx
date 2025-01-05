import { ShoppingCart } from "@mui/icons-material";
import React from "react";

const CartButton = ({ ...props }) => {
  return (
    <div className="cart-button-container">
      <button>
        <ShoppingCart strokeWidth="1" />
      </button>
    </div>
  );
};

export default CartButton;
