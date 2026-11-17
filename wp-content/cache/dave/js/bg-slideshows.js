/* var slideset = document.querySelectorAll('[aria-label="Slides"]');
var slides = Array.from(slideset, e => {
	if(e.className == "elementor-carousel-image"){
		return e;
	}}).filter(e => e);
 */
window.onload = function() {
	console.log('Running main-slideshow...');
	/* $('#slides').slideshow({
		slideshowId: "main_slideshow",
		randomize: false,      // Randomize the play order of the slides.
		slideDuration: 3000,  // Duration of each induvidual slide.
		fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
		animate: true,        // Turn css animations on or off.
		pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
		enableLog: false      // Enable log messages to the console. Useful for debugging.
	}); */
	console.log('Running intro-slideshow...');
	$('#slides').slideshow({
		slideshowId: "intro_slideshow",
		randomize: false,      // Randomize the play order of the slides.
		slideDuration: 3000,  // Duration of each induvidual slide.
		fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
		animate: true,        // Turn css animations on or off.
		pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
		enableLog: false      // Enable log messages to the console. Useful for debugging.
	});
};