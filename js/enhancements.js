// Enhanced functionality for Pikzilla Racing website

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Enhanced Image Loading with Lazy Loading
  function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => img.classList.add('loaded'));
    }
  }
  
  // 2. Enhanced Form Validation with Better UX
  function enhanceFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        // Real-time validation feedback
        input.addEventListener('blur', function() {
          validateField(this);
        });
        
        input.addEventListener('input', function() {
          clearFieldError(this);
        });
      });
      
      // Enhanced form submission
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
          if (!validateField(input)) {
            isValid = false;
          }
        });
        
        if (isValid) {
          submitForm(this);
        }
      });
    });
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');
    
    clearFieldError(field);
    
    if (isRequired && !value) {
      showFieldError(field, 'This field is required');
      return false;
    }
    
    if (fieldType === 'email' && value && !isValidEmail(value)) {
      showFieldError(field, 'Please enter a valid email address');
      return false;
    }
    
    if (fieldType === 'tel' && value && !isValidPhone(value)) {
      showFieldError(field, 'Please enter a valid phone number');
      return false;
    }
    
    showFieldSuccess(field);
    return true;
  }
  
  function showFieldError(field, message) {
    field.classList.add('error');
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
  }
  
  function showFieldSuccess(field) {
    field.classList.add('success');
  }
  
  function clearFieldError(field) {
    field.classList.remove('error', 'success');
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPhone(phone) {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
  }
  
  function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      showFormSuccess(form);
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.classList.remove('loading');
    }, 2000);
  }
  
  function showFormSuccess(form) {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <div class="success-icon">✓</div>
      <h3>Message Sent Successfully!</h3>
      <p>Thank you for contacting Pikzilla Racing. We'll get back to you within 48 hours.</p>
    `;
    
    form.style.display = 'none';
    form.parentNode.appendChild(successMessage);
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      successMessage.remove();
    }, 5000);
  }
  
  // 3. Enhanced Navigation with Active State Management
  function enhanceNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      
      if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
      
      // Add smooth hover effects
      link.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
          this.style.transform = 'translateY(-2px)';
        }
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }
  
  // 4. Enhanced Car Slider with Touch Support
  function enhanceCarSlider() {
    const slider = document.querySelector('.car-slider');
    if (!slider) return;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Touch events for mobile
    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Mouse events for desktop
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseUp);
    
    function handleTouchStart(e) {
      startX = e.touches[0].clientX;
      isDragging = true;
    }
    
    function handleTouchMove(e) {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    }
    
    function handleTouchEnd() {
      if (!isDragging) return;
      isDragging = false;
      
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          document.getElementById('nextCar')?.click();
        } else {
          document.getElementById('prevCar')?.click();
        }
      }
    }
    
    function handleMouseDown(e) {
      startX = e.clientX;
      isDragging = true;
      slider.style.cursor = 'grabbing';
    }
    
    function handleMouseMove(e) {
      if (!isDragging) return;
      currentX = e.clientX;
    }
    
    function handleMouseUp() {
      if (!isDragging) return;
      isDragging = false;
      slider.style.cursor = 'grab';
      
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          document.getElementById('nextCar')?.click();
        } else {
          document.getElementById('prevCar')?.click();
        }
      }
    }
  }
  
  // 5. Enhanced Scroll Animations
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .team-member-card, .event');
    
    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      animatedElements.forEach(el => {
        el.classList.add('animate-ready');
        animationObserver.observe(el);
      });
    }
  }
  
  // 6. Enhanced Search with Keyboard Navigation
  function enhanceSearch() {
    const searchOverlay = document.querySelector('.search-overlay');
    if (!searchOverlay) return;
    
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchResults = searchOverlay.querySelector('.search-results');
    
    let selectedIndex = -1;
    
    searchInput.addEventListener('keydown', function(e) {
      const resultItems = searchResults.querySelectorAll('.search-result-item');
      
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          selectedIndex = Math.min(selectedIndex + 1, resultItems.length - 1);
          updateSelection(resultItems);
          break;
        case 'ArrowUp':
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, -1);
          updateSelection(resultItems);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && resultItems[selectedIndex]) {
            const link = resultItems[selectedIndex].querySelector('a');
            if (link) link.click();
          }
          break;
      }
    });
    
    function updateSelection(items) {
      items.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
      });
    }
  }
  
  // 7. Performance Monitoring
  function initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would integrate with a real performance monitoring service
      console.log('Performance monitoring initialized');
    }
    
    // Monitor page load time
    window.addEventListener('load', function() {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    });
  }
  
  // Initialize all enhancements
  initLazyLoading();
  enhanceFormValidation();
  enhanceNavigation();
  enhanceCarSlider();
  initScrollAnimations();
  enhanceSearch();
  initPerformanceMonitoring();
  
  // Add CSS for enhanced animations
  const enhancementStyles = document.createElement('style');
  enhancementStyles.textContent = `
    .animate-ready {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .field-error {
      color: #dc3545;
      font-size: var(--font-size-sm);
      margin-top: var(--spacing-xs);
    }
    
    .form-success {
      background: linear-gradient(135deg, #28a745, #20c997);
      color: white;
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-md);
      text-align: center;
    }
    
    .success-icon {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
    }
    
    .search-result-item.selected {
      background-color: var(--color-secondary);
    }
    
    input.error, textarea.error {
      border-color: #dc3545;
      box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
    }
    
    input.success, textarea.success {
      border-color: #28a745;
      box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.25);
    }
    
    .car-slider {
      cursor: grab;
    }
    
    .car-slider:active {
      cursor: grabbing;
    }
  `;
  
  document.head.appendChild(enhancementStyles);
});
