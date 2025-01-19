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

  return (
    <main>
      <UserNavbar />
      <div className="user-posted-plant-container">
        <ImageGallery images={singlePost?.post?.images ?? []} isStatic />
        <div className="user-posted-plant-details">
          <h2>{singlePost?.post?.plantName}</h2>
          <span>
            {singlePost?.post?.plantType === "plant" ? (
              <Leaf color="#878787" strokeWidth="1" />
            ) : (
              <Flower color="#878787" strokeWidth="1" />
            )}
            <p>{singlePost?.post?.plantType}</p>
          </span>
          <p className="user-posted-plant-price">${singlePost?.post?.price}</p>

          <p className="user-posted-plant-description">
            {singlePost?.post?.description}
          </p>

          <div className="gift-message-container">
            <label className="gift-message-label">Add a gift message</label>
            <select
              className="gift-message-input"
              value={addGiftMessage}
              onChange={(e) => {
                setAddGiftMessage(e.target.value);
              }}
            >
              <option value={"No"}>No</option>
              <option value={"Yes"}>Yes</option>
            </select>
          </div>

          {addGiftMessage === "Yes" && (
            <div>
              <textarea
                style={{
                  padding: 10,
                  width: 300,
                  resize: "none",
                }}
                placeholder=""
                rows={5}
                onChange={(e) => {
                  setGiftMessage(e.target.value);
                }}
                value={giftMessage}
              />
            </div>
          )}

          <div className="addons-container">
            <span className="addons-label">Send it with little something</span>
            <div className="addons-checkbox-container">
              <input
                className="addons-checkbox-input"
                type="checkbox"
                name="subscribe"
                value="yes"
              />
              <label className="addons-checkbox-label">
                {" "}
                Add Chocolate Box (24 pcs){" "}
              </label>
            </div>
            <div className="addons-checkbox-container">
              <input
                className="addons-checkbox-input"
                type="checkbox"
                name="subscribe"
                value="yes"
              />
              <label className="addons-checkbox-label">
                {" "}
                Add Balloons (3 red)
              </label>
            </div>
          </div>

          <div className="add-to-cart-container">
            <PinkButtonSquared
              onClick={() => {
                if (existingItem) {
                  dispatch(removeItemFromCart(id));
                } else {
                  dispatch(
                    addItemToCart({
                      id,
                      name: singlePost?.post?.plantName,
                      price: singlePost?.post?.price,
                      quantity: 1,
                      image: singlePost?.post?.images[0],
                    })
                  );
                }
              }}
              label={existingItem ? "Remove From Cart" : "Add to Cart"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
