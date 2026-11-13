var slideset = document.querySelectorAll('[aria-label="Slides"]');
var slides = Array.from(slideset, e => {
	if(e.className == "elementor-carousel-image"){
		return e;
	}}).filter(e => e);

