document.addEventListener('DOMContentLoaded', () => {
    productCarousel();
    CBDCarousel();
})

const productCarousel = () => {
    $(".home-product-carousel_wrap").owlCarousel({
        center: true,
        loop: true,
        items: 3,
      dots: true
    });
}

const CBDCarousel = () => {
    $(".home-cbd__carousel").owlCarousel({
      center: true,
      items: 4,
        dots: true,
        loop: true,
      autoplay:true
    });
}
