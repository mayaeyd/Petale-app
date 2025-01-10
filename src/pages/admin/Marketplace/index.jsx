import React from "react";
import AdminNavbar from "../../../components/common/AdminNavbar";
import "./style.css";
import { useSelector } from "react-redux";
import { selectAllListings } from "../../../redux/admin/adminSlice";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";

const Marketplace = () => {
  const listings = useSelector(selectAllListings);

  return (
    <>
      <AdminNavbar />
      <div className="marketplace-container">
        <h1>Marketplace Listings</h1>
        <div>
          {listings.map((post) => (
            <GardenerPlantCard
              title={post.plantName}
              price={post.price}
              description={post.description}
              imageSrc={post.images[0]}
              key={post._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
