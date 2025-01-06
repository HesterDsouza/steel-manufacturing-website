import PropTypes from "prop-types"
import "./heroSection.css"

const HeroSection = ({title, subTitle}) => {
  return (
    <section className="hero-section">
        <div className="hero-content">
            <h1 tabIndex={0}>{title}</h1>
            <p tabIndex={0}>{subTitle}</p>
        </div>
    </section>
  )
}

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

export default HeroSection