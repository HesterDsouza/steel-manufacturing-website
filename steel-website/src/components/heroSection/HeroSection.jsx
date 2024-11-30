import PropTypes from "prop-types"
import "./heroSection.css"

const HeroSection = ({title, subTitle}) => {
  return (
    <section className="hero-section">
        <div className="hero-content">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    </section>
  )
}

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

export default HeroSection