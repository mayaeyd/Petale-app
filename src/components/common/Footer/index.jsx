import React from "react";
import PinkButtonRound from "../../base/PinkButtonRound";
import LogoNoText from "../../../assets/images/LogoNoText";
import "./style.css";
import FooterInput from "../../base/FooterInput";
import PinkButtonSquared from "../../base/PinkButtonSquared";
import FooterFlower from "../../../assets/images/FooterFlower";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-sec-1">
        <div className="logo-subtitle">
          <div className="subtitle">
            <h2>PÉTALE</h2>
            <p>Grow Together</p>
          </div>
          <LogoNoText />
        </div>
        <p>Nurture. Bloom. Connect.</p>
        <PinkButtonRound
          label="Buy Flowers"
          endIcon={<ArrowForward sx={{ color: "#BE7D86" }} />}
        />
        <div className="social-media-sec">
          <p>Connect With Us</p>
          <div className="social-media-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="footer-sec-2">
        <div className="subscription-sec">
          <FooterInput />
          <PinkButtonSquared label="SUBSCRIBE NOW" />
        </div>
        <p>
          Stay updated with the latest flowers, exclusive deals, and gardening
          tips delivered straight to your inbox. Join our community of plant
          lovers today—We promise not to spam!
        </p>
      </div>
      <div className="footer-sec-3">
        <div className="footer-links-sec">
          <h2>Know More</h2>
          <div className="footer-links">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Marketplace</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="footer-links-sec">
          <h2>Our Project</h2>
          <div className="footer-links">
            <ul>
              <li>IoT Features</li>
              <li onClick={()=>navigate("/user/predict-flower")}>Flower Recognition</li>
              <li>How it Works</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-image">
        <FooterFlower />
      </div>
    </footer>
  );
};

export default Footer;
