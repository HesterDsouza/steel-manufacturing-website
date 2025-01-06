import { useEffect, useRef, useState } from "react";
import "./infoCard.css";
import PropTypes from "prop-types";

const InfoCard = ({ images, title, description, onClick, onKeyDown, class_name = "" }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className={`card ${class_name}`} onClick={onClick} onKeyDown={onKeyDown}>
      <div className="image-wrapper">
        {images.map((src, index) => (
          <div key={index} className={`slide ${index === activeSlide ? "active" : ""}`}>
            <img tabIndex={0} src={src} alt={`${title} Slide ${index + 1}`} />
            <p tabIndex={0} className="caption">{description[index]}</p>
          </div>
        ))}
      </div>
      <h3 tabIndex={0}>{title}</h3>
    </div>
  )
}

InfoCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  class_name: PropTypes.string
}

export default InfoCard