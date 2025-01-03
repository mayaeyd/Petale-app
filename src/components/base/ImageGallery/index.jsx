import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";
import "./style.css";

const ImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery-section">
      {/* Main Swiper */}
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, Thumbs]}
        effect="fade"
        className="main-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Plant ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumb-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
