document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Inicializar EmailJS
    emailjs.init('MoureArenaPage'); // Reemplaza con tu user_id de EmailJS

    // Integración con EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = document.getElementById('button');
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_qyvws2y';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Email';
                alert('¡Mensaje enviado, nos contactaremos con usted a la brevedad!');
            }, (err) => {
                btn.value = 'Enviar Email';
                alert(JSON.stringify(err));
            });
    });
});

$(document).ready(function() {
    var offset = 250;
    var duration = 300;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#back-to-top').fadeIn(duration);
        } else {
            $('#back-to-top').fadeOut(duration);
        }
    });

    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    // Carousel functionality
    var currentIndex = 0;
    var slides = $('.carousel-item');
    var slideCount = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);

    // Mobile menu toggle
    $('#menu-toggle').click(function() {
        $('#navbarNav').toggleClass('show');
    });

    // Theme toggle
    $('#theme-toggle').click(function() {
        $('body').toggleClass('dark-mode');
        $('#theme-toggle i').toggleClass('fa-moon fa-sun');
    });

    // Search toggle
    $('#search-toggle').click(function() {
        $('#search-bar').toggle();
    });

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

    // Enlargeable images with modal
    $('.enlargeable').click(function() {
        var modal = document.getElementById("imageModal");
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = this.src;
    });

    var modal = document.getElementById("imageModal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    function initMap() {
        var location = {lat: -34.6037, lng: -58.3816};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    // EmailJS integration
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Email';
            alert('¡Mensaje enviado, nos contactaremos con usted a la brevedad!');
        }, (err) => {
            btn.value = 'Enviar Email';
            alert(JSON.stringify(err));
        });
});

// Fade-in animations
function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
