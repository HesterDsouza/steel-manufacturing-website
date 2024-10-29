import "./homePage.css"

const HomePage = () => {
  return (
    <div className="homePage">        
        <section className="slideshow-container">
          <div className="slide fade"></div>
          <div className="slide fade"></div>
          <div className="slide fade"></div>
          {/* Arrow buttons */}
          <button className="prev"></button>
          <button className="next"></button>
        </section>
    </div>
  )
}

export default HomePage