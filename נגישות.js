 const panel = document.getElementById('accessibility-panel');
    const btn = document.getElementById('accessibility-btn');

    // פתיחה/סגירה של התפריט
    btn.onclick = () => {
      panel.classList.toggle('visible');
    };

    function adjustTextSize(action) {
      const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
      const newSize = action === 'increase' ? currentSize + 2 : currentSize - 2;
      document.body.style.fontSize = `${newSize}px`;
    }

    function toggleGrayScale() {
      document.body.classList.toggle('grayscale');
    }

    function toggleHighContrast() {
      document.body.classList.toggle('high-contrast');
    }

    function toggleInvert() {
      document.body.classList.toggle('invert');
    }

    function toggleLightBackground() {
      document.body.classList.toggle('light-bg');
    }

    function highlightLinks() {
      document.body.classList.toggle('highlight-links');
    }

    function toggleReadableFont() {
      document.body.classList.toggle('readable-font');
    }

    function resetAccessibility() {
      document.body.className = '';
      document.body.style.fontSize = '';
    }