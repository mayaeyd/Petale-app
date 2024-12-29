import React from "react";
import GardenerNavbar from "../../components/common/GardenerNavbar";
import "./style.css";
import Input from "../../components/base/Input";
import { DateField } from "@mui/x-date-pickers";
import DropDown from "../../components/base/DropDown";

const PostPlantForm = () => {
  return (
    <div className="post-plant-form">
      <GardenerNavbar />
      <h1>Post your plant for sale</h1>
      <div className="post-inputs-container">
        <Input inputColor="#BE7D86" label="Plant Name" />
        <Input inputColor="#BE7D86" label="Price" />
        <DropDown
          label="Date Harvested"
          options={[
            { value: "flower" },
            { value: "plant" },
          ]}
          inputColor="#BE7D86"
        />
        {/* <DateField fieldColor="#BE7D86" /> */}
      </div>
    </div>
  );
};

export default PostPlantForm;
