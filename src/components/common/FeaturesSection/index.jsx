import React, { useEffect } from "react";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import waterPlant from "../../../assets/images/FeaturesImages/automatedWater.jpg";
import sensorPlant from "../../../assets/images/FeaturesImages/sensorPlant.webp";
import pots from "../../../assets/images/FeaturesImages/pots.webp";
import apricot from "../../../assets/images/FeaturesImages/apricot.webp";
import dried from "../../../assets/images/FeaturesImages/dried.webp";
import bergs from "../../../assets/images/FeaturesImages/bergs.webp";

import gsap from "gsap";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  useEffect(() => {
    gsap.to(".features-grid", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.utils
      .toArray(".features-left-column .features-item")
      .forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        });
      });

    gsap.utils
      .toArray(".features-right-column .features-item")
      .forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        });
      });

    const images = document.querySelectorAll(".features-image-container");
    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        gsap.to(image.querySelector("img"), {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      image.addEventListener("mouseleave", () => {
        gsap.to(image.querySelector("img"), {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    gsap.utils.toArray(".features-arrow").forEach((arrow) => {
      gsap.to(arrow, {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="features-container">
      <h1>What Makes Us Special</h1>
      <div className="features-grid">
        <div className="features-column features-left-column">
          {/* 1 */}
          <div className="features-item">
            <div className="features-text-content">
              <div>
                <h3>Stay Informed, Stay in Control</h3>
                <span className="features-arrow">
                  <ArrowRight />
                </span>
              </div>
              <p>
                Monitor your plant data from your phone remotely wherever you
                are. Keep your plants healthy and thriving.
              </p>
            </div>
            <div className="features-image-container">
              <img src={waterPlant} alt="Plant watering system" />
            </div>
          </div>
          {/* 2 */}
          <div className="features-item">
            <div className="features-text-content">
              <div>
                <span className="features-arrow">
                  <ArrowUp />
                </span>
                <h3>Don't Forget to Water your Plants</h3>
              </div>
              <p>
                Traveling frequently and struggling to care for your plants?
                With just a click, you can water them remotely and keep them
                thriving!
              </p>
            </div>
            <div className="features-image-container">
              <img src={dried} alt="Plant watering system" />
            </div>
          </div>
          {/* 3 */}
          <div className="features-item">
            <div className="features-text-content">
              <div>
                <h3>Your Marketplace for Plants and Flowers</h3>
                <span className="features-arrow">
                  <ArrowRight />
                </span>
              </div>
              <p>
                Buy and sell plants and flowers easily with our integrated
                marketplace. Gardeners can showcase their harvest, and buyers
                can find the perfect blooms in just a few clicks!
              </p>
            </div>
            <div className="features-image-container">
              <img src={apricot} alt="Plant watering system" />
            </div>
            <div className="features-text-content">
              <div>
                <span className="features-arrow">
                  <ArrowUp />
                </span>
                <h3>Bring Beauty to Your Home</h3>
              </div>
              <p>
                Transform your space with stunning flowers and plants from our
                marketplace. We help you make your home a vibrant and welcoming
                sanctuary!
              </p>
            </div>
          </div>
        </div>

        <div className="features-column features-right-column">
          {/* 4 */}
          <div className="features-item">
            <div className="features-image-container">
              <img src={sensorPlant} alt="Plant watering system" />
            </div>
            <div className="features-text-content">
              <div>
                <span className="features-arrow">
                  <ArrowLeft />
                </span>
                <h3>Find Your Flower with Ease</h3>
              </div>
              <p>
                Want to buy a flower but struggling to identify its name? Our
                built-in flower recognition feature has you covered—just snap a
                picture, and it's that simple!
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="features-item">
            <div className="features-image-container">
              <img src={bergs} alt="Plant watering system" />
            </div>
            <div className="features-text-content">
              <div>
                <span className="features-arrow">
                  <ArrowDown />
                </span>
                <h3>Share the Love with Flowers</h3>
              </div>
              <p>
                Send beautiful flowers to your loved ones, complete with
                personalized cards, balloons, and chocolates. Brighten their day
                with a thoughtful gesture!
              </p>
            </div>
          </div>
          {/* 6 */}
          <div className="features-item">
            <div className="features-image-container">
              <img src={pots} alt="Plant watering system" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
