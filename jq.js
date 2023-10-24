// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
var percent=0;
var move_count=0; 
var change=0;
$(function(){
    
      $('.right').click(function(){
       
        if(move_count<2)
        {
         move_count+=1; 
          $('.pictures').css('left',-1460*move_count);
        
        }
      })

      $('.left').click(function(){

        if(move_count>0)
        {
            move_count-=1; 
            $('.pictures').css('left',-1460*move_count);
        }

      })


        //點擊時按鈕加上 class
        $('.sel li').click(function(){
          $('.sel li').removeClass('btnNow');
          $(this).addClass('btnNow');
        })  
})


new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 3,
  slidesPerGroup: 3,
  centeredSlides: true,
  watchOverflow: true,
  spaceBetween: 30,
  parallax : true,
  grabCursor : true,
  loop: true,
  //autoplay:true,
  loopedSlides: 4,
  watchSlidesVisibility: true,
  breakpoints: {

      1028: {
          slidesPerView:5,
          spaceBetween: 30,
      },
      480: {
          slidesPerView:1,
          spaceBetween: 10,
      }
  }
});









// $(document).ready(function() {
	
/*const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: "fade",
  // speed:1000,
   loop: true,
  //  autoplay: {
    // delay: 3000,
    // disableOnInteraction: false,
  // },


 // effect:'cube',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });


 var swiper2 = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  breakpoints: {

      1028: {
          slidesPerView:3,
          spaceBetween: 30,
      },
      480: {
          slidesPerView:1,
          spaceBetween: 10,
      }
  }
});*/










































































































