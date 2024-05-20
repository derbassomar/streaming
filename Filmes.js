document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('visible');
      });
    } else {
      console.error('Menu button not found');
    }
  });
  