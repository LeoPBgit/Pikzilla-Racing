import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-background">
          <img src="/assets/Images/Blog News/Hero Area.jpg" alt="Pikzilla Racing Blog" />
        </div>
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">STORIES FROM THE GARAGE, THE TRACK, AND BEYOND</h1>
          </div>
        </div>
      </section>

      {/* Blog Intro Section */}
      <section className="blog-intro">
        <div className="container">
          <div className="blog-intro-content">
            <div className="blog-intro-image">
              <img src="/assets/Images/Blog News/New 1.jpg" alt="Blog Introduction" />
            </div>
            <div>
              <h2 className="blog-intro-title">THE PIKZILLA RACING BLOG</h2>
              <p className="blog-intro-description">
                Welcome to the official blog of Pikzilla Racing. Here, we share insights from our team, behind-the-scenes looks at our operations, 
                technical deep dives into our vehicles, and stories from the racing world. Whether you're a racing enthusiast, a technical expert, 
                or simply curious about the world of motorsport, you'll find something interesting in our regularly updated content.
              </p>
              <p className="blog-intro-description">
                Our team of writers includes engineers, drivers, and racing experts who bring their unique perspectives to every article. 
                Dive in and explore the fascinating world of Pikzilla Racing through our stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="featured-stories">
        <div className="container">
          <h2 className="featured-stories-title">FEATURED STORIES</h2>
          
          <div className="blog-grid">
            {/* Blog Card 1 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Event 1.jpg" alt="Blog Post 1" />
                <span className="blog-card-category">Racing</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">The Evolution of Racing Technology</h3>
                <p className="blog-card-date">May 1, 2025</p>
                <p className="blog-card-excerpt">
                  Explore how racing technology has evolved over the decades and how these innovations have influenced consumer vehicles.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* Blog Card 2 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Event 2.jpg" alt="Blog Post 2" />
                <span className="blog-card-category">Engineering</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">Aerodynamics in Modern Racing</h3>
                <p className="blog-card-date">April 25, 2025</p>
                <p className="blog-card-excerpt">
                  A deep dive into the critical role of aerodynamics in modern racing and how it affects vehicle performance.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* Blog Card 3 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Event 3.jpg" alt="Blog Post 3" />
                <span className="blog-card-category">Team</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">Meet Our New Lead Engineer</h3>
                <p className="blog-card-date">April 18, 2025</p>
                <p className="blog-card-excerpt">
                  Get to know our new lead engineer and learn about their vision for the future of Pikzilla Racing.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* Blog Card 4 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Event 4.jpg" alt="Blog Post 4" />
                <span className="blog-card-category">Strategy</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">Race Day Strategy: Behind the Scenes</h3>
                <p className="blog-card-date">April 10, 2025</p>
                <p className="blog-card-excerpt">
                  An inside look at how our team develops and executes race day strategies for maximum performance.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* Blog Card 5 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Event 5.jpg" alt="Blog Post 5" />
                <span className="blog-card-category">Technology</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">The Future of Electric Racing</h3>
                <p className="blog-card-date">April 5, 2025</p>
                <p className="blog-card-excerpt">
                  Examining the growing trend of electric racing and what it means for the future of motorsport.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
            
            {/* Blog Card 6 */}
            <div className="blog-card">
              <div className="blog-card-image">
                <img src="/assets/Images/Racing Page/Past Event 1.jpg" alt="Blog Post 6" />
                <span className="blog-card-category">Interview</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">Interview with Our Champion Driver</h3>
                <p className="blog-card-date">March 28, 2025</p>
                <p className="blog-card-excerpt">
                  An exclusive interview with our champion driver about their journey, challenges, and future aspirations.
                </p>
                <Link to="#" className="blog-card-link">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="popular-categories">
        <div className="container">
          <h2 className="popular-categories-title">EXPLORE BY CATEGORY</h2>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Racing</h3>
                <p className="category-card-count">24 Articles</p>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Engineering</h3>
                <p className="category-card-count">18 Articles</p>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Technology</h3>
                <p className="category-card-count">15 Articles</p>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Team</h3>
                <p className="category-card-count">12 Articles</p>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Strategy</h3>
                <p className="category-card-count">9 Articles</p>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-card-content">
                <h3 className="category-card-title">Interviews</h3>
                <p className="category-card-count">7 Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
