$(document).ready(function() {
    
    //Section#About
    $('#born').tooltipster({
        content: $('<img src="./src/img/born.png"/>')
    });
    $('#bachelor').tooltipster({
        content: $('<img src="./src/img/hku.png"/>')
    });
    $('#master').tooltipster({
        content: $('<img src="./src/img/kadk.png"/>')
    });
    
    /*hover show img*/
    $('#iheart-architecture').mouseenter(function(){
        $('img#architecture').fadeIn(800);
    }).mouseleave(function(){
        $('img#architecture').fadeOut(800);
    });
    $('#iheart-post-rock').mouseenter(function(){
        $('img#post-rock').fadeIn(800);
    }).mouseleave(function(){
        $('img#post-rock').fadeOut(800);
    });
    $('#iheart-drawing').mouseenter(function(){
        $('img#drawing').fadeIn(800);
    }).mouseleave(function(){
        $('img#drawing').fadeOut(800);
    });
    $('#iheart-jogging').mouseenter(function(){
        $('img#jogging').fadeIn(800);
    }).mouseleave(function(){
        $('img#jogging').fadeOut(800);
    });

    $(".slides").slidesjs({
        width: 800,
        height: 565,
        navigation: false
    });

    projectClick('#P01','#P01_detail');
    projectClick('#P02','#P02_detail');
    projectClick('#P03','#P03_detail');
    projectClick('#P04','#P04_detail');
    projectClick('#P05','#P05_detail');
  
});

function projectClick(idName1,idName2) {
    $(idName1).click(function(){

        if ($('.img-detail').length) {
            $('.img-detail').hide();
        };

        $(idName2).slideDown();
        $('html, body').animate({scrollTop:$('.project-detail').offset().top}, 'slow');
        $('.goback').click(function(){
            $(idName2).slideUp();
            $('html, body').animate({scrollTop:$('.portfolio-section').offset().top}, 'slow');
        });
    });
}

//Collapse nav bar when scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});