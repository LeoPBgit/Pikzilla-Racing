# Pikzilla Racing Technical Context

## Technology Stack

The Pikzilla Racing website is built using the following technologies:

### Frontend Framework
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript
- **React Router**: For client-side routing and navigation

### Styling
- **CSS**: Using component-specific CSS files and CSS variables
- **Responsive Design**: Media queries and flexible layouts for all device sizes

### Build Tools
- **Vite**: A modern frontend build tool that provides a faster and leaner development experience
- **ESLint**: For code linting and enforcing coding standards
- **TypeScript Compiler**: For type checking and transpilation

### Asset Management
- **Static Assets**: Images, icons, and other media stored in the public directory
- **SVG**: Vector graphics for logos and icons

## Development Environment

### Required Tools
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for JavaScript
- **Git**: Version control system
- **Code Editor**: Visual Studio Code recommended with extensions for React, TypeScript, and ESLint

### Setup Instructions
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

### Project Structure
The project follows a feature-based structure with clear separation of concerns:

```
pikzilla-racing/
├── public/            # Static assets
├── src/               # Source code
│   ├── assets/        # Internal assets
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Key Dependencies

### Core Dependencies
- `react`: ^19.1.0
- `react-dom`: ^19.1.0
- `react-router-dom`: ^6.22.0

### Development Dependencies
- `@vitejs/plugin-react`: ^4.4.1
- `typescript`: ~5.8.3
- `vite`: ^6.3.5
- `eslint`: ^9.25.0
- `typescript-eslint`: ^8.30.1

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

### Build Process
1. TypeScript compilation and type checking
2. Vite bundling and optimization
3. Asset optimization (minification, compression)
4. Generation of static files

### Hosting Options
- **Static Hosting**: GitHub Pages, Netlify, Vercel
- **CDN**: For improved global performance
- **CI/CD**: Automated deployment pipeline

## Asset Management

### Image Guidelines
- Use optimized formats (WebP where supported, with JPEG/PNG fallbacks)
- Responsive images with appropriate sizes for different viewports
- Lazy loading for images below the fold
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
  --color-primary: #FF4C29;
  --color-secondary: #082032;
  --color-tertiary: #2C394B;
  --color-background: #334756;
  --color-text: #FFFFFF;
  --color-text-secondary: #CCCCCC;
  --color-accent: #FF7F50;
  --color-border: #4F5D6A;
  
  /* Typography */
  --font-family-primary: 'Montserrat', sans-serif;
  --font-family-secondary: 'Roboto', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
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
- Component-specific CSS files with the same name as the component
- Descriptive class names that reflect component structure

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px
- Large Desktop: > 1200px

## TypeScript Configuration

The project uses TypeScript with strict type checking:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Performance Considerations

### Code Splitting
- Route-based code splitting for reduced initial load time
- Lazy loading of components not needed for initial render

### Asset Optimization
- Image compression and appropriate sizing
- SVG optimization
- Font subsetting where applicable

### Rendering Optimization
- Memoization of expensive computations
- Preventing unnecessary re-renders
- Virtual DOM reconciliation optimization

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
- Server-side rendering for improved SEO and performance
- Progressive Web App capabilities
- Integration with a headless CMS for content management
- Analytics integration for user behavior tracking
- A/B testing framework for UI optimization

### Scalability Considerations
- Component library development for consistent UI
- Micro-frontend architecture for larger scale
- Internationalization support
- Theme switching capabilities
