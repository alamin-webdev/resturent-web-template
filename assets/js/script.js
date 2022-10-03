
    $(document).ready(function(){
      $('.myslider').slick({
        infinite: true,
      speed: 300,
      slidesToShow: 1,
        dots:true,
        autoplay:true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 600,
            settings: {
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
      });
    });
    $('.popular_dish_carousel').slick({
      dots: true,
      infinite: false,
      speed: 300,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.client_carousel').slick({
      dots: true,
      // autoplay:true,
      arrows:false,
      infinite: false,
      speed: 300,
      
      
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.navigation_menu').hover(
      function(){ $(this).addClass('active') },
      function(){ $(this).removeClass('active') }
    )
