jQuery(document).ready(function ($) {

    // toggle menu
    $('#open-menu').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').addClass('open');
    });
    $('#close-icon').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').removeClass('open');
    });

    // toggle Search
    $('.open-search').click(function () {
        $('.show-search').toggleClass('active');
    })

    // Main Slide
    $('#items-slide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // Our Team
    $('#pills-tab').lightSlider({
        item: 4,
        loop: false,
        auto: false,
        slideMove: 1,
        // mode: 'fade',
        pause: 4000,
        slideMargin: 0,
        enableDrag: false,
        enableTouch: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // PopUps-1
    $(".read-more-1").click(function () {
        $('.popups-1').show();
    });
    $('.popups-1').click(function () {
        $('.popups-1').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.popups-1').hide();
    });
      // PopUps-2
      $(".read-more-2").click(function () {
        $('.popups-2').show();
    });
    $('.popups-2').click(function () {
        $('.popups-2').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.popups-2').hide();
    });
      // PopUps-3
      $(".read-more-3").click(function () {
        $('.popups-3').show();
    });
    $('.popups-3').click(function () {
        $('.popups-3').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.popups-3').hide();
    });
      // PopUps-4
      $(".read-more-4").click(function () {
        $('.popups-4').show();
    });
    $('.popups-4').click(function () {
        $('.popups-4').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.popups-4').hide();
    });

    // Grid Masonry
    setTimeout(function () {
        $('.grid').masonry({
            // options
            gutter: 10,
            fitWidth: true,
            itemSelector: '.grid-item',

        });
    }, 100);

    // Fancy Box
    $('[data-fancybox="images"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });
});