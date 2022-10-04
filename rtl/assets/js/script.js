// header carousel start 
// $('.header_carousel').attr('dir', 'rtl');
$('.header_carousel').slick({
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: false,
  speed: 300,
  rtl:true,   
  slidesToShow: 1,
  slidesToScroll: 1,


});
// header carousel end 

// popular dish carousel start
$('.popular_dish_carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  rtl:true,   

  slidesToShow: 4,
  prevArrow: '<button type="button" style area-disable="true" class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" style area-disable="false" class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',

  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
// popular dish carousel end

// client carousel start 
$('.client_carousel').slick({
  dots: true,
  
  arrows: false,
  infinite: false,
  speed: 300,
rtl:true, 


  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
// client carousel end 

// nav menu js start 
$('.navigation_menu').hover(
  function () { $(this).addClass('active') },
  function () { $(this).removeClass('active') }
)
// nav menu js end

