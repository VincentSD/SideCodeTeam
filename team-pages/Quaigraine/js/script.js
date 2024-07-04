let currentIndex = 0;
const images = [
  'image/slide-1.png',
  'image/slide-2.png',
];

const header = document.querySelector('.header');
const textbox = document.querySelector('.textbox');

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  const newIndex = currentIndex + direction;

  // Wrap around at the ends of the array
  currentIndex = newIndex >= images.length ? 0 : newIndex < 0 ? images.length - 1 : newIndex;

  // Fade out textbox
  textbox.style.transition = 'opacity 0.5s ease';
  textbox.style.opacity = '0';

  // Change header background image after fade out
  setTimeout(() => {
    header.style.transition = 'background-image 0.5s ease';
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    
    // Fade in textbox
    setTimeout(() => {
      updateClasses();
      textbox.style.transition = 'opacity 0.5s ease';
      textbox.style.opacity = '1';
    }, 100);
  }, 500);
}

function updateClasses() {
  // Remove any existing slider-specific classes
  header.classList.remove('slide-1', 'slide-2');
  textbox.classList.remove('slide-1', 'slide-2');

  // Add the class for the current slide
  header.classList.add(`slide-${currentIndex + 1}`);
  textbox.classList.add(`slide-${currentIndex + 1}`);

  // Logging to debug
  console.log(`Current Index: ${currentIndex}`);
  console.log(`Header Classes: ${header.className}`);
  console.log(`Textbox Classes: ${textbox.className}`);
}

// Initial setup
header.style.backgroundImage = `url(${images[0]})`;
updateClasses();

// Fade in textbox on initial load
setTimeout(() => {
  textbox.style.transition = 'opacity 0.5s ease';
  textbox.style.opacity = '1';
}, 100);
