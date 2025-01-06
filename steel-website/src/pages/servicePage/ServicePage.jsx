import "./servicePage.css"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/heroSection/HeroSection";
import { Helmet } from "react-helmet-async";

const ServicePage = () => {

  const audioRef = useRef(null);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState({});
  
  useEffect(()=>{
    const audio = audioRef.current;
    const videoRefCurrent = videoRefs.current;
    
    if(audio){
      audio.volume = 0.2;
      audio.loop = true;
    }

    videoRefCurrent.forEach((video, index) => {
      if(video) {
        video.addEventListener("ended", () => handleVideoEnded(index))
      }
    })

    return () => {
      videoRefCurrent.forEach((video, index) => {
        if(video) {
          video.removeEventListener("ended", () => handleVideoEnded(index))
        }
      })
    }
  },[]);

  const handleVideoEnded = (index) => {
    setIsPlaying((prev) => ({...prev, [index]: false}))
  }

  const handlePlayPause = (index) => {
    const audio = audioRef.current;
    const video = videoRefs.current[index];

    if(video && audio){
      if(video.paused){
        video.play();
        audio.play().catch((err)=>{
          console.error("Audio playback issue: ", err)
        })
        setIsPlaying((prev) => ({...prev, [index]: true}));
      }
      else{
        video.pause();
        // audio.pause();
        setIsPlaying((prev) => {
          const updatedState = {...prev, [index]: false};
          const anyStillPlaying = Object.values(updatedState).some((playing) => playing);
          if(!anyStillPlaying) audio.pause();
          return updatedState;
        });
      }
    }
  }

  return (
    <div className="servicePage">
      <Helmet>
        <title>Services - Expert Metal Crafting & Engineering</title>
        <meta
          name="description"
          content="Explore our exceptional metal crafting and engineering services, including stainless steel, galvanized steel, and more. Precision and quality in every project."
        />
        <meta
          name="keywords"
          content="metal crafting, engineering services, stainless steel, galvanized steel, decorative steel, design prototyping, industrial installation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Services - Expert Metal Crafting & Engineering" />
        <meta
          property="og:description"
          content="Discover our wide range of services, from industrial metal crafting to custom design and installation. Tailored solutions for all your needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/logo2.png" />
      </Helmet>
      <HeroSection title="Services" subTitle="Precision, quality, and craftsmanship in every project, tailored to bring your vision to life."/>
      <section className="expertise">
        <h2 tabIndex={0}>Our Expertise</h2>
        <p tabIndex={0}>
          At Future Structures, we bring decades of experience to the table, ensuring every project is executed with utmost precision, professionalism, and care. 
          Our expertise spans a diverse range of services and materials, allowing us to cater to a wide array of client needs. Whether you are seeking functional solutions or artistic designs, 
          we have the capabilities to deliver exceptional results that exceed expectations.
        </p>
        <ul>
          <li tabIndex={0}><strong>Stainless Steel:</strong> Renowned for its durability and sleek appearance, stainless steel is ideal for railings, decorative pieces, and custom architectural elements. Our team is skilled in crafting bespoke solutions that marry functionality and style.</li>
          <li tabIndex={0}><strong>Black Iron Steel:</strong> Combining strength with versatility, black iron steel is perfect for robust structures, industrial projects, and decorative accents with a contemporary edge.</li>
          <li tabIndex={0}><strong>Decorative Steel:</strong> We excel in creating intricate designs and patterns on steel, turning simple materials into works of art that enhance interior and exterior spaces.</li>
          <li tabIndex={0}><strong>Galvanized Steel:</strong> Our galvanized steel services provide corrosion-resistant solutions for long-lasting installations, ensuring reliability and performance in any environment.</li>
          <li tabIndex={0}><strong>Aluminum & Brass:</strong> Lightweight yet durable, aluminum and brass are ideal for projects requiring a touch of elegance, including custom fittings, panels, and artistic decor.</li>
          <li tabIndex={0}><strong>Design & Prototyping:</strong> From concept to reality, our design and prototyping services help clients visualize their projects before production, ensuring precision and alignment with their vision.</li>
          <li tabIndex={0}><strong>Paint & Powder Coating:</strong> Our finishing services provide a wide range of color and texture options, enhancing the aesthetics and durability of metal surfaces.</li>
          <li tabIndex={0}><strong>Assembly & Installation:</strong> We provide end-to-end solutions, including seamless assembly and installation, ensuring every project is delivered with impeccable precision and attention to detail.</li>
        </ul>
      </section>
      <section className="video-showcase">
        <h2 tabIndex={0}>Craftsmanship in Action</h2>
        <p tabIndex={0}>Witness our skilled artisans bring steel to life through precision, dedication, and expertise.</p>
        <div className="video-grid">
          {[
            {videoSrc: "/videos/container.mp4", text: "Skillful Assembly"},
            {videoSrc: "/videos/crafting.mp4", text: "Skilled Craftsmanship"},
          ].map((item, index) => (
            <div className="video-container" key={index}>
              <div className="video-player">
                <video tabIndex={0} ref={(vid) => (videoRefs.current[index] = vid)} muted >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <FontAwesomeIcon className="video-btn" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handlePlayPause(index)} onClick={() => handlePlayPause(index)} icon={ isPlaying[index] ? faPause : faPlay}/>
                <audio ref={audioRef}>
                  <source src="/audios/bg-tunes3.mp3" type="audio/mp3"/>
                </audio>
              </div>
              <p tabIndex={0}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="commitment">
        <h2 tabIndex={0}>Our Commitment to Excellence</h2>
        <p tabIndex={0}>
          Our commitment to excellence is at the heart of everything we do. We work closely with our clients to understand their unique requirements, translating ideas into reality with unparalleled craftsmanship. 
          From large-scale industrial installations to bespoke decorative projects, our team is dedicated to delivering results that not only meet but exceed expectations.
        </p>
        <p tabIndex={0}>
          We pride ourselves on staying ahead of industry trends, adopting the latest technologies and techniques to ensure our services remain cutting-edge. 
          Our team includes highly skilled craftsmen, engineers, and designers who collaborate seamlessly to produce extraordinary outcomes.
        </p>
      </section>
      <Contact />
    </div>
  )
}

export default ServicePage