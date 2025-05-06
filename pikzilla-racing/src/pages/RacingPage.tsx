import React from 'react';
import { Link } from 'react-router-dom';
import './RacingPage.css';

const RacingPage: React.FC = () => {
  return (
    <div className="racing-page">
      {/* Hero Section */}
      <section className="racing-hero">
        <div className="racing-hero-background">
          <img src="/assets/Images/Racing Page/Hero.jpg" alt="Pikzilla Racing" />
        </div>
        <div className="container">
          <div className="racing-hero-content">
            <h1 className="racing-hero-title">WHERE PASSION MEETS THE TRACK</h1>
            <p className="racing-hero-subtitle">
              Experience the thrill of racing with Pikzilla Racing. From international circuits to local tracks, 
              we bring our passion for speed and precision to every event.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="experience-title">EXPERIENCE THE THRILL</h2>
          <p className="experience-description">
            Join us at our upcoming racing events to witness the power, precision, and passion that defines Pikzilla Racing. 
            From the roar of the engines to the skill of our drivers, every race is an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section">
        <div className="container">
          <h2 className="calendar-title">RACING CALENDAR</h2>
          <p className="calendar-subtitle">Check out our upcoming events and join us at the track</p>
          
          <div className="events-list">
            {/* Event 1 */}
            <div className="event-card">
              <div className="event-image">
                <img src="/assets/Images/Racing Page/Event 1.jpg" alt="Grand Prix" />
              </div>
              <div className="event-details">
                <h3 className="event-title">Monaco Grand Prix</h3>
                <p className="event-location">Circuit de Monaco, Monte Carlo</p>
                <p className="event-description">
                  Join us for the prestigious Monaco Grand Prix, where our team will compete on one of the most challenging circuits in the world.
                </p>
                <a href="#" className="event-button">DETAILS</a>
              </div>
              <div className="event-date">
                <span className="event-month">May</span>
                <span className="event-day">26</span>
                <span className="event-year">2025</span>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="event-card">
              <div className="event-image">
                <img src="/assets/Images/Racing Page/Event 2.jpg" alt="Endurance Race" />
              </div>
              <div className="event-details">
                <h3 className="event-title">24 Hours of Le Mans</h3>
                <p className="event-location">Circuit de la Sarthe, Le Mans, France</p>
                <p className="event-description">
                  Experience the ultimate test of endurance as our team competes in the legendary 24-hour race at Le Mans.
                </p>
                <a href="#" className="event-button">DETAILS</a>
              </div>
              <div className="event-date">
                <span className="event-month">Jun</span>
                <span className="event-day">15</span>
                <span className="event-year">2025</span>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="event-card">
              <div className="event-image">
                <img src="/assets/Images/Racing Page/Event 3.jpg" alt="Rally Championship" />
              </div>
              <div className="event-details">
                <h3 className="event-title">World Rally Championship</h3>
                <p className="event-location">Various Locations, Finland</p>
                <p className="event-description">
                  Watch our rally team tackle the challenging terrain of Finland in this exciting World Rally Championship event.
                </p>
                <a href="#" className="event-button">DETAILS</a>
              </div>
              <div className="event-date">
                <span className="event-month">Jul</span>
                <span className="event-day">28</span>
                <span className="event-year">2025</span>
              </div>
            </div>
            
            {/* Event 4 */}
            <div className="event-card">
              <div className="event-image">
                <img src="/assets/Images/Racing Page/Event 4.jpg" alt="Formula 1" />
              </div>
              <div className="event-details">
                <h3 className="event-title">Italian Grand Prix</h3>
                <p className="event-location">Autodromo Nazionale Monza, Italy</p>
                <p className="event-description">
                  Feel the speed at the historic Monza circuit as our team competes in one of the fastest races of the season.
                </p>
                <a href="#" className="event-button">DETAILS</a>
              </div>
              <div className="event-date">
                <span className="event-month">Sep</span>
                <span className="event-day">07</span>
                <span className="event-year">2025</span>
              </div>
            </div>
            
            {/* Event 5 */}
            <div className="event-card">
              <div className="event-image">
                <img src="/assets/Images/Racing Page/Event 5.jpg" alt="Street Circuit" />
              </div>
              <div className="event-details">
                <h3 className="event-title">Singapore Grand Prix</h3>
                <p className="event-location">Marina Bay Street Circuit, Singapore</p>
                <p className="event-description">
                  Experience the excitement of night racing at the spectacular Marina Bay Street Circuit in Singapore.
                </p>
                <a href="#" className="event-button">DETAILS</a>
              </div>
              <div className="event-date">
                <span className="event-month">Oct</span>
                <span className="event-day">19</span>
                <span className="event-year">2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <div className="container">
          <h2 className="past-events-title">PAST EVENTS</h2>
          
          <div className="past-events-grid">
            {/* Past Event 1 */}
            <div className="past-event-card">
              <div className="past-event-image">
                <img src="/assets/Images/Racing Page/Past Event 1.jpg" alt="Past Event 1" />
              </div>
              <div className="past-event-content">
                <h3 className="past-event-title">Australian Grand Prix</h3>
                <p className="past-event-date">March 15, 2025</p>
                <p className="past-event-description">
                  Our team secured a podium finish at the season-opening race in Melbourne.
                </p>
                <a href="#" className="past-event-link">View Results →</a>
              </div>
            </div>
            
            {/* Past Event 2 */}
            <div className="past-event-card">
              <div className="past-event-image">
                <img src="/assets/Images/Racing Page/Past Event 2.jpg" alt="Past Event 2" />
              </div>
              <div className="past-event-content">
                <h3 className="past-event-title">Bahrain Grand Prix</h3>
                <p className="past-event-date">March 29, 2025</p>
                <p className="past-event-description">
                  A challenging race in the desert conditions of Bahrain tested our team's resilience.
                </p>
                <a href="#" className="past-event-link">View Results →</a>
              </div>
            </div>
            
            {/* Past Event 3 */}
            <div className="past-event-card">
              <div className="past-event-image">
                <img src="/assets/Images/Racing Page/Past Event 3.jpg" alt="Past Event 3" />
              </div>
              <div className="past-event-content">
                <h3 className="past-event-title">Chinese Grand Prix</h3>
                <p className="past-event-date">April 12, 2025</p>
                <p className="past-event-description">
                  Our team demonstrated exceptional strategy in changing weather conditions in Shanghai.
                </p>
                <a href="#" className="past-event-link">View Results →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RacingPage;
