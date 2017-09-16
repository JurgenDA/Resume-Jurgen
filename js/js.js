//HEADER SHRINK
$(window).scroll(function(event) {
       if($(this).scrollTop() > 1){
           $('header').addClass('shrink');
       } 
        else{
            $('header').removeClass('shrink');
        }
    });



//CAROUSEL (WHATERHWEEL)
$(document).ready(function() {
    
    var carousel = $(".carousel").waterwheelCarousel( {
        flankingItems: 3
    });
    
    $("#prev").bind('click', function() {
        carousel.prev();
        return false;
    });
    
     $("#next").bind('click', function() {
        carousel.next();
        return false;
    });
    
});



//COPYRIGHT
var d = new Date();
document.getElementById("copyrightyear").innerHTML = "&copy;Copyright " + d.getFullYear() + " ";

$("#copyrightyear").click(function() {
    
   $(this).animate({color: "#ff0000"}, 1000, function() {
       window.open("", "_self");
   }); 
});


document.getElementById("backToHome").innerHTML = "www.Jurgengraanoogst.com " + " ";

$("#backToHome").click(function() {
    
   $(this).animate({color: "#ff0000"}, 1000, function() {
       window.open("http://192.168.1.3/JGPage/index.php", "_self");
   }); 
});



//SCROLL TO TOP
$(document).ready(function() {
    //check to see if the window is top...if not then dispaly button
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 900);
        return false;
    });
});



//SMOOTH SCROLLING
smoothScroll.init({
    selectorHeader: '[data-scroll-header]',
    offset: -85,
    
});



//BTN HEADER TO FIRST SECTION
$('#toFirstSection').click(function() {
    $.scrollTo($('#first'), 600, {offset:-70});
});


//FANCYBOX
$("[data-fancybox]").fancybox({
    iframe : {
        css : {
            height : '700'
        }
    }
});






















