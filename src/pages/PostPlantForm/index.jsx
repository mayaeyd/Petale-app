import React, { useEffect, useState } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import DropDown from "../../components/base/DropDown";
import MultipleImageUpload from "../../components/common/MultipleImageUpload";
import DateField from "../../components/base/DateField";
import TextArea from "../../components/base/TextArea";
import { useSelector } from "react-redux";
import PinkButtonRound from "../../components/base/PinkButtonRound";

const PostPlantForm = () => {
  const { images } = useSelector((state) => state.plants);
  const { plantType } = useSelector((state) => state.plants);

  const [plantName, setPlantName] = useState("");
  const [price, setPrice] = useState(0);
  const [harvestedDate, setHarvestedDate] = useState(null);
  const [description, setDescription] = useState("");

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
            onChange={(selectedDate) => setHarvestedDate(selectedDate)}
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
        label="Submit"
        onClick={() => {
          console.log({price, plantName, plantType, harvestedDate, images, description});
        }}
      />
    </div>
  );
};

export default PostPlantForm;
