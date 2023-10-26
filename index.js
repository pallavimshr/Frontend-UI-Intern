function interchangeBoxes() {
    const tl = gsap.timeline();
  
    // Define the animations to move the boxes within the container
    tl.to('.boxes', { x: '+=310', duration: 1 })
     .to('.boxes', { x: '+=310', duration: 1 }, '-=1')
      .to('.boxes', { x: '+=310', duration: 1 }, '-=1')
      .to('.boxes', { x: '+=310', duration: 1 }, '-=1');
  }
  
  // Call the function to start the animation
  interchangeBoxes();
  
  // Set up a repeating loop to keep the animation going
  gsap.delayedCall(2, interchangeBoxes); // Change the delay as needed

  
 
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

