import React, { useEffect, useRef } from "react";
import UserNavbar from "../../../components/common/UserNavbar";
import Footer from "../../../components/common/Footer";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserHomePage = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(titleRef.current, {
      yPercent: 250,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(subTitleRef.current, {
      yPercent: 900,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <UserNavbar />
      <section ref={heroRef} className="hero-section">
        <div ref={imageRef} className="hero-image" />
        <h1 ref={titleRef}>PÉTALE</h1>
        <h2 ref={subTitleRef}>Experience the Pétale Island</h2>
      </section>
      <section
        style={{ height: "100vh", backgroundColor: "#be8d86" }}
      ></section>
      <Footer />
    </div>
  );
};

export default UserHomePage;
