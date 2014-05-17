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

    $(".slides").slidesjs({
        width: 900,
        height: 635,
        navigation: false
    });

    hoverLike('#iheart-architecture','img#architecture');
    hoverLike('#iheart-post-rock','img#post-rock');
    hoverLike('#iheart-drawing','img#drawing');
    hoverLike('#iheart-jogging','img#jogging');

    projectClick('#P01','#P01_detail');
    projectClick('#P02','#P02_detail');
    projectClick('#P03','#P03_detail');
    projectClick('#P04','#P04_detail');
    projectClick('#P05','#P05_detail');

});

//function : click to slide down the project details.
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

//function : hover to show img
function hoverLike(idName1,idName2) {
    $(idName1).mouseenter(function(){
        $(idName2).fadeIn(800);
    }).mouseleave(function(){
        $(idName2).fadeOut(800);
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
