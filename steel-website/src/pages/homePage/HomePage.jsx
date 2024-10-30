import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./homePage.css"
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons"

const HomePage = () => {
  return (
    <div className="homePage">        
        <section className="slideshow-container">
          <div className="slide fade">
            <img src="/fabrication.jpg" alt="" />
          </div>
          <div className="slide fade">
            <img src="" alt="" />
          </div>
          <div className="slide fade">
            <img src="" alt="" />
          </div>
          {/* Arrow buttons */}
          <FontAwesomeIcon className="slide-arrow prev" icon={faSquareCaretLeft}/>
          <FontAwesomeIcon className="slide-arrow next" icon={faSquareCaretRight}/>
        </section>
    </div>
  )
}

export default HomePage