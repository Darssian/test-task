import { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

const Slider = ({ children, spaceBetween = 30 }) => {
  const sliderRef = useRef(null);

  const breakpoints = {
    375: {},
    600: {},
    1140: {},
  };

  const handlePrev = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="slider-section">
      <div className="slider-section__slider">
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={"auto"}
          loop={true}
          grabCursor={true}
          breakpoints={breakpoints}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="slider"
        >
          {children.map((child, index) => (
            <SwiperSlide key={index} className="slider__slide">
              {child}
            </SwiperSlide>
          ))}
          <div className="slider-section__controls">
            <button
              className={`slider-section__arrow slider-section__arrow--prev `}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <img src="/src/assets/arrow.svg" alt="Previous" />
            </button>
            <button
              className={`slider-section__arrow slider-section__arrow--next `}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <img src="/src/assets/arrow.svg" alt="Next" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
};

export default Slider;
