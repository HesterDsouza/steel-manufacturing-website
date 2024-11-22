import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slideShow.css";
import PropTypes from "prop-types";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const SlideShow = ({ images, class_name = "" }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
          setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(intervalRef.current);
      }, [images.length]);

    const changeSlide = (n) => {
        setSlideIndex((prevIndex) =>
          (prevIndex + n + images.length) % images.length);
      }
  return (
    <section className={`slideshow-container ${class_name}`}>
        {images.map((src, index) => (
          <div key={index} className={`slide ${index === slideIndex ? "active" : ""}`}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <FontAwesomeIcon className="slide-arrow prev" icon={faChevronLeft} onClick={() => changeSlide(-1)} aria-label="Previous Slide" role="button"/>
        <FontAwesomeIcon className="slide-arrow next" icon={faChevronRight} onClick={() => changeSlide(1)} aria-label="Next Slide" role="button"/>
      </section>
  )
}

SlideShow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    class_name: PropTypes.string
}

export default SlideShow