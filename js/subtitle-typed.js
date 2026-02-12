// Typewriter effect for subtitle using Typed.js
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the page to fully load
  setTimeout(function() {
    // Find the subtitle element (NexT theme usually uses .site-subtitle)
    var subtitleEl = document.querySelector('.site-subtitle');
    
    if (!subtitleEl) {
      // If not found, try other possible selectors
      subtitleEl = document.querySelector('.subtitle');
    }
    
    if (subtitleEl) {
      // Clear existing content
      subtitleEl.innerHTML = '<span id="subtitle-typed"></span>';
      
      // Load Typed.js if not already loaded
      if (typeof Typed === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.1.0/dist/typed.umd.min.js';
        script.onload = function() {
          initTyped();
        };
        document.head.appendChild(script);
      } else {
        initTyped();
      }
    }
    
    function initTyped() {
      new Typed('#subtitle-typed', {
        strings: [
          '无限风光在险峰',
          '欲与天公试比高',
          '不管风吹浪打，胜似闲庭信步'
        ],
        typeSpeed: 150,
        backSpeed: 50,
        startDelay: 300,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }, 100);
});
