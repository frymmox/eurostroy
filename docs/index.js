"use strict";document.querySelector(".js-collapse-card-toggle")&&document.querySelectorAll(".js-collapse-card-toggle").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("collapse-card__title--show");var t=e.getAttribute("data-target-card");document.querySelector(".infrastructure__slider").classList.toggle("infrastructure__slider--active"),document.querySelector(t).classList.toggle("collapse-card__collapse--show")}))})),document.querySelector(".complex-about-media__card--gallery")&&document.querySelector(".complex-about-media__card--gallery").addEventListener("click",(function(){$.fancybox.open([{src:"https://source.unsplash.com/IvfoDk30JnI/1500x1000",opts:{caption:"First caption",thumb:"https://source.unsplash.com/IvfoDk30JnI/240x160"}},{src:"https://source.unsplash.com/0JYgd2QuMfw/1500x1000",opts:{caption:"Second caption",thumb:"https://source.unsplash.com/0JYgd2QuMfw/240x160"}}],{loop:!0})})),$(document).ready((function(){$(".general-plan--hover").on("mouseover",(function(){var e=$(this).data("id");$('.general-plan__home[data-id="'+e+'"]').addClass("active")})),$(".general-plan--hover").on("mouseout",(function(){var e=$(this).data("id");$('.general-plan__home[data-id="'+e+'"]').removeClass("active")})),$(".general-plan--hover").on("click",(function(){}))}));var headerOpen=document.querySelector(".header__open"),headerClose=document.querySelector(".header__close"),headerList=document.querySelector(".header__collapse");headerOpen.addEventListener("click",(function(){headerList.classList.add("header__collapse--open"),scrollLock.disablePageScroll()})),headerClose.addEventListener("click",(function(){headerList.classList.remove("header__collapse--open"),scrollLock.enablePageScroll()}));var inputPhones=document.querySelectorAll(".input-phone");function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}if(inputPhones&&Inputmask({mask:"+7(999) 999-99-99"}).mask(inputPhones),document.documentElement.clientWidth<992&&document.querySelectorAll(".js-collapse-toggle").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("data-target");document.querySelector(o).classList.toggle("menu-dropdown--show")}))})),document.querySelector(".modal")){var modalOpenSection=document.querySelector(".js-modal-section-open"),modalCloseSection=document.querySelector(".js-modal-section-close"),overlaySection=document.querySelector(".js-modal-section .modal__overlay"),modalSection=document.querySelector(".js-modal-section");modalOpenSection.addEventListener("click",(function(){modalSection.classList.add("modal--show"),scrollLock.disablePageScroll()})),modalCloseSection.addEventListener("click",(function(){modalSection.classList.remove("modal--show"),scrollLock.enablePageScroll()})),overlaySection.addEventListener("click",(function(){modalSection.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalSection.classList.remove("modal--show"),scrollLock.enablePageScroll())}));var modalOpenApartmentArray=_toConsumableArray(document.querySelectorAll(".chessboard__item:not(.chessboard__item--floor):not(.chessboard__item--sold):not(.chessboard__item--booked)")),modalCloseApartment=document.querySelector(".js-modal-apartment-close"),modalBackApartment=document.querySelector(".js-modal-apartment-back"),overlayApartment=document.querySelector(".js-modal-apartment .modal__overlay"),modalApartment=document.querySelector(".js-modal-apartment");modalOpenApartmentArray.forEach((function(e){e.addEventListener("click",(function(){modalApartment.classList.add("modal--show"),modalSection.classList.remove("modal--show")}))})),modalCloseApartment.addEventListener("click",(function(){modalApartment.classList.remove("modal--show"),scrollLock.enablePageScroll()})),modalBackApartment.addEventListener("click",(function(){modalApartment.classList.remove("modal--show"),modalSection.classList.add("modal--show")})),overlayApartment.addEventListener("click",(function(){modalApartment.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalApartment.classList.remove("modal--show"),scrollLock.enablePageScroll())}));var modalOpenApartmentForm=document.querySelector(".js-modal-apartment-form-open"),modalCloseApartmentForm=document.querySelector(".js-modal-apartment-form-close"),modalBackApartmentForm=document.querySelector(".js-modal-apartment-form-back"),overlayApartmentForm=document.querySelector(".js-modal-apartment-form .modal__overlay"),modalApartmentForm=document.querySelector(".js-modal-apartment-form");modalOpenApartmentForm.addEventListener("click",(function(){modalApartment.classList.remove("modal--show"),modalApartmentForm.classList.add("modal--show")})),modalCloseApartmentForm.addEventListener("click",(function(){modalApartmentForm.classList.remove("modal--show"),scrollLock.enablePageScroll()})),modalBackApartmentForm.addEventListener("click",(function(){modalApartmentForm.classList.remove("modal--show"),modalApartment.classList.add("modal--show")})),overlayApartmentForm.addEventListener("click",(function(){modalApartmentForm.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalApartmentForm.classList.remove("modal--show"),scrollLock.enablePageScroll())}));var modalOpenRequestSubmitted=document.querySelector(".js-modal-request-submitted-open"),modalCloseRequestSubmitted=document.querySelector(".js-modal-request-submitted-close"),overlayRequestSubmitted=document.querySelector(".js-modal-request-submitted .modal__overlay"),modalRequestSubmitted=document.querySelector(".js-modal-request-submitted");modalOpenRequestSubmitted.addEventListener("click",(function(){modalApartmentForm.classList.remove("modal--show"),modalRequestSubmitted.classList.add("modal--show")})),modalCloseRequestSubmitted.addEventListener("click",(function(){modalRequestSubmitted.classList.remove("modal--show"),scrollLock.enablePageScroll()})),overlayRequestSubmitted.addEventListener("click",(function(){modalRequestSubmitted.classList.remove("modal--show"),scrollLock.enablePageScroll()})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(modalRequestSubmitted.classList.remove("modal--show"),scrollLock.enablePageScroll())}))}var marginPromo=(document.documentElement.clientWidth-1140)/2;document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px")),window.addEventListener("resize",(function(){marginPromo=(document.documentElement.clientWidth-1140)/2,document.documentElement.style.setProperty("--promo-margin","".concat(marginPromo,"px"))})),document.querySelector(".js-view-place")&&document.querySelectorAll(".js-view-place").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-target");e.firstElementChild.checked&&(document.querySelectorAll(".slider-3d__slider").forEach((function(e){e.style.zIndex="1"})),document.querySelector(t).style.zIndex="2")}))}));var swiperPromo=new Swiper(".promo__slider",{pagination:{el:".promo__pagination"},navigation:{nextEl:".promo__next",prevEl:".promo__prev"}}),swiperComplexPromo=new Swiper(".complex-promo__slider",{pagination:{el:".complex-promo__pagination"},navigation:{nextEl:".complex-promo__next",prevEl:".complex-promo__prev"}}),swiperProjectCard=new Swiper(".project-card__slider",{pagination:{el:".project-card__pagination",clickable:!0}}),swiperImplementedProject=new Swiper(".implemented-project__slider",{slidesPerView:1,spaceBetween:40,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".implemented-project__next",prevEl:".implemented-project__prev"}}),swiperVideo=new Swiper(".video__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2}},navigation:{nextEl:".video__next",prevEl:".video__prev"}}),swiperNews=new Swiper(".news__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".news__next",prevEl:".news__prev"}}),swiperConstructionProgress=new Swiper(".construction-progress__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".construction-progress__next",prevEl:".construction-progress__prev"}}),swiperComplexAbout=new Swiper(".complex-about-media__slider",{navigation:{nextEl:".complex-about-media__next",prevEl:".complex-about-media__prev"}}),swiperPaymentPromo=new Swiper(".payment-promo__slider",{navigation:{nextEl:".payment-promo__next",prevEl:".payment-promo__prev"}}),swiperVirtualTour=new Swiper(".slider-3d__slider",{navigation:{nextEl:".slider-3d__next",prevEl:".slider-3d__prev"}}),swiperInfrastructure=new Swiper(".infrastructure__slider",{slidesPerView:1,spaceBetween:32,breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},navigation:{nextEl:".infrastructure__next",prevEl:".infrastructure__prev"}});if(document.querySelector(".chosen-apartment")){var viewApartment=document.querySelector(".js-view-apartment"),viewFloor=document.querySelector(".js-view-floor");viewApartment.addEventListener("click",(function(){viewApartment.firstElementChild.checked&&(document.querySelector(".chosen-apartment__image").lastElementChild.style.display="none",document.querySelector(".chosen-apartment__image").firstElementChild.style.display="block")})),viewFloor.addEventListener("click",(function(){viewFloor.firstElementChild.checked&&(document.querySelector(".chosen-apartment__image").firstElementChild.style.display="none",document.querySelector(".chosen-apartment__image").lastElementChild.style.display="block")}))}!function(){if(document.querySelectorAll("[data-tippy-content]")&&(tippy("[data-tippy-content]",{placement:"bottom-start"}),document.querySelector(".show-tooltip"))){var e=tippy(document.querySelector(".show-tooltip"),{placement:"bottom-start"});e.show(),document.querySelectorAll("[data-tippy-content]").forEach((function(t){t.addEventListener("mouseenter",(function(){e.hide()}))}))}}();var sliderPrice=document.querySelector(".js-slider-price"),sliderArea=document.querySelector(".js-slider-area"),nodesPrice=[document.querySelector(".js-lower-price"),document.querySelector(".js-upper-price")],nodesArea=[document.querySelector(".js-lower-area"),document.querySelector(".js-upper-area")];noUiSlider.create(sliderPrice,{start:[3e6,45e5],connect:!0,range:{min:25e5,max:5e6},format:{to:function(e){return Number(e).toFixed(0)},from:function(e){return Number(e).toFixed(0)}}}),noUiSlider.create(sliderArea,{start:[35,88],connect:!0,range:{min:30,max:90},format:{to:function(e){return Number(e).toFixed(1)},from:function(e){return Number(e).toFixed(1)}}}),sliderPrice.noUiSlider.on("update",(function(e,t){nodesPrice[t].innerHTML=e[t]})),sliderArea.noUiSlider.on("update",(function(e,t){nodesArea[t].innerHTML=e[t]}));