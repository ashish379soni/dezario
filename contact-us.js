const hamburger = document.getElementById('hamburger');
const sidemenu = document.getElementById('sidemenu');
const closeMenu = document.getElementById('closeMenu');

// Open menu
hamburger.addEventListener('click', () => {
    sidemenu.style.transform = 'translateX(0)';
});

// Close menu
closeMenu.addEventListener('click', () => {
    sidemenu.style.transform = 'translateX(-100%)';
});


document.addEventListener('scroll', function() {
    const parallaxBg = document.getElementById('parallax-bg');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Adjust the background position based on scroll position
    parallaxBg.style.transform = `translateY(${scrollTop * 0.6}px)`;
});


// Select all cards
const form = document.querySelectorAll('.form');
const text = document.querySelectorAll('.text')

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-40');  // Show card
      entry.target.classList.add('opacity-100', 'translate-y-0');   // Trigger the animation
      observer.unobserve(entry.target);  // Stop observing after the animation is triggered
    }
  });
}, {
  threshold: 0.2  // Trigger when 20% of the card is visible
});

// Observe each card
form.forEach(form => {
  observer.observe(form);
});

text.forEach(text => {
    observer.observe(text);
  });