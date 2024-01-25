// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
var percent=0;
var move_count=0; 
var change=0;
var x=0;
var y=0;
var animate_task=0;
var product_cut=0;
var po1=$('#products').position().left;
$(function(){
  //console.log("123");
  $("#L1").mousedown(function(){
   
      $('.left2').css('opacity',1);
      $('.left').css('opacity',0);
      // $('#products').css('left',-200);
      if(product_cut>-5)
      {
        product_cut-=1; 
        $('#products').css('left',240*product_cut+55); 
        console.log(product_cut);
      }
      else{

      } 
  })
  $("#L1").mouseup(function(){
   
    $('.left2').css('opacity',0);
    $('.left').css('opacity',1);
  
})


   $("#r1").mousedown(function(){
   
  // console.log("567");
    $('.right2').css('opacity',1);
     $('.right').css('opacity',0);
     if(product_cut<0)
      {
       product_cut+=1;
       $('#products').css('left',240*product_cut+55); 
       console.log(product_cut);
      }
// $('#r1').css('left',-140);

    })
   $("#r1").mouseup(function(){

// console.log("567");
   $('.right2').css('opacity',0);
   $('.right').css('opacity',1);
// $('#r1').css('left',-140);

    })


      $('.left').click(function(){
        console.log("567");
      
      })


        //點擊時按鈕加上 class
      
})


$(window).mousemove(function(evt){
  x=evt.pageX;
  y=evt.pageY;

 detect_cat(x,y);
  
})





function detect_cat(x,y){

  var catplace1 =$("#bread").offset().left+$("#bread").width()/2;
  var catplace2 =$("#cat_grey").offset().left+$("#cat_grey").width()/2;
  var catplace3 =$("#stage0").offset().left+$("#stage0").width()/6;
  var catplace4 =$("#stage0").offset().left+$("#stage0").width()/4;
  var catplace5 =$("#stage0").offset().left+$("#stage0").width()/2;
  var catplace6 =$("#stage0").offset().left+$("#stage0").width()/2+$("#stage0").width()/4;

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
   
    if(x>catplace3&&x<catplace4)
    {
      $("#stage0").attr("src","pic/stage1.svg");
    }
    else if(x>catplace4&&x<catplace5)
     {
      $("#stage0").attr("src","pic/stage2.svg");
     } 
     else if(x>catplace5&&x<catplace6)
     {
      $("#stage0").attr("src","pic/stage3.svg");
     } 
     else if(x>catplace6&&x<1395)
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
  
  if(up>818)
  {
  
    $(".about").animate({
      margin:"0px"
      },2000,"easeInOutBack",{
       duration:1000
      })
     
      $(".p2").animate({
        opacity: 1,
        },4000,"easeInOutBack",{
         duration:2000
        })
       
        $(".p3").animate({
          opacity: 1,
          },4000,"easeInOutBack",{
           duration:2000
          })
          
  }
  else
  {
   

  }
 
});































































































