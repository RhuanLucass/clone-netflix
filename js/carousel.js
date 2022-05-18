
$(document).ready(() => {
    $('.carousel').slick({
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 5,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.carousel-films').slick({
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 5,
        infinite: false
    });
})
