import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PinkButtonSquared from "../../../components/base/PinkButtonSquared";
import UserNavbar from "../../../components/common/UserNavbar";
import "./style.css";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart); // Access the cart state from Redux store
