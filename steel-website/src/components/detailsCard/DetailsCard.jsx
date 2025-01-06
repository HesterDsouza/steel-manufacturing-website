import PropTypes from "prop-types"
import "./detailsCard.css"

const DetailsCard = ({ class_name = "", collections}) => {
  return (
    <div className={`cards-container ${class_name}`}>
        {collections.map((collection, index) => (
            <div key={index} className="card">
              <img tabIndex={0} src={collection.image} alt={collection.title} className="card-img"/>
              <div className="card-content">
                <h3 tabIndex={0}>{collection.title}</h3>
                <p tabIndex={0}>{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

DetailsCard.propTypes = {
    class_name: PropTypes.string,
    collections: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DetailsCard