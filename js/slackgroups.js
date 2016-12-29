// Slackgroups Theme JavaScript
// require.config({
//     shim : {
//         "bootstrap" : { "deps" :['jquery'] }
//     },
//     paths:{
//         jquery:'../vendor/jquery/jquery.min',
//         bootstrap:'../vendor/jquery/bootstrap.min',
//         easing:'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js',
//         jqueryUI: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
//         bsValidation:'../vendor/jquery/jqBootstrapValidation'
//     }
//  });

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
     $('#accordion').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });


          $('#accordion1').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });
           $('#accordion2').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });
            $('#accordion3').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });
             $('#accordion4').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });

              $('#accordion5').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });
 $('#accordion6').find('.accordion-toggle').click(function(){

          //Expand or collapse this panel
          $(this).next().slideToggle('fast');

          //Hide the other panels
          $(".accordion-content").not($(this).next()).slideUp('fast');

        });





})(jQuery); // End of use strict
