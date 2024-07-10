let currentSlideIndex = 0;
const slidesDesktop = ['./image/slide-1.png', './image/slide-2.png'];
const slidesMobile = ['./image/slide-1-mobile.png', './image/slide-2-mobile.jpeg'];


function changeSlide(sliderId, direction) {
    const totalSlides = sliderId === 'slider-control_mobile' ? slidesMobile.length : slidesDesktop.length;
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    const sliderImage = sliderId === 'slider-control_mobile' ? 'sliderImageMobile' : 'sliderImageDesktop';
    document.getElementById(sliderImage).src = sliderId === 'slider-control_mobile' ? slidesMobile[currentSlideIndex] : slidesDesktop[currentSlideIndex];
}



function selectSlide(sliderId, index) {
    currentSlideIndex = index;
    changeSlide(sliderId, 0); // Reset direction to 0 to avoid jumping to next slide
}




window.onload = function() {
    changeSlide('slider-control_mobile', 0);
    changeSlide('slider-control_desktop', 0);  
};
