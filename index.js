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

  
  