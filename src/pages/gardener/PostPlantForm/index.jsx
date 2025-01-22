import React, { useState } from "react";
import GardenerNavbar from "../../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../../components/base/Input";
import DropDown from "../../../components/base/DropDown";
import MultipleImageUpload from "../../../components/common/MultipleImageUpload";
import DateField from "../../../components/base/DateField";
import TextArea from "../../../components/base/TextArea";
import { useDispatch, useSelector } from "react-redux";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import {
  postExistingPlant,
  postNewPlant,
} from "../../../redux/slices/postedPlantsSlice";
import { CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PostPlantForm = ({ newPlant }) => {
  const { loading } = useSelector((state) => state.postedPlants);
  const { id } = useParams();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("flower");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [harvestDate, setHarvestDate] = useState(null);
  const [description, setDescription] = useState("");

  const [warning, setWarning] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const handleImagesChange = (newImages) => {
    setImages(newImages);
  };

  const handleSubmit = async () => {
    if (!price || !harvestDate || !description || !images || !plantType) {
      setWarning("All fields are required");
      return;
    }
    if (!newPlant && !plantName) {
      setWarning("All fields are required");
      return;
    }

    const formData = new FormData();

    formData.append("plantName", plantName || newPlant.scientificName);
    formData.append("plantType", newPlant?.plantType || plantType);
    formData.append("harvestDate", harvestDate);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);

    images.forEach((image, index) => {
      formData.append("images", image);
    });

    try {
      newPlant
        ? await dispatch(
            postExistingPlant({ plantDetails: formData, plantId: id })
          )
        : await dispatch(postNewPlant(formData));
      setSuccessMessage(
        `${
          plantType.charAt(0).toUpperCase() + plantType.slice(1).toLowerCase()
        } posted successfully!`
      );
      setPlantName("");
      setPrice("");
      setQuantity(1);
      setDescription("");
      setPlantType("flower");
      setImages([]);
      if (newPlant) navigate("/gardener/growing-plants");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleReset = () => {
    setPlantName("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setPlantType("flower");
  };

  if (warning) {
    setInterval(() => setWarning(""), 6000);
  }

  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1 style={newPlant ? { display: "none" } : null}>
        Post your plant for sale
      </h1>
      <div className="post-inputs-container">
        <Input
          inputColor="#666"
          label="Plant Name"
          onChange={(e) => setPlantName(e.target.value)}
          value={newPlant ? newPlant.scientificName : plantName}
        />
        <Input
          inputColor="#666"
          label="Price for One"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <Input
          inputColor="#666"
          label="Quantity"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <DropDown
          label="Plant Type"
          options={[{ value: "flower" }, { value: "plant" }]}
          inputColor="#666"
          onChange={(event) => setPlantType(event.target.value)}
          value={newPlant ? newPlant.plantType : plantType}
        />
      </div>
      <div className="post-images-desc">
        <div className="image-upload">
          <MultipleImageUpload onImagesChange={handleImagesChange} />
        </div>
        <div className="form-section">
          <DateField
            label="Date Harvested"
            fieldColor="#666"
            onChange={(selectedDate) => setHarvestDate(selectedDate)}
          />
          <TextArea
            placeholder="Description"
            minRows={7}
            minLength={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
      </div>
      <div>
        <div>
          <PinkButtonRound label="Reset" onClick={handleReset} fullWidth />
          <PinkButtonRound
            label={
              loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Post for sale"
              )
            }
            onClick={handleSubmit}
            fullWidth
          />
        </div>
        {successMessage && <p>{successMessage}</p>}
        {warning && <p>{warning}</p>}
      </div>
    </div>
  );
};

export default PostPlantForm;
