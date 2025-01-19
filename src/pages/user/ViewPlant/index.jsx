import { useParams } from "react-router-dom";
import UserNavbar from "../../../components/common/UserNavbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/slices/marketplaceSlice";
import ImageGallery from "../../../components/base/ImageGallery";
import { Flower, Leaf } from "lucide-react";
import "./style.css";
import PinkButtonSquared from "../../../components/base/PinkButtonSquared";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "../../../redux/slices/cartSlice";

export default function ViewPlant() {
  const { id } = useParams();
  const { singlePost, posts } = useSelector((state) => state.marketplace);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id, posts]);

  const [addGiftMessage, setAddGiftMessage] = useState("No");
  const [giftMessage, setGiftMessage] = useState("");

  const existingItem = items?.find((item) => item.id === id);
}
