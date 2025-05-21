// Store the current page in session storage when it's fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set a flag in sessionStorage to indicate this page is loaded
    sessionStorage.setItem('lastPage', window.location.href);
    
    // Add transition class to the body
    document.body.classList.add('transition-ready');
    
    // If we're coming from another page in the site, we're already visible
    // If we're loading the page fresh, fade in
    if (!sessionStorage.getItem('navigating')) {
        // Fresh page load - fade in
        document.body.style.opacity = '0';
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    } else {
        // Coming from navigation - already visible
        document.body.style.opacity = '1';
        sessionStorage.removeItem('navigating');
    }
});

// Add click handlers to all internal links
document.addEventListener('click', (e) => {
    // Find if we clicked on or within an anchor tag
    let target = e.target;
    while (target && target.tagName !== 'A') {
        target = target.parentElement;
    }
    
    // If we found an anchor and it's an internal link
    if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        
        // Only handle internal page links (not anchors, external links, or non-HTML files)
        if (href && 
            href.indexOf('#') !== 0 && 
            href.indexOf('http') !== 0 && 
            href.endsWith('.html')) {
            
            // Set navigating flag
            sessionStorage.setItem('navigating', 'true');
            
            // No need to prevent default or delay navigation
            // The browser will handle the navigation naturally
            // and the next page will pick up the 'navigating' flag
        }
    }
});
