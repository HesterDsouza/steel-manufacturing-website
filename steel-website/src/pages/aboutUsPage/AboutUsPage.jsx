import SlideShow from "../../components/slideshow/SlideShow"
import "./aboutUsPage.css"

const AboutUsPage = () => {

    const workers = ["/company-members/factory.jpg","/company-members/worker1.jpg","/company-members/worker2.jpg","/company-members/factory2.jpg","/company-members/worker4.jpg","/company-members/worker6.jpg","/company-members/worker7.jpg"];
    const employees = ["/company-members/employee1.jpg", "/company-members/employee2.jpg", "/company-members/employee3.jpg"];

  return (
    <div className="aboutUsPage">
        <section className="hero-section">
            <div className="hero-content">
                <h1>About Us</h1>
                <p>Crafting Excellence in Steel and Beyond</p>
            </div>
        </section>
        <section className="company-overview">
            <h2>Our Story</h2>
            <div className="content-wrapper">
                <div className="image-wrapper">
                    <img src="/new images/fabrication-company-name.jpg" alt="company overview" className="overview-img" />
                </div>
                <div className="text-content">
                    <p>
                        We are Qatar&apos;s leading solutions provider in the steel and construction industry, operating across multiple countries and strategically headquartered in Qatar.<br/> 
                        Dedicated to inclusivity and responsibility, we build for a better society by embodying the values of work ethics, passion, and performance. Through our work, we aim to create spaces and solutions that truly impact lives and connect communities.
                    </p>
                    <p>
                        Our primary goal is to offer clients an excellent and satisfying experience, delivering unique, tailored solutions that make a meaningful difference. By synergizing people and technology, we ensure safer, more collaborative environments, bringing innovation and progressive solutions to every project.
                    </p>
                </div>
            </div>
        </section>
        <section className="team">
            <h2>Our Team & Facility</h2>
            <div className="team-cards">
                <div className="team-card">
                    <img src="/company-members/simon.jpg" alt="Simon Pinto, CEO" />
                    <h3>Mr. Simon Pinto</h3>
                    <p>CEO</p>
                </div>
                <div className="team-card">
                    <img src="/company-members/david.jpg" alt="David, Office Manager" />
                    <h3>Mr. David</h3>
                    <p>Office Manager</p>
                </div>
                <div className="team-card">
                    <img src="/company-members/christyKelly.jpg" alt="Christy Kelly, Company Manager" />
                    <h3>Mr. Christy Kelly</h3>
                    <p>Company Manager</p>
                </div>
            </div>
            <div className="office-slides">
                <div className="factory-workers">
                    <SlideShow images={workers} class_name="about-us"/>
                    <h3>Our Factory and Workers</h3>

                </div>
                <div className="employees">
                    <SlideShow images={employees} class_name="about-us"/>
                    <h3>Our Employees</h3>
                </div>
            </div>
        </section>        
        <section className="goals">
            <h2>Our Mission & Vision</h2>
            <div className="goal-content">
                <div className="goal">
                    <h3>Mission</h3>
                    <div className="image-wrapper">
                        <img src="/mission.jpg" alt="mission" className="goal-img" />
                    </div>
                    <p>To transform spaces with durable, aesthetic, and innovative steel solutions, while fostering sustainable practices and upholding the highest standards of quality.</p>
                </div>
                <div className="goal">
                    <h3>Vision</h3>
                    <div className="image-wrapper">
                        <img src="/vision.jpg" alt="vision" className="goal-img" />
                    </div>
                    <p>To be recognized as the premier steel and decorative solutions provider in the Middle East, renowned for excellence in service, safety, and sustainable innovation.</p>
                </div>
            </div>
        </section>
        <section className="values">
            <h2>Our Values</h2>
            <ul className="values-list">
                <li>
                    <h3>Quality & Excellence</h3>
                    <div className="image-wrapper">
                        <img src="/quality-assaurance.jpg" alt="" className="value-img"/>
                    </div>
                    <p>We strive for precision and excellence in every project, ensuring high standards that our clients can rely on.</p>
                </li>
                <li>
                    <h3>Integrity</h3>
                    <div className="image-wrapper">
                        <img src="/integrity.jpg" alt="" className="value-img"/>
                    </div>
                    <p>We conduct our business with transparency and integrity, fostering trust and long-lasting partnerships.</p>
                </li>
                <li>
                    <h3>Customer Commitment</h3>
                    <div className="image-wrapper">
                        <img src="/customer-commitment.jpg" alt="" className="value-img"/>
                    </div>
                    <p>Our clients&apos; success is our success. We prioritize their needs and provide tailored solutions to meet their goals.</p>
                </li>
                <li>
                    <h3>Innovation</h3>
                    <div className="image-wrapper">
                        <img src="/innovation.jpg" alt="" className="value-img"/>
                    </div>
                    <p>Embracing the latest technologies, we continuously evolve our techniques to deliver cutting-edge solutions.</p>
                </li>
            </ul>
        </section>
        <section className="impact">
            <h2>Our Impact on Society</h2>
            <div className="impact-content">
                <div className="image-wrapper">
                    <img src="/impact.jpg" alt="" className="impact-img" />
                </div>
                <p>
                    Our work contributes meaningfully to society and the environment. Whether we&apos;re creating spaces for education, connecting communities through infrastructure, or building hospital environments conducive to healing, 
                    our purpose remains steadfast: to provide the right solution for a better society. We&apos;re not just a business; we are a responsible organization committed to building for the present and future needs of the communities we serve.
                </p>
            </div>
        </section>
    </div>
  )
}

export default AboutUsPage