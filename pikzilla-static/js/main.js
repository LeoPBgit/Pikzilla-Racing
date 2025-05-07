document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').replace('.html', '');
    if (currentPage === linkPage || (currentPage === '' && linkPage === 'index')) {
      link.classList.add('active');
    }
  });
  
  // Contact form validation
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const messageInput = contactForm.querySelector('textarea[name="message"]');
      
      // Reset previous error messages
      const errorMessages = contactForm.querySelectorAll('.error-message');
      errorMessages.forEach(error => error.remove());
      
      // Validate name
      if (!nameInput.value.trim()) {
        displayError(nameInput, 'Please enter your name');
        isValid = false;
      }
      
      // Validate email
      if (!emailInput.value.trim()) {
        displayError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }
      
      // Validate message
      if (!messageInput.value.trim()) {
        displayError(messageInput, 'Please enter your message');
        isValid = false;
      }
      
      if (isValid) {
        // In a real implementation, you would send the form data to a server
        // For now, we'll just show a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        
        contactForm.reset();
        contactForm.appendChild(successMessage);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  }
  
  // Gallery image lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').getAttribute('src');
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${imgSrc}" alt="Gallery Image">
          <span class="lightbox-close">&times;</span>
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      const closeButton = lightbox.querySelector('.lightbox-close');
      closeButton.addEventListener('click', function() {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
      });
      
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        }
      });
    });
  });
  
  // Helper functions
  function displayError(input, message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = 'var(--font-size-sm)';
    errorMessage.style.marginTop = 'var(--spacing-xs)';
    
    input.parentNode.appendChild(errorMessage);
    input.style.borderColor = 'red';
    
    input.addEventListener('input', function() {
      errorMessage.remove();
      input.style.borderColor = '';
    }, { once: true });
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add CSS class for lightbox
const style = document.createElement('style');
style.textContent = `
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-index-modal);
  }
  
  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }
  
  .lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
  
  .lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
  
  .success-message {
    background-color: #4CAF50;
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    margin-top: var(--spacing-md);
  }
`;

document.head.appendChild(style);
