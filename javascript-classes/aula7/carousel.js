document.addEventListener('DOMContentLoaded', function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    function updateImage() {
        carouselImage.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    nextButton.addEventListener('click', nextImage);

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Automatically cycle through images every 3 seconds
    setInterval(nextImage, 3000);

    updateImage();
});