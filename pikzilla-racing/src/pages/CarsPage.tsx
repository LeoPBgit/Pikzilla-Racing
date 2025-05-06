import React from 'react';
import { Link } from 'react-router-dom';
import './CarsPage.css';

const CarsPage: React.FC = () => {
  return (
    <div className="cars-page">
      {/* Hero Section */}
      <section className="cars-hero">
        <div className="container">
          <h1 className="cars-hero-title">EXPLORE OUR COLLECTION</h1>
          
          <div className="cars-categories">
            <div className="car-category">
              <h3 className="car-category-title">Track Performance</h3>
              <p className="car-category-description">
                Engineered for maximum speed and handling on the racing circuit, our track cars represent the pinnacle of racing technology.
              </p>
            </div>
            
            <div className="car-category">
              <h3 className="car-category-title">Rally Champions</h3>
              <p className="car-category-description">
                Built to conquer any terrain, our rally vehicles combine durability with precision for off-road excellence.
              </p>
            </div>
            
            <div className="car-category">
              <h3 className="car-category-title">Street Legends</h3>
              <p className="car-category-description">
                Experience the thrill of racing in street-legal vehicles that blend everyday practicality with racing DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="car-divider"></div>

      {/* Featured Car Section */}
      <section className="featured-car">
        <div className="container">
          <div className="featured-car-image">
            <img src="/assets/Images/Car Page/Car.jpg" alt="Featured Racing Car" />
          </div>
          
          <div className="car-gallery">
            <div className="car-gallery-item">
              <img src="/assets/Images/Home Page/New 1.jpg" alt="Car Gallery 1" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Home Page/New 2.jpg" alt="Car Gallery 2" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Home Page/New 3.jpg" alt="Car Gallery 3" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Home Page/New 4.jpg" alt="Car Gallery 4" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Racing Page/Event 1.jpg" alt="Car Gallery 5" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Racing Page/Event 2.jpg" alt="Car Gallery 6" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Racing Page/Event 3.jpg" alt="Car Gallery 7" />
            </div>
            <div className="car-gallery-item">
              <img src="/assets/Images/Racing Page/Event 4.jpg" alt="Car Gallery 8" />
            </div>
          </div>
          
          <div className="car-specs">
            <div>
              <h3 className="car-specs-title">The Thunderbolt</h3>
              <p className="car-specs-description">
                Our flagship racing car, the Thunderbolt combines cutting-edge aerodynamics with a powerful engine to deliver unmatched performance on the track. Developed by our expert engineering team, this vehicle has secured multiple podium finishes in international competitions.
              </p>
              <Link to="/contact" className="collection-car-button">INQUIRE</Link>
            </div>
            
            <div>
              <ul className="specs-list">
                <li className="specs-item">
                  <span className="specs-label">Engine</span>
                  <div className="specs-bar-container">
                    <div className="specs-bar" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="specs-item">
                  <span className="specs-label">Acceleration</span>
                  <div className="specs-bar-container">
                    <div className="specs-bar" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="specs-item">
                  <span className="specs-label">Handling</span>
                  <div className="specs-bar-container">
                    <div className="specs-bar" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="specs-item">
                  <span className="specs-label">Top Speed</span>
                  <div className="specs-bar-container">
                    <div className="specs-bar" style={{ width: '88%' }}></div>
                  </div>
                </li>
                <li className="specs-item">
                  <span className="specs-label">Braking</span>
                  <div className="specs-bar-container">
                    <div className="specs-bar" style={{ width: '92%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Car Collection Section */}
      <section className="car-collection">
        <div className="container">
          <h2 className="car-collection-title">OUR FLEET</h2>
          
          <div className="car-collection-grid">
            {/* Car 1 */}
            <div className="collection-car">
              <div className="collection-car-image">
                <img src="/assets/Images/Home Page/New 1.jpg" alt="Thunderbolt GT" />
              </div>
              <div className="collection-car-info">
                <h3 className="collection-car-name">Thunderbolt GT</h3>
                <p className="collection-car-type">Track Performance</p>
                <div className="collection-car-specs">
                  <p className="collection-car-spec">Engine: <span>V8 Twin Turbo</span></p>
                  <p className="collection-car-spec">Power: <span>650 HP</span></p>
                  <p className="collection-car-spec">0-60 mph: <span>2.8s</span></p>
                  <p className="collection-car-spec">Top Speed: <span>205 mph</span></p>
                </div>
                <Link to="/contact" className="collection-car-button">DETAILS</Link>
              </div>
            </div>
            
            {/* Car 2 */}
            <div className="collection-car">
              <div className="collection-car-image">
                <img src="/assets/Images/Home Page/New 2.jpg" alt="Cyclone RS" />
              </div>
              <div className="collection-car-info">
                <h3 className="collection-car-name">Cyclone RS</h3>
                <p className="collection-car-type">Rally Champion</p>
                <div className="collection-car-specs">
                  <p className="collection-car-spec">Engine: <span>Inline-4 Turbo</span></p>
                  <p className="collection-car-spec">Power: <span>450 HP</span></p>
                  <p className="collection-car-spec">0-60 mph: <span>3.2s</span></p>
                  <p className="collection-car-spec">Top Speed: <span>180 mph</span></p>
                </div>
                <Link to="/contact" className="collection-car-button">DETAILS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarsPage;
