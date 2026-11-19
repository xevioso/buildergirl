/* var slideset = document.querySelectorAll('[aria-label="Slides"]');
var slides = Array.from(slideset, e => {
	if(e.className == "elementor-carousel-image"){
		return e;
	}}).filter(e => e);
 */
// window.onload = function() {
	// $("#hi-center-section").height(Math.floor(window.innerHeight / 2));
	
	// const overlay = document.querySelector('.elementor-background-overlay');
	
	// $(document).elementReady('#main-slides', function() {
    //   console.log('#main-slides is ready');
	var run_main_slideshow = function(){
		console.log('Running main-slideshow...');
		// var options = {
		// 	flex: 1,
		// 	// height: "234px",
		// 	// height: "100%",
		// 	// height: "auto",
		// 	position: "fixed",
		// 	overflow: "hidden",
		// 	minWidth: 0,
		// 	top: 0,
		// 	left: 0,
		// 	right: 0,
		// 	bottom: 0
		// }
		var options = {
			enableLog: true,
			// slideshowId: "main-slideshow",
			randomize: false,      // Randomize the play order of the slides.
			// height: Math.floor($('#hi-center-section').height()).toString() + "px",
			slideDuration: 6000,  // Duration of each induvidual slide.
			fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
			animate: true,        // Turn css animations on or off.
			pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
			enableLog: false,      // Enable log messages to the console. Useful for debugging.,
			images: [
				"/wp-content/uploads/2023/09/image-2.jpeg",
				"/wp-content/uploads/2023/09/image-1.jpeg",
				"/wp-content/uploads/2023/09/image-3.jpeg"
			]
		}
		$('#bg-background-slides-container').slideshow(options);
		
		// $.injectCSS({
		// 	".slideshow": slideshowCss
		// });
		// $('#main-slides').slideshow({
		// 	enableLog: true,
		// 	// slideshowId: "main-slideshow",
		// 	randomize: false,      // Randomize the play order of the slides.
		// 	// height: Math.floor($('#hi-center-section').height()).toString() + "px",
		// 	slideDuration: 6000,  // Duration of each induvidual slide.
		// 	fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
		// 	animate: true,        // Turn css animations on or off.
		// 	pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
		// 	enableLog: false      // Enable log messages to the console. Useful for debugging.
		// });
	}

		// const slideshow = document.querySelector('.slideshow');
		// const slideshowParent = slideshow.parentNode;  // #main-slides-caller
		// // slideshow.parentNode.parentNode is overlay element.
		// console.log(`slideshowParent is ${slideshowParent}`)

		// $("#main_slideshow")[0].firstChild.height  is undefined
		// $("#main_slideshow")[0].firstChild.style.height is ""
		// $("#intro_slideshow")[0].parentNode is #intro-slides-caller
		// $("#intro_slideshow")[0].firstElementChild.firstElementChild  is the span with the background image
	// });


	// $(document).elementReady('#intro-slides', function() {
	// 	console.log('Running intro-slideshow...');
	// 	var slideshowCss = {
	// 			flex: 1,
	// 			// height: "234px",
	// 			// height: "100%",
	// 			// height: "auto",
	// 			position: "fixed",
	// 			overflow: "hidden",
	// 			minWidth: 0,
	// 			top: 0,
	// 			left: 0,
	// 			right: 0,
	// 			bottom: 0
	// 		}
	// 	$.injectCSS({
	// 		".slideshow": slideshowCss
	// 	});
	// 	$('#intro-slides').slideshow({
	// 		slideshowId: "intro-slideshow",
	// 		randomize: false,      // Randomize the play order of the slides.
	// 		slideDuration: 3000,  // Duration of each induvidual slide.
	// 		fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
	// 		animate: true,        // Turn css animations on or off.
	// 		pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
	// 		enableLog: false      // Enable log messages to the console. Useful for debugging.
	// 	});

	// });

		run_main_slideshow();

// };