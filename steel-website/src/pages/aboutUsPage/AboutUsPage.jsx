import SlideShow from "../../components/slideshow/SlideShow"
import "./aboutUsPage.css"
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/heroSection/HeroSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {

    const workers = ["/company-members/factory.jpg","/company-members/worker1.jpg","/company-members/worker2.jpg","/company-members/factory2.jpg","/company-members/worker4.jpg","/company-members/worker6.jpg","/company-members/worker7.jpg"];
    const employees = ["/company-members/employee1.jpg", "/company-members/employee2.jpg", "/company-members/employee3.jpg"];
    const members = ["/company-members/simon.jpg","/company-members/david.jpg","/company-members/christyKelly.jpg"]

    const {t} = useTranslation("pages");

  return (
    <div className="aboutUsPage">
        <Helmet>
            <title>About Us - Crafting Excellence in Steel and Beyond</title>
            <meta
            name="description"
            content="Learn about our journey, mission, vision, and values. We specialize in innovative steel solutions, transforming spaces with quality and sustainability."
            />
            <meta
            name="keywords"
            content="about us, steel manufacturing, stainless steel solutions, innovative design, sustainability, Qatar steel industry"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="About Us - Crafting Excellence in Steel and Beyond" />
            <meta
            property="og:description"
            content="Discover our mission to provide durable and innovative steel solutions while fostering sustainability and excellence in the steel industry."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content="/logo2.png" />
        </Helmet>
        <HeroSection title={t("aboutUsPage.hero.title")} subTitle={t("aboutUsPage.hero.subtitle")}/>
        <section className="company-overview">
            <h2 tabIndex={0}>{t("aboutUsPage.story.title")}</h2>
            <div className="content-wrapper">
                <div className="image-wrapper">
                    <img tabIndex={0} src="/new images/fabrication-company-name.jpg" alt="company overview" className="overview-img" />
                </div>
                <div className="text-content">
                    <p tabIndex={0}>
                        {t("aboutUsPage.story.para1")}
                    </p>
                    <p tabIndex={0}>
                        {t("aboutUsPage.story.para2")}
                    </p>
                </div>
            </div>
        </section>
        <section className="team">
            <h2 tabIndex={0}>{t("aboutUsPage.team.title")}</h2>
            <div className="team-cards">
                {t("aboutUsPage.team.members", {returnObjects : true}).map((member, index) => (
                    <div key={index} className="team-card">
                        <img tabIndex={0} src={members[index]} alt="Simon Pinto, CEO" />
                        <h3 tabIndex={0}>{member.name}</h3>
                        <p tabIndex={0}>{member.role}</p>
                    </div>
                ))}
            </div>
            <div className="office-slides">
                <div className="factory-workers">
                    <h3 tabIndex={0}>{t("aboutUsPage.team.sections.factory")}</h3>
                    <SlideShow images={workers} class_name="about-us"/>
                </div>
                <div className="employees">
                    <h3 tabIndex={0}>{t("aboutUsPage.team.sections.factory")}</h3>
                    <SlideShow images={employees} class_name="about-us"/>
                </div>
            </div>
        </section>        
        <section className="goals">
            <h2 tabIndex={0}>{t("aboutUsPage.goals.title")}</h2>
            <div className="goal-content">
                <div className="goal">
                    <h3 tabIndex={0}>{t("aboutUsPage.goals.mission.title")}</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/mission.jpg" alt="mission" className="goal-img" />
                    </div>
                    <p tabIndex={0}>{t("aboutUsPage.goals.mission.text")}</p>
                </div>
                <div className="goal">
                    <h3 tabIndex={0}>{t("aboutUsPage.goals.vision.title")}</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/vision.jpg" alt="vision" className="goal-img" />
                    </div>
                    <p tabIndex={0}>{t("aboutUsPage.goals.vision.text")}</p>
                </div>
            </div>
        </section>
        <section className="values">
            <h2 tabIndex={0}>{t("aboutUsPage.values.title")}</h2>
            <ul className="values-list">
                {t("aboutUsPage.values.items", { returnObjects: true }).map((value, index) => (
                    <li key={index}>
                        <h3 tabIndex={0}>{value.title}</h3>
                        <div className="image-wrapper">
                        <img tabIndex={0} src={`/value_img_${index + 1}.jpg`} alt={value.title} className="value-img" />
                        </div>
                        <p tabIndex={0}>{value.description}</p>
                    </li>
                ))}
            </ul>
        </section>
        <section className="impact">
            <h2 tabIndex={0}>{t("aboutUsPage.impact.title")}</h2>
            <div className="impact-content">
                <div className="image-wrapper">
                    <img tabIndex={0} src="/impact.jpg" alt="" className="impact-img" />
                </div>
                <p tabIndex={0}>
                    {t("aboutUsPage.impact.description")}
                </p>
            </div>
        </section>
        <Contact />
    </div>
  )
}

export default AboutUsPage