// carousel.js

document.addEventListener('DOMContentLoaded', function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Array of image URLs
    let currentIndex = 0;

    const carouselImage = document.getElementById('carousel-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function updateImage() {
        carouselImage.src = images[currentIndex];
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    updateImage(); // Initial call to display the first image
});
