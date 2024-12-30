import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import DropDown from "../../components/base/DropDown";
import MultipleImageUpload from "../../components/common/MultipleImageUpload";
import DateField from "../../components/base/DateField";
import TextArea from "../../components/base/TextArea";

const PostPlantForm = () => {
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
          <TextArea placeholder="Description" minRows={6} minLength={5} />
        </div>
      </div>
    </div>
  );
};

export default PostPlantForm;
