document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality only
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuButton && navList) {
        mobileMenuButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
