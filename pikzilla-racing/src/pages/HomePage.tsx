import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/assets/Images/Home Page/Banner.jpg" alt="Pikzilla Racing" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">SPEED. PRECISION. VICTORY.</h1>
            <p className="hero-subtitle">Join Pikzilla Racing on our journey to dominate the track and redefine racing excellence.</p>
            <Link to="/racing" className="hero-button">UPCOMING RACES</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-image">
              <img src="/assets/Images/Home Page/Welcome.jpg" alt="About Pikzilla Racing" />
            </div>
            <div className="welcome-text">
              <h2>WELCOME TO PIKZILLA RACING</h2>
              <p>Founded with a passion for speed and precision, Pikzilla Racing has quickly established itself as a formidable presence in the racing world.</p>
              <p>Our team of dedicated professionals, cutting-edge technology, and relentless pursuit of excellence drives us to push the boundaries of what's possible on the track.</p>
              <p>From our state-of-the-art facilities to our championship-winning drivers, every aspect of Pikzilla Racing is designed with one goal in mind: Victory.</p>
              <Link to="/team" className="hero-button">MEET OUR TEAM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">LATEST NEWS</h2>
          <div className="news-grid">
            {/* News Card 1 */}
            <div className="news-card">
              <div className="news-card-image">
                <img src="/assets/Images/Home Page/New 1.jpg" alt="News 1" />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">Pikzilla Racing Secures Podium Finish</h3>
                <p className="news-card-date">May 1, 2025</p>
                <p className="news-card-excerpt">Our team secured an impressive podium finish at the recent Grand Prix, showcasing our continued dominance in the racing circuit.</p>
                <Link to="/blog" className="news-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* News Card 2 */}
            <div className="news-card">
              <div className="news-card-image">
                <img src="/assets/Images/Home Page/New 2.jpg" alt="News 2" />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">New Partnership Announcement</h3>
                <p className="news-card-date">April 25, 2025</p>
                <p className="news-card-excerpt">Pikzilla Racing is proud to announce a new technical partnership that will revolutionize our approach to racing technology.</p>
                <Link to="/blog" className="news-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* News Card 3 */}
            <div className="news-card">
              <div className="news-card-image">
                <img src="/assets/Images/Home Page/New 3.jpg" alt="News 3" />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">Team Expansion: New Driver Joins</h3>
                <p className="news-card-date">April 15, 2025</p>
                <p className="news-card-excerpt">We're excited to welcome the newest addition to our driving team, bringing fresh talent and perspective to Pikzilla Racing.</p>
                <Link to="/blog" className="news-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* News Card 4 */}
            <div className="news-card">
              <div className="news-card-image">
                <img src="/assets/Images/Home Page/New 4.jpg" alt="News 4" />
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">Behind the Scenes: Car Development</h3>
                <p className="news-card-date">April 5, 2025</p>
                <p className="news-card-excerpt">Take an exclusive look at our engineering team's process as they develop the next generation of racing vehicles.</p>
                <Link to="/blog" className="news-card-link">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
