"use strict";document.addEventListener("DOMContentLoaded",()=>{productCarousel(),CBDCarousel(),burgerMenu(),stickyNavbar()});const productCarousel=()=>{$(".home-product-carousel_wrap").owlCarousel({center:!0,margin:20,loop:!0,autoWidth:!0,items:3,dots:!0})},CBDCarousel=()=>{$(".home-cbd__carousel").owlCarousel({center:!1,margin:20,items:4,autoWidth:!0,loop:!1,autoplay:!0,dots:!0})},burgerMenu=()=>{const e=document.querySelector(".menu-btn"),s=document.querySelector(".site-header__nav__menu");let a=!1;e.addEventListener("click",()=>{a?(e.classList.remove("open"),a=!1):(e.classList.add("open"),a=!0),s.classList.contains("show-menu")?s.classList.remove("show-menu"):s.classList.add("show-menu")})},stickyNavbar=()=>{$(window).width()>480&&$(window).scroll((function(){$(window).scrollTop()>=28?($(".site-header").addClass("fixed-header"),$(".site-header__nav__menu").addClass("close-gap"),$("main").addClass("top-padding")):($(".site-header").removeClass("fixed-header"),$(".site-header__nav__menu").removeClass("close-gap"),$("main").removeClass("top-padding"))}))};