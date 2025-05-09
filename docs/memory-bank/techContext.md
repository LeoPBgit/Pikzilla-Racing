# Pikzilla Racing Technical Context

## Technology Stack

The Pikzilla Racing website is built using the following technologies:

### Frontend Technologies
- **HTML5**: For structure and content
- **CSS3**: For styling and layout
- **JavaScript**: For interactivity and dynamic elements

### Styling
- **CSS**: Using global CSS files and CSS variables
- **Responsive Design**: Media queries and flexible layouts for all device sizes

### Asset Management
- **Static Assets**: Images, icons, and other media stored in the assets directory
- **SVG**: Vector graphics for logos and icons

## Development Environment

### Required Tools
- **Git**: Version control system
- **Code Editor**: Visual Studio Code recommended with extensions for HTML, CSS, and JavaScript
- **Web Browser**: Chrome, Firefox, or Edge with developer tools

### Setup Instructions
1. Clone the repository
2. Open the project in a code editor
3. View the website by opening HTML files directly in a browser
4. For local development, use a simple HTTP server if needed

### Project Structure
The project follows a clean, organized structure with all files in the root directory:

```
Pikzilla-Racing/
├── index.html         # Home page
├── team.html          # Team page
├── cars.html          # Cars page
├── racing.html        # Racing page
├── blog.html          # Blog page
├── contact.html       # Contact page
├── assets/            # Static assets organized by type
│   ├── Icons/         # Icon files
│   ├── Images/        # Image files
│   ├── Logo/          # Logo files
│   └── Vectors/       # Vector graphics
├── css/               # CSS stylesheets
│   ├── styles.css     # Main stylesheet
│   └── variables.css  # CSS variables
├── js/                # JavaScript files
│   └── main.js        # Main JavaScript file
└── docs/              # Documentation and development resources
    ├── memory-bank/   # Project documentation
    ├── visual-references/ # Design references
    └── figma-token.txt # Figma access token (gitignored)
```

> **Important**: All development work should be done directly in the root directory. The GitHub Pages site is configured to serve from the root directory of the master branch.

## Technical Constraints

### Browser Support
The website is designed to support modern browsers:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance Score: > 90
- Mobile Responsiveness: Fully responsive on all device sizes

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast

## Deployment Strategy

### GitHub Pages Deployment
The Pikzilla Racing website is deployed using GitHub Pages:

1. **Configuration**: 
   - GitHub Pages is set up to serve from the root directory of the master branch
   - URL: https://leopbgit.github.io/Pikzilla-Racing/

2. **Deployment Process**:
   - Make changes to files in the root directory
   - Commit and push changes to the master branch
   - GitHub Pages automatically rebuilds and deploys the site
   - Changes are typically visible within a few minutes

3. **Important Guidelines**:
   - Always work directly in the root directory
   - Never create duplicate copies of files in subdirectories
   - Ensure all asset paths are relative to the root directory
   - Test locally before pushing changes

### Hosting Considerations
- **HTTPS**: GitHub Pages provides HTTPS by default
- **CDN**: GitHub Pages includes CDN capabilities for improved global performance
- **Caching**: Be aware of browser and CDN caching when testing changes

## Asset Management

### Image Guidelines
- Use optimized formats (WebP where supported, with JPEG/PNG fallbacks)
- Responsive images with appropriate sizes for different viewports
- Lazy loading for images below the fold using native loading="lazy" attribute
- Maintain aspect ratios to prevent layout shifts

### Icon System
- SVG icons for scalability and performance
- Consistent styling and sizing
- Accessibility considerations (aria-labels, etc.)

## CSS Architecture

### CSS Variables
CSS variables are defined in `variables.css` and include:

```css
:root {
  /* Color Palette */
  --color-primary: #FF2C01; /* Official Red */
  --color-secondary: #E9E9E9; /* Official Light Grey */
  --color-tertiary: #E9E9E9; /* Official Light Grey */
  --color-background: #FFFFFF; /* Official White */
  --color-text: #000000; /* Official Black */
  --color-text-secondary: #000000; /* Official Black, slightly transparent for secondary text */
  --color-accent: #FF7301; /* Official Orange */
  --color-border: #E9E9E9; /* Official Light Grey */
  
  /* Typography */
  --font-family-primary: 'Manrope', sans-serif;
  --font-family-secondary: 'Manrope', sans-serif;
  
  /* Font Sizes based on Figma Text Styles */
  --font-size-button: 0.75rem;    /* 12px */
  --font-size-menu: 0.75rem;      /* 12px */
  --font-size-tag: 0.75rem;       /* 12px */
  --font-size-paragraph-2: 0.9375rem; /* 15px */
  --font-size-paragraph-1: 1rem;      /* 16px */
  --font-size-subheading-3: 1.125rem;  /* 18px */
  --font-size-subheading-2: 1.25rem;   /* 20px */
  --font-size-subheading-1: 1.875rem;  /* 30px */
  --font-size-heading: 2.5rem;         /* 40px */
  --font-size-headline: 4.375rem;      /* 70px */
  
  /* Legacy font sizes (keeping for backward compatibility) */
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.5rem;   /* 40px */
  --font-size-5xl: 4.375rem; /* 70px */
  
  /* Line Heights */
  --line-height-auto: 1.5;
  --line-height-headline: 80px;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 2.5rem;
  --spacing-3xl: 3rem;
  --spacing-4xl: 4rem;
  
  /* Other design tokens */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}
```

### Naming Conventions
- BEM (Block, Element, Modifier) methodology for class names
- Descriptive class names that reflect element structure and purpose
- Consistent naming patterns across all pages

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px
- Large Desktop: > 1200px

## JavaScript Usage

The project uses vanilla JavaScript for enhanced functionality:

```javascript
// Example JavaScript Pattern
document.addEventListener('DOMContentLoaded', function() {
  // Initialize navigation
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Form validation
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
  }
  
  function validateForm(event) {
    // Form validation logic
  }
});
```

## Performance Considerations

### HTML Optimization
- Minimal HTML structure
- Proper use of semantic elements
- Efficient document structure

### Asset Optimization
- Image compression and appropriate sizing
- SVG optimization
- Font subsetting where applicable
- Minification of CSS and JavaScript for production

### Loading Optimization
- Critical CSS inlined in the head
- Deferred loading of non-critical JavaScript
- Preloading of critical assets
- Proper use of caching headers

## Security Considerations

### Content Security
- Proper sanitization of user inputs
- Protection against XSS attacks
- Secure handling of external links

### Data Protection
- No sensitive data stored in client-side code
- Proper form validation
- HTTPS enforcement

## Future Technical Considerations

### Potential Enhancements
- Progressive Web App capabilities
- Integration with a backend for dynamic content
- Analytics integration for user behavior tracking
- Enhanced JavaScript functionality
- Animation and transition improvements

### Scalability Considerations
- Modular CSS architecture for easier maintenance
- Structured JavaScript for extensibility
- Internationalization support
- Theme switching capabilities
