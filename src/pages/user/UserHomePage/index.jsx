import React, { useEffect, useRef } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroimage from "../../../assets/images/HeroImage/hero-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const UserHomePage = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(imageRef.current, {
      yPercent: 50,
      ease: "none",
    }).to(
      titleRef.current,
      {
        yPercent: 100,
        ease: "none",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div>
      <UserNavbar />
      <section
        ref={heroRef}
        style={{
          height: "90vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={imageRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroimage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#E4E5E7",
          }}
        />
        <h1
          ref={titleRef}
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            top: "20%",
            color: "black",
          }}
        >
          PETALE
        </h1>
      </section>
      <section
        style={{ height: "100vh", backgroundColor: "#be8d86" }}
      ></section>
      <Footer />
    </div>
  );
};

export default UserHomePage;
