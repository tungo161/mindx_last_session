$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.btn-scroll-up').fadeIn();
            $('header').addClass('active').delay(500);
            $(".welcome").css("padding-top", "82px");
            $(".cv-info").css("padding-top", "82px");
    } else {
        $('.btn-scroll-up').fadeOut();
        $('header').removeClass('active');
        $(".welcome").css("padding-top", "0px");
        $(".cv-info").css("padding-top", "0px");
    }
    });
    $('.btn-scroll-up').click(function(){
        $('html, body').animate({scrollTop : 0},100);
        return false;
    });
});
$(document).ready(function(){
    $('.menu-item').click(function(e){
        e.preventDefault();
        var targetId = $(this).attr('href');
        var targetOffset = $(targetId).offset().top - 83;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 200);
        });
    });
$(document).ready(function(){
    $('#move_to_contact').click(function(e){
        e.preventDefault();
        var targetOffset = $("#contact_id").offset().top - 83;    
            $('html, body').animate({
                scrollTop: targetOffset
            }, 200);
    });
});
$(document).ready(function(){    
    var menuItems = $('.menu-header a');
    var offcanvasItems = $('.offcanvas-body a');
    $(window).scroll(function(){
        var scrollPosition = $(this).scrollTop();
        $('.section').each(function(){
            var targetId = $(this).attr('id');
            var targetOffset = $(this).offset().top - 85;
            if (scrollPosition >= targetOffset) {
            menuItems.removeClass('active');
            offcanvasItems.removeClass('active');
            $('.menu-header a[href="#' + targetId + '"]').addClass('active');
            $('.offcanvas-body a[href="#' + targetId + '"]').addClass('active');
            }
        });
    });
});