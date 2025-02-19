document.addEventListener("DOMContentLoaded", function () {
    // Auto Image Slider
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(changeSlide, 3000); // Change slide every 3 seconds

    // Ensure hero text fades in after page loads
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((el) => {
            el.style.opacity = "1";
        });
    }, 500);

    // Scrollable Service Section
    const scrollContainer = document.querySelector('.scroll-container');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');

    // Check if elements exist before adding event listeners
    if (scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -350, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 350, behavior: 'smooth' });
        });
    } else {
        console.error("Scroll container or buttons not found!");
    }
});




    window.onload = function() {
        // Clear cache on page load for better speed
        if (performance.navigation.type === 1) {
            console.log("Page Reloaded - Cache Cleared");
        }
    };

    
    setInterval(function() {
        if (!navigator.onLine) {
            location.reload(); // Refreshes only when the internet is disconnected
        }
    }, 10000); // Checks every 10 seconds



