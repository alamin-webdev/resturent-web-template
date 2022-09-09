
    $(document).ready(function(){
      $('.myslider').slick({
        dots:true,
        autoplay:true,
        arrows:false,
        
      });
    });
    $('.navigation_menu').hover(
      function(){ $(this).addClass('active') },
      function(){ $(this).removeClass('active') }
    )
