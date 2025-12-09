(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);






// Set type id in session
function setTypeId(id) {
	let data = '';
	sessionStorage.setItem('typeId', id);

	if (window.location.pathname.includes('photo-gallery.html')) {
		// We are already on the page, reload it
		location.reload();
	} else {
		window.location.href = 'photo-gallery.html';
	}
}


// Co-Curricular Activities

 function toggleReadMore(idNum) {
        var clickedDots = document.getElementById("dots" + idNum);
        var clickedMoreText = document.getElementById("more" + idNum);
        var clickedBtnText = document.getElementById("myBtn" + idNum);
        
        // 1. Close all other open sections
        // We assume IDs range from 1 to 8 based on your HTML structure.
        for (let i = 1; i <= 8; i++) {
            if (i !== idNum) {
                var otherDots = document.getElementById("dots" + i);
                var otherMoreText = document.getElementById("more" + i);
                var otherBtnText = document.getElementById("myBtn" + i);

                if (otherDots && otherMoreText && otherBtnText) {
                    otherDots.style.display = "inline";
                    otherMoreText.style.display = "none";
                    otherBtnText.innerHTML = "Read More";
                }
            }
        }

        // 2. Toggle the currently clicked section
        if (clickedDots.style.display === "none") {
            // If it's currently open (dots hidden), close it.
            clickedDots.style.display = "inline";
            clickedBtnText.innerHTML = "Read More";
            clickedMoreText.style.display = "none";
        } else {
            // If it's currently closed (dots visible), open it.
            clickedDots.style.display = "none";
            clickedBtnText.innerHTML = "Read less";
            clickedMoreText.style.display = "inline";
        }
    }


    // Virtual Tour
     function playFullscreenVideo() {
         const video = document.getElementById('fullscreenVideo');
         video.style.display = 'block';

         // Play video
         video.play();

         // Request fullscreen
         if (video.requestFullscreen) {
            video.requestFullscreen();
         } else if (video.webkitRequestFullscreen) { // Safari
            video.webkitRequestFullscreen();
         } else if (video.msRequestFullscreen) { // IE11
            video.msRequestFullscreen();
         }

         // Optional: hide video when exited from fullscreen
         video.onfullscreenchange = () => {
            if (!document.fullscreenElement) {
               video.style.display = 'none';
               video.pause();
            }
         };
         video.onwebkitfullscreenchange = () => {
            if (!document.webkitFullscreenElement) {
               video.style.display = 'none';
               video.pause();
            }
         };
      }