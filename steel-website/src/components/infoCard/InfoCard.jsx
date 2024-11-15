import { useEffect, useRef, useState } from "react";
import "./infoCard.css";
import PropTypes from "prop-types";

const InfoCard = ({ images, title, description, onClick, class_name = "" }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className={`card ${class_name}`} onClick={onClick}>
      <div className="image-wrapper">
        {images.map((src, index) => (
          <div key={index} className={`slide ${index === activeSlide ? "active" : ""}`}>
            <img src={src} alt={`${title} Slide ${index + 1}`} />
            <p className="caption">{description[index]}</p>
          </div>
        ))}
      </div>
      <h3>{title}</h3>
    </div>
  )
}

InfoCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  class_name: PropTypes.string
}

export default InfoCard