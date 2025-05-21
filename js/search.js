// Search functionality for Pikzilla Racing website

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const searchButton = document.querySelector('.top-action-link');
  const body = document.body;
  let searchOverlay = null;
  
  // Create search overlay
  function createSearchOverlay() {
    // Create overlay element
    searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
      <div class="search-container">
        <div class="search-header">
          <h2>Search Pikzilla Racing</h2>
          <button class="search-close">&times;</button>
        </div>
        <div class="search-form">
          <input type="text" class="search-input" placeholder="Type to search..." autofocus>
          <button class="search-button-submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="search-results"></div>
      </div>
    `;
    
    // Append to body
    body.appendChild(searchOverlay);
    
    // Focus on input
    setTimeout(() => {
      const searchInput = searchOverlay.querySelector('.search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
    
    // Prevent body scrolling
    body.style.overflow = 'hidden';
    
    // Add event listeners
    const closeButton = searchOverlay.querySelector('.search-close');
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchButtonSubmit = searchOverlay.querySelector('.search-button-submit');
    
    closeButton.addEventListener('click', closeSearchOverlay);
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        closeSearchOverlay();
      }
    });
    
    searchInput.addEventListener('input', performSearch);
    searchButtonSubmit.addEventListener('click', function() {
      performSearch();
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeSearchOverlay();
      }
    });
  }
  
  // Close search overlay
  function closeSearchOverlay() {
    if (searchOverlay) {
      searchOverlay.classList.add('closing');
      setTimeout(() => {
        body.removeChild(searchOverlay);
        searchOverlay = null;
        body.style.overflow = '';
      }, 300);
    }
  }
  
  // Perform search
  function performSearch() {
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchResults = searchOverlay.querySelector('.search-results');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Clear previous results
    searchResults.innerHTML = '';
    
    if (searchTerm.length < 2) {
      searchResults.innerHTML = '<p class="search-message">Please enter at least 2 characters to search</p>';
      return;
    }
    
    // Show loading indicator
    searchResults.innerHTML = '<p class="search-message">Searching...</p>';
    
    // Simulate search delay (in a real implementation, this would be an actual search)
    setTimeout(() => {
      // Define searchable content (in a real implementation, this would come from a database or API)
      const searchableContent = [
        {
          title: 'Home',
          url: 'index.html',
          content: 'Pikzilla Racing professional racing team supercar racing precision passion performance'
        },
        {
          title: 'Team',
          url: 'team.html',
          content: 'Meet our team racing drivers engineers technical staff Micah Gurko Chris Gurko Ezra Gurko'
        },
        {
          title: 'Cars',
          url: 'cars.html',
          content: 'Our cars collection supercars McLaren 750S Spider Porsche 911 GT3 RS engineering excellence'
        },
        {
          title: 'Racing',
          url: 'racing.html',
          content: 'Racing events calendar upcoming races past events results British Grand Prix Italian Grand Prix Japanese Grand Prix'
        },
        {
          title: 'Blog',
          url: 'blog.html',
          content: 'Latest news blog posts articles race reports team updates technical insights behind the scenes'
        },
        {
          title: 'Contact',
          url: 'contact.html',
          content: 'Contact us get in touch sponsorship inquiries media requests careers'
        }
      ];
      
      // Filter content based on search term
      const results = searchableContent.filter(item => {
        return item.title.toLowerCase().includes(searchTerm) || 
               item.content.toLowerCase().includes(searchTerm);
      });
      
      // Display results
      if (results.length > 0) {
        const resultsHTML = results.map(item => {
          return `
            <div class="search-result-item">
              <h3><a href="${item.url}">${item.title}</a></h3>
              <p>${highlightSearchTerm(item.content, searchTerm)}</p>
            </div>
          `;
        }).join('');
        
        searchResults.innerHTML = resultsHTML;
      } else {
        searchResults.innerHTML = '<p class="search-message">No results found. Try different keywords.</p>';
      }
    }, 500);
  }
  
  // Highlight search term in content
  function highlightSearchTerm(content, searchTerm) {
    // Truncate content to show relevant part
    let startIndex = content.toLowerCase().indexOf(searchTerm);
    if (startIndex === -1) startIndex = 0;
    
    // Get a substring around the search term
    let start = Math.max(0, startIndex - 30);
    let end = Math.min(content.length, startIndex + searchTerm.length + 30);
    let displayContent = content.substring(start, end);
    
    // Add ellipsis if needed
    if (start > 0) displayContent = '...' + displayContent;
    if (end < content.length) displayContent = displayContent + '...';
    
    // Highlight the search term
    const regex = new RegExp(searchTerm, 'gi');
    return displayContent.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
  
  // Add event listener to search button
  if (searchButton) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      createSearchOverlay();
    });
  }
});
