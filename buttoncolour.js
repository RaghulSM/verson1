
   var cart1 = document.getElementById("cart1");      var heart1 = document.getElementById("heart1");
   var cart2 = document.getElementById("cart2");      var heart2 = document.getElementById("heart2");
   var cart3 = document.getElementById("cart3");      var heart3 = document.getElementById("heart3");
   var cart4 = document.getElementById("cart4");      var heart4 = document.getElementById("heart4");
   var cart5 = document.getElementById("cart5");      var heart5 = document.getElementById("heart5");
   var cart6 = document.getElementById("cart6");      var heart6 = document.getElementById("heart6");
   var cart7 = document.getElementById("cart7");      var heart7 = document.getElementById("heart7");
   var cart8 = document.getElementById("cart8");      var heart8 = document.getElementById("heart8");
   var cart9 = document.getElementById("cart9");      var heart9 = document.getElementById("heart9");
   var cart10 = document.getElementById("cart10");    var heart10 = document.getElementById("heart10");
   var cart11 = document.getElementById("cart11");    var heart11 = document.getElementById("heart11");
   var cart12 = document.getElementById("cart12");    var heart12 = document.getElementById("heart12");
   var cart13 = document.getElementById("cart13");    var heart13 = document.getElementById("heart13");

   cart1.addEventListener("click",changecolor);       heart1.addEventListener("click",changecolor);
   cart2.addEventListener("click",changecolor);       heart2.addEventListener("click",changecolor);
   cart3.addEventListener("click",changecolor);       heart3.addEventListener("click",changecolor);
   cart4.addEventListener("click",changecolor);       heart4.addEventListener("click",changecolor);
   cart5.addEventListener("click",changecolor);       heart5.addEventListener("click",changecolor);
   cart6.addEventListener("click",changecolor);       heart6.addEventListener("click",changecolor);
   cart7.addEventListener("click",changecolor);       heart7.addEventListener("click",changecolor);
   cart8.addEventListener("click",changecolor);       heart8.addEventListener("click",changecolor);
   cart9.addEventListener("click",changecolor);       heart9.addEventListener("click",changecolor);
   cart10.addEventListener("click",changecolor);      heart10.addEventListener("click",changecolor);
   cart11.addEventListener("click",changecolor);      heart11.addEventListener("click",changecolor);
   cart12.addEventListener("click",changecolor);      heart12.addEventListener("click",changecolor);
   cart13.addEventListener("click",changecolor);      heart13.addEventListener("click",changecolor);

   function changecolor(){
    if(this.style.color=="red"){
        this.style.color="grey"
    }
    else{
        this.style.color="red"
    }
   }