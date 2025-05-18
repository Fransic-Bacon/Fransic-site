  document.addEventListener('DOMContentLoaded', function() {
        // Get references to our elements
        const navplacer = document.getElementById('navplacer');
        const stickyHeader = document.getElementById('stickyHeader');
        
        // Function to check scroll position and update header visibility
        function checkScroll() {
          // Get the position of navplacer relative to the viewport
          const navplacerPosition = navplacer.getBoundingClientRect().top;
          
          // If navplacer is above the viewport (we've scrolled past it)
          if (navplacerPosition < 0) {
            stickyHeader.classList.add('visible');
          } else {
            stickyHeader.classList.remove('visible');
          }
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', checkScroll);
        
        // Check initial position on page load
        checkScroll();
      });