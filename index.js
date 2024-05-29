$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.carousel-slide');
    var slideCount = slides.length;

    function showSlide(index) {
        slides.removeClass('show');
        slides.eq(index).addClass('show');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);

    // Fade-in animations
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 50) {
                $(this).addClass('in-view');
            }
        });
    });

    // Initial check for fade-in animations
    $(window).trigger('scroll');
});

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
