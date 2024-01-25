// 貓咪認養
// var swiper1 = new Swiper("#cat", {
//     // 自動播放
//     autoplay: {
//         delay: 1800,
//         disableOnInteraction: false,
//     },
//     // 第一張與最後一張無縫連接
//     loop: true,
//     // 顯示數量
//     slidesPerView: 5,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

//     navigation: {
//         nextEl: ".swiper-next1",
//         prevEl: ".swiper-prev1",
//     },

//     // 斷點
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 8
//         },
//         // when window width is >= 480px
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 12
//         },
//         // when window width is >= 640px
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 12
//         }
//     }

// });


// ★兩個不同的swiper取不同ID解決。

// 狗狗認養
var swiper = new Swiper("#banner", {
    autoplay: {
        delay:2000,
    },
     loop: true,
    pagination: {
        el:".swiper-pagination",
        dynamicBullets: true,
    },
        navigation: {
        nextEl:".swiper-next2",
        prevEl:".swiper-prev2",
    },

});



var swiper = new Swiper("#prod", {
    // direction: 'vertical',
     // 自動播放
    autoplay: {
        delay:2000,
        disableOnInteraction:true,
    },
      //第一張與最後一張無縫連接
     loop:true,    
    slidesPerView:5,
    spaceBetween:10,
    pagination: {
        el:".swiper-pagination",
        dynamicBullets:true,
    },
        navigation: {
        nextEl:".swiper-next1",
        prevEl:".swiper-prev1",
    },


    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 12
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween:10
        }
    }

});











