"use strict";var headerOpen=document.querySelector(".header__open"),headerClose=document.querySelector(".header__close"),headerList=document.querySelector(".header__collapse");headerOpen.addEventListener("click",(function(){headerList.classList.add("header__collapse--open"),scrollLock.disablePageScroll()})),headerClose.addEventListener("click",(function(){headerList.classList.remove("header__collapse--open"),scrollLock.enablePageScroll()}));var swiperPromo=new Swiper(".promo__slider",{pagination:{el:".swiper-pagination"},navigation:{nextEl:".promo__next",prevEl:".promo__prev"}}),swiperImplementedProject=new Swiper(".implemented-project__slider",{slidesPerView:1,spaceBetween:40,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".implemented-project__next",prevEl:".implemented-project__prev"}}),swiperVideo=new Swiper(".video__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".video__next",prevEl:".video__prev"}}),swiperNews=new Swiper(".news__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".news__next",prevEl:".news__prev"}}),inputPhones=document.querySelectorAll(".input-phone");inputPhones&&Inputmask({mask:"+7(999) 999-99-99"}).mask(inputPhones),document.documentElement.clientWidth<1300&&document.querySelectorAll(".js-collapse-toggle").forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault();var t=e.getAttribute("data-target");document.querySelector(t).classList.toggle("menu-dropdown--show")}))}));var marginPromo=(document.documentElement.clientWidth-1140)/2;document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px")),window.addEventListener("resize",(function(){marginPromo=(document.documentElement.clientWidth-1140)/2,document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px"))}));