import React, { useEffect, useState } from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import DropDown from "../../components/base/DropDown";
import MultipleImageUpload from "../../components/common/MultipleImageUpload";
import DateField from "../../components/base/DateField";
import TextArea from "../../components/base/TextArea";
import { useSelector } from "react-redux";

const PostPlantForm = () => {
  const { images } = useSelector((state) => state.plants);
  const [plantName, setPlantName] = useState("");
  const [price, setPrice] = useState(0);
  const [harvestedDate, setHarvestedDate] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1>Post your plant for sale</h1>
      <div className="post-inputs-container">
        <Input inputColor="#BE7D86" label="Plant Name" />
        <Input inputColor="#BE7D86" label="Price" />
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
          <DateField fieldColor="#BE7D86" />
          <TextArea placeholder="Description" minRows={7} minLength={5} />
        </div>
      </div>
    </div>
  );
};

export default PostPlantForm;
