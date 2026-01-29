$(document).ready(function(){
    // 1. STICKY NAVBAR & SCROLL-UP BUTTON
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // 2. SLIDE-UP SCRIPT (BACK TO TOP)
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}, "slow");
        // Resetting scroll behavior
        $('html').css("scrollBehavior", "auto");
    });

    // 3. NAVBAR MENU CLICK (SMOOTH SCROLL)
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // 4. TOGGLE MENU (FOR MOBILE)
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

// 5. TYPING ANIMATION (HOME SECTION)
    var typed = new Typed(".typing", {
        strings: [
            "Java Full Stack Developer", 
            "Professional Gamer", 
            "YouTube Content Creator", 
            "Video Editor", 
            "Instagram Reel Creator"
        ],
        typeSpeed: 70,   
        backSpeed: 50,   
        loop: true,
        backDelay: 1200, 
        cursorChar: '|' // सिंपल और साफ़ कर्सर
    });

    // 6. TYPING ANIMATION (ABOUT SECTION)
    var typed2 = new Typed(".typing-2", {
        strings: [
            "Full Stack Developer", 
            "Content Creator", 
            "Gamer & Editor"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 1200
    });

    // 7. OWL CAROUSEL (PROJECTS SLIDER)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            700:{ items: 2, nav: false },
            1050:{ items: 3, nav: false }
        }
    });

    // 8. CONTACT FORM HANDLING (ENHANCED FEEL)
    $('form').on('submit', function(e) {
        const btn = $(this).find('button');
        const originalText = btn.text();
        
        btn.text("Transmitting Data..."); 
        btn.css({"pointer-events": "none", "opacity": "0.7"});

        // Simple feedback for the user
        setTimeout(function() {
            console.log("NJ Empire Form check initiated...");
            // Button reset logic if needed for visual feedback
        }, 1500);
    });
});