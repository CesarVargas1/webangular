(function() {
    "use strict";

      /**
     * Portfoliio isotope and filter productoselectricos
     */
    window.addEventListener('load', () => {
        let productoselectricosContainer = select('.productoselectricos-container');
        if (productoselectricosContainer) {
            let productoselectricosIsotope = new Isotope(productoselectricosContainer, {
                itemSelector: '.productoselectricos-item',
                layoutMode: 'fitRows'
            });

            let productoselectricosFilters = select('#productoselectricos-flters li', true);

            on('click', '#productoselectricos-flters li', function(e) {
                e.preventDefault();
                productoselectricosFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                productoselectricosIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);
        }

    });

    /**
     * Initiate portfoliio lightbox productoselectricos 
     */
    const productoselectricosLightbox = GLightbox({
        selector: '.productoselectricos-lightbox'
    });

    /**
     * Initiate portfoliio details lightbox productoselectricos 
     */
    const productoselectricosDetailsLightbox = GLightbox({
        selector: '.productoselectricos-details-lightbox',
        width: '90%',
        height: '90vh'
    });

    /**
     * Portfoliio details slider productoselectricos
     */
    new Swiper('.productoselectricos-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

})()