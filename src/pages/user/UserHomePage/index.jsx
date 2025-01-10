import React, { useEffect, useRef } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../../../components/base/HeroSection";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";
import CartButton from "../../../components/base/CartButton";

gsap.registerPlugin(ScrollTrigger);

const UserHomePage = () => {
  const textRef = useRef(null);
  const { loading, trendingPosts } = useSelector((state) => state.marketplace);

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
          <h1>Welcome to Pétale, where nature meets technology</h1>
          <p>
            Discover our carefully curated collection of plants and flowers,
            each ready to bring life to your space. Whether you're an
            experienced plant parent or just starting your green journey, our
            selection caters to all. What makes us unique? Our innovative plant
            recognition feature brings the power of AI to your fingertips.
            Simply snap a photo of any flower that catches your eye, and let our
            technology reveal its identity. From garden discoveries to planning
            your next purchase, identifying flowers has never been easier.
            Explore our collection, learn about new species, and transform your
            space into a natural sanctuary. Every plant has a story - let us
            help you find yours.
          </p>
        </div>
      </section>
      <section className="trending-flowers">
        <h1>Trending Plants</h1>
        <div>
          {/* {trendingPosts.map((post) => (
            <GardenerPlantCard
              key={post._id}
              imageSrc={post.images[0]}
              title={post.plantName}
              description={post.description}
              price={post.price}
            >
              <CartButton />
            </GardenerPlantCard>
          ))} */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserHomePage;
