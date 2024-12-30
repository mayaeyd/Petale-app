import React, { useEffect, useState } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import DropDown from "../../components/base/DropDown";
import MultipleImageUpload from "../../components/common/MultipleImageUpload";
import DateField from "../../components/base/DateField";
import TextArea from "../../components/base/TextArea";
import { useDispatch, useSelector } from "react-redux";
import PinkButtonRound from "../../components/base/PinkButtonRound";
import { postNewPlant } from "../../redux/slices/plantsSlice";
import { CircularProgress } from "@mui/material";

const PostPlantForm = () => {
  const { images, plantType, loading } = useSelector((state) => state.plants);

  const [plantName, setPlantName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [harvestDate, setHarvestDate] = useState(null);
  const [description, setDescription] = useState("");
  const [warning, setWarning] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      !plantName ||
      !price ||
      !harvestDate ||
      !description ||
      !images ||
      !plantType
    ) {
      setWarning("All fields are required");
      return;
    }

    const formData = new FormData();

    formData.append("plantName", plantName);
    formData.append("plantType", plantType);
    formData.append("harvestDate", harvestDate);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);

    images.forEach((image, index) => {
      formData.append("images", image);
    });

    dispatch(postNewPlant(formData));
  };

  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1>Post your plant for sale</h1>
      <div className="post-inputs-container">
        <Input
          inputColor="#BE7D86"
          label="Plant Name"
          onChange={(e) => setPlantName(e.target.value)}
        />
        <Input
          inputColor="#BE7D86"
          label="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          inputColor="#BE7D86"
          label="Quantity"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <DropDown
          label="Plant Type"
          options={[{ value: "flower" }, { value: "plant" }]}
          inputColor="#BE7D86"
        />
      </div>
      <div className="post-images-desc">
        <div className="image-upload">
          <MultipleImageUpload />
        </div>
        <div className="form-section">
          <DateField
            fieldColor="#BE7D86"
            onChange={(selectedDate) => setHarvestDate(selectedDate)}
          />
          <TextArea
            placeholder="Description"
            minRows={7}
            minLength={5}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <PinkButtonRound
        label={
          loading ? <CircularProgress color="inherit" size="20px" /> : "Post"
        }
        onClick={handleSubmit}
      />
      {warning && <p style={{ color: "#ff4444" }}>{warning}</p>}
    </div>
  );
};

export default PostPlantForm;
