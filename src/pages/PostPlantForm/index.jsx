import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import { DateField } from "@mui/x-date-pickers";

const PostPlantForm = () => {
  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1>Post your plant for sale</h1>
      <div className="post-inputs-container">
        <Input inputColor="#BE7D86" label="Plant Name" />
        <Input inputColor="#BE7D86" label="Price" />
        <Input inputColor="#BE7D86" label="Type" />
        <DateField fieldColor="#BE7D86"  />
      </div>
    </div>
  );
};

export default PostPlantForm;
