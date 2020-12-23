document.addEventListener('DOMContentLoaded', () => {
  productCarousel();
  CBDCarousel();
  burgerMenu();
  stickyNavbar();
})

const productCarousel = () => {
    $(".home-product-carousel_wrap").owlCarousel({
      center: true,
      margin: 20,
      loop: true,
      autoWidth: true,
      items: 3,
      dots: true
    });
}

const CBDCarousel = () => {
    $(".home-cbd__carousel").owlCarousel({
      center: false,
      margin: 20,
      items: 4,
      autoWidth: true,
      loop: false,
      autoplay: true,
      dots: true
    });
}


const burgerMenu = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuNav = document.querySelector(".site-header__nav__menu");
  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }

    menuNav.classList.contains("show-menu")
      ? menuNav.classList.remove("show-menu")
      : menuNav.classList.add("show-menu"); 
  });
}

const stickyNavbar = () => {
  if ($(window).width() > 480) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 28) {
        $(".site-header").addClass("fixed-header");
        $(".site-header__nav__menu").addClass("close-gap");
        $("main").addClass("top-padding");
      } else {
        $(".site-header").removeClass("fixed-header");
        $(".site-header__nav__menu").removeClass("close-gap");
        $("main").removeClass("top-padding");
      }
    });
  }
}
