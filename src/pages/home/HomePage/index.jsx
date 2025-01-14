import React from "react";
import HeroSection from "../../../components/base/HeroSection";
import GuestNavbar from "../../../components/common/GuestNavbar";
import whiteLily from "../../../assets/images/Frame11.png";
import tulip from "../../../assets/images/Frame 126.png";
import "./style.css";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const flowers = [
    {
      id: 1,
      name: "Lilium Candidum L.",
      image: whiteLily,
      description:
        "With its elegant white blooms and sweet fragrance, the Lilium Candidum L. symbolizes purity and renewal, thriving in well-drained soil.",
      category: "From Lilies ...",
    },
    {
      id: 2,
      name: "Lavender",
      image: tulip,
      description:
        "Known for its vibrant colors, graceful shape, and aromatic scent, the Lavender blooms in spring, symbolizing perfect love.",
      category: "... to Tulips",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <GuestNavbar />
      <HeroSection />
      <div className="guest-trending-flowers">
        <h1>Meet our trending flowers</h1>

        <div className="guest-flowers-container">
          {flowers.map((flower, index) => (
            <div
              key={flower.id}
              className={`guest-flower-item ${
                index % 2 === 1 ? "reverse" : ""
              }`}
            >
              <div className="guest-flower-image">
                <img src={flower.image} alt={flower.name} />
              </div>

              <div className="guest-flower-content">
                <p className="guest-category">{flower.category}</p>
                <h2>{flower.name}</h2>
                <p className="guest-description">{flower.description}</p>
                <PinkButtonRound
                  label="Buy Flower"
                  color="white"
                  fontFamily="Kobe Regular"
                  endIcon={<ArrowRight color="white" />}
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
