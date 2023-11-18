// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
var percent=0;
var move_count=0; 
var change=0;
var x=0;
var y=0;
var  animate_task=0;
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
  slidesPerView: 5,
  slidesPerGroup: 5,
  centeredSlides: true,
  watchOverflow: true,
  spaceBetween: 30,
  parallax : true,
  grabCursor : true,
   loop: true,
// autoplay:true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  breakpoints: {

      1428: {
          slidesPerView:5,
          spaceBetween: 60,
      },
      480: {
          slidesPerView:1,
          spaceBetween: 10,
      }
 }
});

$(window).mousemove(function(evt){
  x=evt.pageX;
  y=evt.pageY;

 detect_cat(x,y);
   //console.log(x+","+y)
})





function detect_cat(x,y){

  var catplace1 =$("#bread").offset().left+$("#bread").width()/2;
  var catplace2 =$("#cat_grey").offset().left+$("#cat_grey").width()/2;

  if(y>1426&&y<1550)
  {
    //console.log(catplace1+","+y)
   
    if(Math.abs(x-catplace1)<80)
    {
      $("#bread").attr("src","pic/bread2.png");

    }
    else
    {
      $("#bread").attr("src","pic/bread.png");

    }   
  }else
  {
    $("#bread").attr("src","pic/bread.png");
  }

  if(y>1286&&y<1544)
  {
    //console.log(catplace1+","+y)
   
    if(x>1101&&x<1210)
    {
      $("#stage0").attr("src","pic/stage1.svg");
    }
    else if(x>1210&&x<1261)
     {
      $("#stage0").attr("src","pic/stage2.svg");
     } 
     else if(x>1261&&x<1324)
     {
      $("#stage0").attr("src","pic/stage3.svg");
     } 
     else if(x>1324&&x<1395)
     {
      $("#stage0").attr("src","pic/stage4.svg");
     }   
    else
    {
      $("#stage0").attr("src","pic/stage0.svg");
    }


  }else
  {
    $("#stage0").attr("src","pic/stage0.svg");
  }




  if(y>1814&&y<2200)
 {  
  if(Math.abs(x-catplace2)<80)
   {
    $("#cat_grey").css("bottom","0px");
   }
  else
   {  
    $("#cat_grey").css("bottom","-50px");

   }
  }
}




$(window).scroll(function(evt){

  var up=$(window).scrollTop();
  // if(up>160)
  // {
  //  $(".rect4").animate({
    //  left: "200px",
    //  height: "50px",
    //  opacity:1
  // },{
  //  duration: 500
  // })


//.about
  
  if(up>818)
  {
  
    $(".about").animate({
      margin:"0px"
      },2000,"easeInOutBack",{
       duration: 1000
      })
     
      $(".p2").animate({
        opacity: 1,
        },4000,"easeInOutBack",{
         duration:8000
        })
       
        $(".p3").animate({
          opacity: 1,
          },4000,"easeInOutBack",{
           duration: 10000
          })
          animate_task=1;
  }
  else
  {
   
  //  if(animate_task==1)
  //  {
    // 
    // animate_task=0;
    // $(".about").animate({
    //  margin:"-500px"
      // },2000,"easeInOutBack",{
      //  duration: 1000
      // })
      // console.log(animate_task);
      // $(".p2").animate({
        // opacity: 0.1,
        // },4000,"easeInOutBack",{
        //  duration:8000
        // })
      //  
        // $(".p3").animate({
          // opacity: 0.1,
          // },4000,"easeInOutBack",{
          //  duration: 10000
          // })

  //  }

  }
 
});































































































