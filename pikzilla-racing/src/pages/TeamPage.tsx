import React from 'react';
import { Link } from 'react-router-dom';
import './TeamPage.css';

const TeamPage: React.FC = () => {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/Images/Team Page/Hero.jpg" alt="Pikzilla Racing Team" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">THE FORCE BEHIND PIKZILLA RACING</h1>
            <p className="hero-description">
              Our team is composed of passionate individuals dedicated to pushing the boundaries of racing excellence. 
              From our skilled drivers to our innovative engineers, every member plays a crucial role in our success.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="organization-section">
        <div className="container">
          <h2 className="organization-title">OUR ORGANIZATION</h2>
          <div className="organization-chart">
            {/* Organization chart content would go here */}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <div className="container">
          <h2 className="team-members-title">BEHIND THE WHEEL</h2>
          <div className="team-members-grid">
            {/* Team Member 1 */}
            <div className="team-member-card">
              <div className="team-member-image">
                <img src="/assets/Images/Team Page/Chris-Gurko.jpg" alt="Chris Gurko" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Chris Gurko</h3>
                <p className="team-member-role">Team Principal</p>
                <p className="team-member-bio">
                  With over 20 years of experience in motorsport management, Chris leads our team with vision and determination.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member-card">
              <div className="team-member-image">
                <img src="/assets/Images/Team Page/Ezra-Gurko.jpg" alt="Ezra Gurko" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Ezra Gurko</h3>
                <p className="team-member-role">Lead Driver</p>
                <p className="team-member-bio">
                  A natural talent behind the wheel, Ezra has secured multiple podium finishes and continues to push our cars to their limits.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member-card">
              <div className="team-member-image">
                <img src="/assets/Images/Team Page/Micah-Gurko.jpg" alt="Micah Gurko" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Micah Gurko</h3>
                <p className="team-member-role">Chief Engineer</p>
                <p className="team-member-bio">
                  The mastermind behind our vehicle performance, Micah's innovative approach to engineering has revolutionized our racing strategy.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-member-card">
              <div className="team-member-image">
                <img src="/assets/Images/Team Page/Chris-Gurko.jpg" alt="Alex Johnson" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Alex Johnson</h3>
                <p className="team-member-role">Technical Director</p>
                <p className="team-member-bio">
                  With a keen eye for detail and a passion for precision, Alex ensures that our vehicles are always in peak condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="team-gallery">
        <div className="container">
          <h2 className="team-gallery-title">BECOME PART OF THE PIKZILLA RACING</h2>
          <p className="team-gallery-description">
            Join us on our journey to racing excellence. Experience the thrill of the track and the camaraderie of a team dedicated to pushing boundaries.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/assets/Images/Team Page/Gallery 1.jpg" alt="Team Gallery 1" />
            </div>
            <div className="gallery-item">
              <img src="/assets/Images/Team Page/Gallery 2.jpg" alt="Team Gallery 2" />
            </div>
            <div className="gallery-item">
              <img src="/assets/Images/Team Page/Gallery 3.jpg" alt="Team Gallery 3" />
            </div>
            <div className="gallery-item">
              <img src="/assets/Images/Team Page/Gallery 4.jpg" alt="Team Gallery 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team">
        <div className="container">
          <h2 className="join-team-title">JOIN OUR TEAM</h2>
          <p className="join-team-description">
            We're always looking for talented individuals who share our passion for racing and innovation. 
            Whether you're a skilled engineer, an experienced mechanic, or a racing enthusiast, there might be a place for you on our team.
          </p>
          <Link to="/contact" className="join-button">CONTACT US</Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
