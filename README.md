# Pikzilla Racing

A professional racing team website built with HTML, CSS, and JavaScript, showcasing the team's achievements, vehicles, upcoming races, and team members.

![Pikzilla Racing Logo](assets/Logo/Pikzilla%20Logo.svg)

## Project Overview

Pikzilla Racing is a professional racing team website designed to serve as a central hub for fans, sponsors, and potential team members. The website features a modern, responsive design with a racing-themed dark color scheme and dynamic elements that convey speed and precision.

### Key Features

- **Modern, Responsive Design**: Looks great on all device sizes (mobile, tablet, desktop)
- **Racing-Themed Design Language**: Dark theme with orange accents to convey speed and excitement
- **Comprehensive Content Structure**: Six key sections organized logically for easy navigation
- **High-Quality Visual Elements**: Professional images of cars, team members, and racing events
- **Clean Code Architecture**: Maintainable code with consistent styling and organization

## Pages

1. **Home Page**: Landing page with hero section, welcome area, and news cards
2. **Team Page**: Team member profiles, organization structure, and gallery
3. **Cars Page**: Vehicle showcase with specifications and details
4. **Racing Page**: Upcoming and past racing events
5. **Blog Page**: News articles and stories from the racing world
6. **Contact Page**: Contact form and information

## Directory Structure

- **Root Directory**: Main website implementation
  - HTML files for each page (index.html, team.html, etc.)
  - `assets/`: Static assets organized by type
    - `Images/`: Photographs and raster graphics
    - `Icons/`: UI icons and symbols
    - `Logo/`: Brand logos in various formats
    - `Vectors/`: Vector graphics and illustrations
  - `css/`: Stylesheets
    - `styles.css`: Main stylesheet
    - `variables.css`: CSS variables for theming
  - `js/`: JavaScript files
    - `main.js`: Main JavaScript functionality
  - `docs/`: Documentation and development resources
    - `memory-bank/`: Project documentation
    - `visual-references/`: Design references for each page
    - `figma-token.txt`: Figma access token (gitignored)

> **Note**: All development should be done directly in the root directory. The site is deployed from the root directory via GitHub Pages.

## Deployment

The Pikzilla Racing website is deployed using GitHub Pages:

- **Configuration**: GitHub Pages is set up to serve the site from the root directory of the master branch
- **Workflow**:
  1. Make changes to files in the root directory
  2. Commit and push changes to the master branch
  3. GitHub Pages automatically rebuilds and deploys the site
  4. Changes are typically visible within a few minutes at [https://leopbgit.github.io/Pikzilla-Racing/](https://leopbgit.github.io/Pikzilla-Racing/)
- **Important**: Always work directly in the root directory to ensure changes are properly deployed

## Technologies Used

- **HTML5**: For structure and content
- **CSS3**: For styling and layout with variables for theming
- **JavaScript**: For interactivity and dynamic elements

## Getting Started

### Prerequisites

- Any modern web browser
- A code editor (Visual Studio Code recommended)

### Viewing the Website

1. Clone the repository:
   ```
   git clone https://github.com/LeoPBgit/Pikzilla-Racing.git
   cd Pikzilla-Racing
   ```

2. Open any HTML file in your browser:
   ```
   open index.html
   ```

3. For local development with live reloading, you can use any simple HTTP server.

## Project Documentation

Detailed documentation about the project can be found in the `docs/memory-bank/` directory:

- `projectbrief.md`: Project requirements and goals
- `productContext.md`: User personas and problem statement
- `systemPatterns.md`: Architecture and design patterns
- `techContext.md`: Technical details and constraints
- `activeContext.md`: Current focus and recent changes
- `progress.md`: Project progress and status

## Design System

The project uses a consistent design system with CSS variables for theming:

- **Color Palette**: Modern theme with red and orange accents
  - Primary: #FF2C01 (Official Red)
  - Secondary: #E9E9E9 (Official Light Grey)
  - Tertiary: #E9E9E9 (Official Light Grey)
  - Background: #FFFFFF (Official White)
  - Text: #000000 (Official Black)
  - Accent: #FF7301 (Official Orange)
  - Border: #E9E9E9 (Official Light Grey)

- **Typography**:
  - Font Family: Manrope (all weights from 200-800)
  - Text Styles from Figma:
    - Headline: 70px/80px (Bold)
    - Heading: 40px/Auto (Bold)
    - Subheading 1: 30px/Auto (Semibold)
    - Subheading 2: 20px/Auto (Semibold)
    - Subheading 3: 18px/Auto (Medium)
    - Paragraph 1: 16px/Auto (Regular)
    - Paragraph 2: 15px/Auto (Regular)
    - Menu: 12px/Auto (Regular/Bold)
    - Button: 12px/Auto (Medium)
    - Tag: 12px/Auto (Medium)

- **Spacing System**: 
  - Based on a 4px grid
  - Section vertical padding: 120px top and bottom for main content sections
  - Image Style: No rounded corners on content images (flat edges)

## Screenshots

Screenshots of each page can be found in the `docs/visual-references/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design team for providing visual references and assets
- Racing team management for content and feedback
