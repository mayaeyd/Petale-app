import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import DropDown from "../../components/base/DropDown";
import MultipleImageUpload from "../../components/common/MultipleImageUpload";
import DateField from "../../components/base/DateField";

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
        <MultipleImageUpload />
        <DateField fieldColor="#BE7D86" />
      </div>
    </div>
  );
};

export default PostPlantForm;
