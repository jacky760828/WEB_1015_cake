//
var x=0;
var vm = new Vue({
    el:"#app",
    data:
   {
    currentcake:null,
    isCartOpen:false,//car
     cart:[],
     cakea:false,
     chase_cake:false,
     cakec:false,
     caked:false,
     cakee:false,
    cakes:
     [
      {
         product:"product/ITEM/A1.png",
         name:"AI造型蛋糕",
         Price:"$400",
         count:0,
     },
     {
         product:"product/ITEM/A2.png",
         name:"AI造型蛋糕",
         Price: "$400",
         count:0, 
      },
    {
        product:"product/ITEM/A3.png",
        name:"AI可怕蛋糕",
        Price: "$800",
        count:0,
    },
    
   
  ],
  cakes2:
  [ 
    {
    product:"product/ITEM/B1.png",
    name:"AI巧克力蛋糕",
    Price:"$500",
     count:0,
     cakes:true
  },
  {
  product:"product/ITEM/B2.png",
  name:"AI巧克力蛋糕",
  Price: "$500",
  count:0,
  cakes:true
  },
  {
  product:"product/ITEM/B3.png",
  name:"AI造型蛋糕",
  Price: "$300",
  count:0,
  cakes:true
  },
  ],
  cakes3:
  [ 
    {
    product:"product/ITEM/C1.png",
    name:"AI巧克力蛋糕",
    Price:"$500",
     count:0,
     cakes:true
  },
  {
  product:"product/ITEM/C2.png",
  name:"AI巧克力蛋糕",
  Price: "$500",
  count:0,
  cakes:true
  },
  {
  product:"product/ITEM/C3.png",
  name:"AI造型蛋糕",
  Price: "$300",
  count:0,
  cakes:true
  },
  {
    product:"product/ITEM/C4.png",
    name:"AI造型蛋糕",
    Price: "$300",
    count:0,
    cakes:true
    },
  ],
  cakes4:
  [ 
    {
    product:"product/ITEM/D1.png",
    name:"AI巧克力蛋糕",
    Price:"$500",
     count:0,
     cakes:true
  },
  {
  product:"product/ITEM/D2.png",
  name:"AI巧克力蛋糕",
  Price: "$500",
  count:0,
  cakes:true
  },
  {
  product:"product/ITEM/D3.png",
  name:"AI造型蛋糕",
  Price: "$300",
  count:0,
  cakes:true
  },
  ],
  
  cakes5:
  [ 
    {
    product:"product/ITEM/E1.png",
    name:"AI巧克力蛋糕",
    Price:"$500",
     count:0,
     cakes:true
  },
  {
  product:"product/ITEM/E2.png",
  name:"AI巧克力蛋糕",
  Price: "$500",
  count:0,
  cakes:true
  },
  ],
  
  
  
  
  
  },
  
    methods:
    {
        reduce(count)
        {
          if(count==0) 
          {
            count=0
          }else
          {
            count-=1;
          }
          //console.log(count)
         return count;
        },
        
        add_function(count)
        {
  
          count+=1;
          //console.log("1111")
          return count;
        },
  
        change(chase_cake){
         
          //this[key] = !this[key];
            this.chase_cake=chase_cake;
            this.cakea=0;
            this.cakec=0;
            this.caked=0;
            this.cakee=false
            console.log(this.chase_cake)
              return chase_cake;
        },
        
         change2(cakea) {
         
          //this[key] = !this[key];
          this.cakea=cakea;
            this.chase_cake=0;
            this.cakec=0;
            this.caked=0;
            this.cakee=false
            console.log(this.cakea)
              return cakea;
        },
         change3(cakec) {
         
          //this[key] = !this[key];
            this.cakec=1;
            this.chase_cake=false
            this.cakea=false
            this.caked=0;
            this.cakee=false
            console.log(this.cakea)
            console.log(this.chase_cake)
            return cakec;
        },
        change4(caked) {
            this.caked=caked;
            this.chase_cake=false
            this.cakee=false
            this.cakea=false
            this.cakec=0;
            return cakec;
        },
        change5(cakee) 
        {
          this.cakee=1;
          this.chase_cake=false
          this.cakea=false
          this.caked=false
          this.cakec=false;
          return cakee;
         }, 
         addCart(cake){
         // console.log("8888")
          this.currentcakee=cake
          //console.log(cake)
          this.cart.push(cake)
          //console.log(cart)
          
        },
        PRESS(isCartOpen)
        {
          // console.log(isCartOpen)

        },
        removeItem(index) {
          console.log(index);
          this.cart.splice(index, 1);
        }
    },
    watch:
    {
      cart(){
        TweenMax.from(".fa-cart-shopping",0.3,{
          scale: 0.5
        })
      }
     
    },
    computed: {
      // totalPrice(){
      //   let sum=0;
      //   this.cart.forEach(function(item) {
      //     sum+=item.price;
      //   })
      //   return sum;
      // }

      totalPrice(){
        return this.cart
          .map(movie=>movie.price)
          .reduce((total,p)=>total+p,0)
      }
    }
  
  }
  )
 var catplace2 =$("#cat_grey").offset().left+$("#cat_grey").width()/2;
 $(window).mousemove(function(evt){
  x=evt.pageX;
  y=evt.pageY;

 detect_cat(x);
  
})
function detect_cat(x){
  if(Math.abs(x-catplace2)<80)
  {
   $("#cat_grey").css("bottom","0px");
  }
 else
  {  
   $("#cat_grey").css("bottom","-50px");

  }

}
 