"use strict";var headerOpen=document.querySelector(".header__open"),headerClose=document.querySelector(".header__close"),headerList=document.querySelector(".header__collapse");headerOpen.addEventListener("click",(function(){headerList.classList.add("header__collapse--open"),scrollLock.disablePageScroll()})),headerClose.addEventListener("click",(function(){headerList.classList.remove("header__collapse--open"),scrollLock.enablePageScroll()}));var swiperPromo=new Swiper(".promo__slider",{pagination:{el:".promo__pagination"},navigation:{nextEl:".promo__next",prevEl:".promo__prev"}}),swiperProjectCard=new Swiper(".project-card__slider",{pagination:{el:".project-card__pagination",clickable:!0}}),swiperImplementedProject=new Swiper(".implemented-project__slider",{slidesPerView:1,spaceBetween:40,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".implemented-project__next",prevEl:".implemented-project__prev"}}),swiperVideo=new Swiper(".video__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".video__next",prevEl:".video__prev"}}),swiperNews=new Swiper(".news__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".news__next",prevEl:".news__prev"}}),inputPhones=document.querySelectorAll(".input-phone");inputPhones&&Inputmask({mask:"+7(999) 999-99-99"}).mask(inputPhones),document.documentElement.clientWidth<1300&&document.querySelectorAll(".js-collapse-toggle").forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault();var t=e.getAttribute("data-target");document.querySelector(t).classList.toggle("menu-dropdown--show")}))}));var marginPromo=(document.documentElement.clientWidth-1140)/2;document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px")),window.addEventListener("resize",(function(){marginPromo=(document.documentElement.clientWidth-1140)/2,document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px"))})),function(){tippy("[data-tippy-content]",{placement:"bottom-start"});var e=tippy(document.querySelector(".show-tooltip"),{placement:"bottom-start"});e.show(),document.querySelectorAll("[data-tippy-content]").forEach((function(r){r.addEventListener("mouseenter",(function(){e.hide()}))}))}();var sliderPrice=document.querySelector(".js-slider-price"),sliderArea=document.querySelector(".js-slider-area"),nodesPrice=[document.querySelector(".js-lower-price"),document.querySelector(".js-upper-price")],nodesArea=[document.querySelector(".js-lower-area"),document.querySelector(".js-upper-area")];noUiSlider.create(sliderPrice,{start:[3e6,45e5],connect:!0,range:{min:25e5,max:5e6},format:{to:function(e){return Number(e).toFixed(0)},from:function(e){return Number(e).toFixed(0)}}}),noUiSlider.create(sliderArea,{start:[35,88],connect:!0,range:{min:30,max:90},format:{to:function(e){return Number(e).toFixed(1)},from:function(e){return Number(e).toFixed(1)}}}),sliderPrice.noUiSlider.on("update",(function(e,r){nodesPrice[r].innerHTML=e[r]})),sliderArea.noUiSlider.on("update",(function(e,r){nodesArea[r].innerHTML=e[r]}));