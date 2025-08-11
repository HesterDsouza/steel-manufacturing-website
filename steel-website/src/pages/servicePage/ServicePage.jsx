import "./servicePage.css"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/heroSection/HeroSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const ServicePage = () => {

  const audioRef = useRef(null);
  const videoRefs = useRef([]);
  const [isMuted, setIsMuted] = useState({})

  const {t} = useTranslation("pages")
  
  useEffect(()=>{
    const audio = audioRef.current;
    const videoRefCurrent = videoRefs.current;
    
    if(audio){
      audio.volume = 0.2;
      audio.loop = true;
      audio.muted = true
    }

    videoRefCurrent.forEach((video) => {
      if(video) {
        video.muted = true
        video.play().catch(() => {})
      }
    })
  },[]);
  
  const handleMuteToggle = (index) => {
    const audio = audioRef.current;
    const video = videoRefs.current[index];
    
    if(video && audio){
      const currentlyMuted = isMuted[index] ?? true
      const newMutedState = !currentlyMuted

      video.muted = true
      audio.muted = newMutedState

      if(!newMutedState){
        audio.play().catch((err) => {
          console.error("Audio playback issue: ", err)
        })
      } else{
        audio.pause()
      }

      setIsMuted((prev) => ({...prev, [index]: newMutedState}))
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
      <HeroSection title={t("servicesPage.hero.title")} subTitle={t("servicesPage.hero.subtitle")}/>
      <section className="expertise">
        <h2 tabIndex={0}>{t("servicesPage.expertise.heading")}</h2>
        <p tabIndex={0}>
          {t("servicesPage.expertise.description")}
        </p>
        <ul>
          {t("servicesPage.expertise.items", {returnObjects: true}).map((item, index) => (
            <li tabIndex={0} key={index}>
              <strong>{item.title}:</strong>&nbsp;&nbsp;{item.description}
            </li>
          ))}
        </ul>
      </section>
      <section className="video-showcase">
        <h2 tabIndex={0}>{t("servicesPage.videos.heading")}</h2>
        <p tabIndex={0}>{t("servicesPage.videos.description")}</p>
        <div className="video-grid">
          {[
            { videoSrc: "/videos/container.mp4" },
            { videoSrc: "/videos/crafting.mp4" },
          ].map((item, index) => (
            <div className="video-container" key={index}>
              <div className="video-player">
                <video
                  tabIndex={0}
                  ref={(vid) => (videoRefs.current[index] = vid)}
                  muted
                  autoPlay
                  loop
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <FontAwesomeIcon
                  className="video-btn"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleMuteToggle(index)}
                  onClick={() => handleMuteToggle(index)}
                  icon={isMuted[index] ? faVolumeHigh : faVolumeOff}
                />
                <audio ref={audioRef}>
                  <source src="/audios/bg-tunes3.mp3" type="audio/mp3" />
                </audio>
              </div>
              <p tabIndex={0}>{t(`servicesPage.videos.items.${index}.text`)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="commitment">
        <h2 tabIndex={0}>{t("servicesPage.commitment.heading")}</h2>
        <p tabIndex={0}>
          {t("servicesPage.commitment.para1")}
        </p>
        <p tabIndex={0}>
          {t("servicesPage.commitment.para2")}
        </p>
      </section>
      <Contact />
    </div>
  )
}

export default ServicePage