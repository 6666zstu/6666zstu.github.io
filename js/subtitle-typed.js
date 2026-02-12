// Typewriter effect for subtitle using Typed.js
document.addEventListener('DOMContentLoaded', function () {
  // Wait for site to settle
  setTimeout(function () {
    // NexT theme uses .site-subtitle. We target it directly.
    var subtitleEl = document.querySelector('.site-subtitle');

    // Safety check: if not found by class, try id (some themes/plugins use id)
    if (!subtitleEl) {
      subtitleEl = document.getElementById('subtitle');
    }

    if (subtitleEl) {
      console.log('Found subtitle element:', subtitleEl);
      // Clear placeholder text immediately
      subtitleEl.innerHTML = '';

      // Create a span for Typed.js
      var typedSpan = document.createElement('span');
      typedSpan.id = 'subtitle-typed';
      subtitleEl.appendChild(typedSpan);

      // Initialize Typed.js
      initTyped();
    } else {
      console.warn('Subtitle element not found! Typewriter effect cancelled.');
    }

    function initTyped() {
      if (typeof Typed === 'undefined') {
        // Fallback if not loaded
        console.error('Typed.js library not loaded.');
        return;
      }

      new Typed('#subtitle-typed', {
        strings: [
          '无限风光在险峰',
          '欲与天公试比高',
          '不管风吹浪打，胜似闲庭信步'
        ],
        typeSpeed: 100, // Faster typing
        backSpeed: 50,
        startDelay: 300,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
      });
    }
  }, 100);
});
