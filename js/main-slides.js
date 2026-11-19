(function($){
    $.fn.slideshow = function(options){
        var container = $(this);

        var settings = $.extend({
            randomize: true,
            height: "auto",
            slideDuration: 6000,
            fadeDuration: 1000,
            animate: true,
            pauseOnTabBlur: true,
            enableLog: false,
            slideElementClass: 'bg-slide', // This is also defined in the CSS!
            // slideshowId: 'main-slideshow' // This is also defined in the CSS!
        }, options);

        var image_index = 0;
        var slideTimeDelta = 0;
        var resumeStartTime = 0;
        var resumeTimer;
        if(settings.animate == true){
            var cssAnimationDuration = settings.slideDuration + settings.fadeDuration;
        }else{
            // slides.find('.' + settings.slideElementClass + ' span.animate').removeClass('animate');
            var cssAnimationDuration = 0;
        }var currentSlideStartTime = Date.now();

  // Start interval loop
  slidesInterval = setInterval(slideRefresh, settings.slideDuration);

  console.log('Slideshow started.');
        // setInterval and setTimeout behave weirdly when the tab is out of focus.
        // To prevent glitches and save resources we can pause the slideshow when the
        // tab is out of focus.
        if(settings.pauseOnTabBlur == true){
            $(window).focus(function() {
                console.log('Window gained focus.');
                if (paused == true) {
                    console.log('Resuming slideshow.');
                    resumeStartTime = Date.now();
                    paused = false;
                    // $('#' + settings.slideshowId + ' span.active:last').removeClass('paused');
                    container.removeClass('paused');
                    resumeTimer = setTimeout(function(){
                        slideTimeDelta = 0;
                        slideRefresh();
                        slidesInterval = setInterval(slideRefresh, settings.slideDuration);
                    }, settings.slideDuration - slideTimeDelta);
                }
            }).blur(function() {
                paused = true;
                console.log('Window lost focus, slideshow paused.');
                if(slideTimeDelta != 0){
                    var timeSinceLastPause = Date.now() - resumeStartTime;
                    slideTimeDelta = slideTimeDelta + timeSinceLastPause;
                    console.log('Time since last pause within this slide: ' + timeSinceLastPause + ' ms');
                }else{
                    slideTimeDelta = Date.now() - currentSlideStartTime;
                }
                console.log('Current slide at ' + slideTimeDelta + ' ms.');
                // $('#' + settings.slideshowId + ' span.active:first').addClass('paused');
                container.addClass('paused');
                clearInterval(slidesInterval);
                clearTimeout(resumeTimer);
            });
        }

        // Prepends a new slide to the slideshow element and fades out the previous one
        function slideRefresh() {
            console.log('Slide refresh triggered.');
            image_index = (image_index + 1) % options.images.length;
            currentSlideStartTime = Date.now();
            var src = options.images[image_index];
            console.log(`Swapping out to ${src}`)
            container[0].style.background = `url("${src}") no-repeat center`
            // container[0].style.background = `url("${src}") no-repeat center`
            // container[0].style.background = `url("${src}") no-repeat`
            // container[0].style.background = `url("${src}")`
            container[0].style.backgroundSize = `cover`
            

            // var slideshowDOM = slideshow[0];
            // If setInterval glitches out the slideshow will sometimes have no slides in
            // it anymore. This function checks and adds the next slide into the slideshow
            // if it is empty. Pausing the slideshow on tab blur will prevent glitches most of the time,
            // so this is a fallback for if that fails.
            // if(slideshowDOM.children.length == 0) {
            // if(container.children.length == 0) {
            //     console.log('There are no slides in the slideshow.');
            //     // The container needs its style set to:
            //     // style="background: url(images[0]) no-repeat center; background-size: cover;"
            //     container.style = `background: url(${images[image_index]}) no-repeat center; background-size: cover;`
            //     // container.find('.' + settings.slideElementClass + ':first').prependTo(slideshow);
            // }else{
            //     container.find('.' + settings.slideElementClass + ':first').prependTo(slideshow);
            //     // var slideElement = '#' + settings.slideshowId + ' .' + settings.slideElementClass;
            //     var slideElement = '#' + container.id + ' .' + settings.slideElementClass;
            //     $(slideElement + ':first span.animate').addClass('active').css('animation-duration', cssAnimationDuration + 'ms');;
            //     $(slideElement + ':last').fadeOut(settings.fadeDuration, function(){
            //         $(slideElement + ':last span.animate').removeClass('active').css('animation-duration', '0ms');;
            //         $(slideElement + ':last').appendTo(container);
            //         container.find('.' + settings.slideElementClass).show(0);
            //     });
            // }
        }
    }
}( jQuery ));