function moveBoxes() {
  const tl = gsap.timeline({ repeat: -1 });

  // Define the animation to move the inner box to the left
  tl.to('.boxes', {
    x: '-=840', // Move to the left (outer box width)
    duration: 4,
    ease: 'linear',
    onComplete: function () {
      // Reset the inner box to the right (original position)
      gsap.set('.boxes', { x: 0 });
    },
  });
}

moveBoxes();




  
 
  const fadeItems = document.querySelectorAll('.fade-item');

  function checkScroll() {
    fadeItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewportHeight * 0.8) {
        item.classList.add('fade-in');
      }
    });
  }

  // Initial check when the page loads
  checkScroll();

  // Add a scroll event listener to the container
  const scrollContainer = document.querySelector('.overflow-y-scroll');
  scrollContainer.addEventListener('scroll', checkScroll);

