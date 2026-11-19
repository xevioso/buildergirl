window.onload = function() {
    const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            // const element = document.querySelector('#main-slides');
            const element = document.querySelector('#bg-background-slides-container');
            if (element) {
                console.log(`Element ${element} is now in the DOM!`);
                observer.disconnect(); // Stop observing once the element is found
                run_main_slideshow();
            }
        }
    });
    });

    // Start observing the document or a specific root element
    observer.observe(document, { childList: true, subtree: true });
}