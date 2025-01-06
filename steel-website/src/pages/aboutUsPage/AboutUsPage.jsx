import SlideShow from "../../components/slideshow/SlideShow"
import "./aboutUsPage.css"
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/heroSection/HeroSection";
import { Helmet } from "react-helmet-async";

const AboutUsPage = () => {

    const workers = ["/company-members/factory.jpg","/company-members/worker1.jpg","/company-members/worker2.jpg","/company-members/factory2.jpg","/company-members/worker4.jpg","/company-members/worker6.jpg","/company-members/worker7.jpg"];
    const employees = ["/company-members/employee1.jpg", "/company-members/employee2.jpg", "/company-members/employee3.jpg"];

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
        <HeroSection title="About Us" subTitle="Crafting Excellence in Steel and Beyond"/>
        <section className="company-overview">
            <h2 tabIndex={0}>Our Story</h2>
            <div className="content-wrapper">
                <div className="image-wrapper">
                    <img tabIndex={0} src="/new images/fabrication-company-name.jpg" alt="company overview" className="overview-img" />
                </div>
                <div className="text-content">
                    <p tabIndex={0}>
                        We are Qatar&apos;s leading solutions provider in the steel and construction industry, operating across multiple countries and strategically headquartered in Qatar.<br/> 
                        Dedicated to inclusivity and responsibility, we build for a better society by embodying the values of work ethics, passion, and performance. Through our work, we aim to create spaces and solutions that truly impact lives and connect communities.
                    </p>
                    <p tabIndex={0}>
                        Our primary goal is to offer clients an excellent and satisfying experience, delivering unique, tailored solutions that make a meaningful difference. By synergizing people and technology, we ensure safer, more collaborative environments, bringing innovation and progressive solutions to every project.
                    </p>
                </div>
            </div>
        </section>
        <section className="team">
            <h2 tabIndex={0}>Our Team & Facility</h2>
            <div className="team-cards">
                <div className="team-card">
                    <img tabIndex={0} src="/company-members/simon.jpg" alt="Simon Pinto, CEO" />
                    <h3 tabIndex={0}>Mr. Simon Pinto</h3>
                    <p tabIndex={0}>CEO</p>
                </div>
                <div className="team-card">
                    <img tabIndex={0} src="/company-members/david.jpg" alt="David, Office Manager" />
                    <h3 tabIndex={0}>Mr. David</h3>
                    <p tabIndex={0}>Office Manager</p>
                </div>
                <div className="team-card">
                    <img tabIndex={0} src="/company-members/christyKelly.jpg" alt="Christy Kelly, Company Manager" />
                    <h3 tabIndex={0}>Mr. Christy Kelly</h3>
                    <p tabIndex={0}>Company Manager</p>
                </div>
            </div>
            <div className="office-slides">
                <div className="factory-workers">
                    <h3 tabIndex={0}>Our Factory and Workers</h3>
                    <SlideShow images={workers} class_name="about-us"/>
                </div>
                <div className="employees">
                    <h3 tabIndex={0}>Our Employees</h3>
                    <SlideShow images={employees} class_name="about-us"/>
                </div>
            </div>
        </section>        
        <section className="goals">
            <h2 tabIndex={0}>Our Mission & Vision</h2>
            <div className="goal-content">
                <div className="goal">
                    <h3 tabIndex={0}>Mission</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/mission.jpg" alt="mission" className="goal-img" />
                    </div>
                    <p tabIndex={0}>To transform spaces with durable, aesthetic, and innovative steel solutions, while fostering sustainable practices and upholding the highest standards of quality.</p>
                </div>
                <div className="goal">
                    <h3 tabIndex={0}>Vision</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/vision.jpg" alt="vision" className="goal-img" />
                    </div>
                    <p tabIndex={0}>To be recognized as the premier steel and decorative solutions provider in the Middle East, renowned for excellence in service, safety, and sustainable innovation.</p>
                </div>
            </div>
        </section>
        <section className="values">
            <h2 tabIndex={0}>Our Values</h2>
            <ul className="values-list">
                <li>
                    <h3 tabIndex={0}>Quality & Excellence</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/quality-assaurance.jpg" alt="" className="value-img"/>
                    </div>
                    <p tabIndex={0}>We strive for precision and excellence in every project, ensuring high standards that our clients can rely on.</p>
                </li>
                <li>
                    <h3 tabIndex={0}>Integrity</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/integrity.jpg" alt="" className="value-img"/>
                    </div>
                    <p tabIndex={0}>We conduct our business with transparency and integrity, fostering trust and long-lasting partnerships.</p>
                </li>
                <li>
                    <h3 tabIndex={0}>Customer Commitment</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/customer-commitment.jpg" alt="" className="value-img"/>
                    </div>
                    <p tabIndex={0}>Our clients&apos; success is our success. We prioritize their needs and provide tailored solutions to meet their goals.</p>
                </li>
                <li>
                    <h3 tabIndex={0}>Innovation</h3>
                    <div className="image-wrapper">
                        <img tabIndex={0} src="/innovation.jpg" alt="" className="value-img"/>
                    </div>
                    <p tabIndex={0}>Embracing the latest technologies, we continuously evolve our techniques to deliver cutting-edge solutions.</p>
                </li>
            </ul>
        </section>
        <section className="impact">
            <h2 tabIndex={0}>Our Impact on Society</h2>
            <div className="impact-content">
                <div className="image-wrapper">
                    <img tabIndex={0} src="/impact.jpg" alt="" className="impact-img" />
                </div>
                <p tabIndex={0}>
                    Our work contributes meaningfully to society and the environment. Whether we&apos;re creating spaces for education, connecting communities through infrastructure, or building hospital environments conducive to healing, 
                    our purpose remains steadfast: to provide the right solution for a better society. We&apos;re not just a business; we are a responsible organization committed to building for the present and future needs of the communities we serve.
                </p>
            </div>
        </section>
        <Contact />
    </div>
  )
}

export default AboutUsPage