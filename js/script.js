$(document).ready(function(){

    if ($(window).width() > 750){
        $(document).ready(function(){
            $('div[data-type="background"]').each(function(){
                var $bgobj = $(this); // создаем объект
                $(window).scroll(function() {
                    var yPos = -( ( $(window).scrollTop() - $bgobj.offset().top ) / $bgobj.data('speed')); // вычисляем коэффициент
     
                    // Присваиваем значение background-position
                    var coords = 'center '+ yPos + 'px';
                    // Создаем эффект Parallax Scrolling
                    $bgobj.css({backgroundPosition: coords});
                });
            });
        });
    }
    
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
        var $element = $('#'+$(this).attr("href").substr(1));
        if($element.length == 1) { //на странице есть только 1 элемент с указанным якорем
            $('html, body').animate({
                scrollTop: $element.offset().top
            }, 700); // анимируем скролл к элементу
        }
      return false;
    });

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
      });
    });

});
