import React, { useEffect, useRef } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../../../components/base/HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";
import CartButton from "../../../components/base/CartButton";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../redux/slices/cartSlice";
import { Camera } from "lucide-react";
import OutlinedButton from "../../../components/base/OutlinedButton";
import FlowerUploadDemo from "../../../assets/images/FlowerUploadDemo";

gsap.registerPlugin(ScrollTrigger);

const UserHomePage = () => {
  const textRef = useRef(null);
  const { loading, trendingPosts } = useSelector((state) => state.marketplace);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom-=200",
        end: "top center",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (loading) return <CircularProgress color="success" />;

  return (
    <div>
      <UserNavbar />
      <HeroSection />
      <section className="welcome-section">
        <div ref={textRef}>
          <h1>Discover the Beauty of Flowers</h1>
          <p>
            Take a photo of any flower and instantly learn its name, species,
            and fascinating details.
          </p>
          <OutlinedButton
            borderColor="white"
            color="white"
            label="Identify Flowers"
            endIcon={<Camera />}
            onClick={() => navigate("/user/predict-flower")}
          />
          <FlowerUploadDemo />
        </div>
      </section>
      <section className="trending-flowers">
        <h1>Trending Plants</h1>
        <div>
          {trendingPosts.map((post) => (
            <GardenerPlantCard
              key={post._id}
              imageSrc={post.images[0]}
              title={post.plantName}
              description={post.description}
              price={post.price}
              onClick={() => {
                dispatch(
                  addItemToCart({
                    id: post._id,
                    name: post.plantName,
                    price: post.price,
                    quantity: 1,
                    image: post.image,
                  })
                );
              }}
            >
              <CartButton />
            </GardenerPlantCard>
          ))}
        </div>
        <PinkButtonRound
          onClick={() => {
            navigate("/user/marketplace");
          }}
          label={"View More"}
        />
      </section>
      <Footer />
    </div>
  );
};

export default UserHomePage;
