"use strict";
$(window).scroll(function(){
    // let mybutton = document.getElementById("btnBackToTop");
    if ($(this).scrollTop() > 60) {
        $(".navbar").addClass("shrink");
        // mybutton.style.display = "block";
    } else {
        $(".navbar").removeClass("shrink");
        // mybutton.style.display = "none";
    }
});


$(document).ready(function() {
     // // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // }
});

// window.addEventListener('scroll', scrollFunc);

// function scrollFunc() {
//     var windowScroll = this.scrollY;

//     var $logo = document.getElementsByClassName('logo')[0];
//     $logo.style.transform = 'translateY(' + windowScroll/2 + '%)';

//     var $backBird = document.getElementsByClassName('back-bird')[0];
//     $backBird.style.transform = 'translateY(' + windowScroll/4 + '%)';

//     var $foreBird = document.getElementsByClassName('fore-bird')[0];
//     $foreBird.style.transform = 'translateY(-' + windowScroll/100 + '%)';

// }
