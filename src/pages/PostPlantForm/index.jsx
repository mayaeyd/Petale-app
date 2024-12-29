import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";

const PostPlantForm = () => {
  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1>Post your plant for sale</h1>
      <div className="post-inputs-container">
        <Input inputColor="#BE7D86" label="Plant Name" />
      </div>
    </div>
  );
};

export default PostPlantForm;
