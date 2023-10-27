
//Animation for flashcards
function moveBoxes() {
  const tl = gsap.timeline({ repeat: -1 });

  
  tl.to('.boxes', {
    x: '-=840', 
    duration: 4,
    ease: 'linear',
    onComplete: function () {
      
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
    if (rect.top <= viewportHeight * 0.75) {
      item.classList.add('fade-in');
    }
  });
}


checkScroll();


const scrollContainer = document.querySelector('.overflow-y-scroll');
scrollContainer.addEventListener('scroll', checkScroll);

  // Get references to the box and the hidden anchor tag

const boxes = document.querySelectorAll('.spaces');
const hiddenLinks = document.querySelectorAll('.hiddenlink');


const timelines = [];

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const hiddenLink = hiddenLinks[i];

  const tl = gsap.timeline({ paused: true, reversed: true });
  tl.to(hiddenLink, { duration: 0.3, display: 'block' });

  box.addEventListener('mouseenter', () => {
    tl.play();
  });

  box.addEventListener('mouseleave', () => {
    tl.reverse();
  });

  timelines.push(tl);
}

