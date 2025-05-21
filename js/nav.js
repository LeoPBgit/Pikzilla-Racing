document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    let activeLink = document.querySelector('.nav-link.active');

    function updateUnderline(element) {
        const rect = element.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        const offsetX = rect.left - menuRect.left;
        
        navMenu.style.setProperty('--underline-width', `${rect.width}px`);
        navMenu.style.setProperty('--underline-offset-x', `${offsetX}px`);
    }

    // Set initial position
    if (activeLink) {
        updateUnderline(activeLink);
    }

    // Handle hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            updateUnderline(link);
        });

        link.addEventListener('mouseleave', () => {
            if (activeLink) {
                updateUnderline(activeLink);
            }
        });
    });

    // Update on window resize
    window.addEventListener('resize', () => {
        if (activeLink) {
            updateUnderline(activeLink);
        }
    });
});
