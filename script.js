
//Ripple Effect
// jQuery(document).ready(function(){
// "use strict"

// $('.slider').ripples({
//   dropRadius:10,
//   perturbance: 0.05,
  
// });
// });

var myText = "MAY JUNE 2020";
var myArray = myText.split("");
var loopTimer;
function frameLooper()
{
  if(myArray.length>0)
  {
    document.getElementById("type_text").innerHTML += myArray.shift();
  }else{
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout('frameLooper()',130);
}
frameLooper();

 // $('#move').mouseover(function(e)){
 // 	var moveX = (e.pageX * -1/15);
 // 	var moveY = (e.pageY * -1/15);
 // 	$(this).css('background-position',moveX + 'px ' + moveY + 'px')
 // }
 jQuery(function($) {
    $('#move').mouseover(function() {
        var dWidth = $(document).width() - 20, // 100 = image width
            dHeight = $(document).height() - 20, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
            let dH = $(document).height();
            console.log(nextX);
            if(nextY > 250){
            	nextY = 200;
            	// console.log("h");
            }
            if(nextX > 1000){
            	nextX = 1000;
            	console.log("j")
            }
            // console.log($(document).height())
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});

 let a = document.getElementById("A");
 let b = document.getElementById("B");
 let c = document.getElementById("C");
 let d = document.getElementById("D");
 let e = document.getElementById("E");
 let f = document.getElementById("F");
function A()  {
 a.style.display = "block";
 b.style.display = "none";
 c.style.display = "none";
 d.style.display = "none";
 e.style.display = "none";
 f.style.display = "none";
};

function B()  {
 a.style.display = "none";
 b.style.display = "block";
 c.style.display = "none";
 d.style.display = "none";
 e.style.display = "none";
 f.style.display = "none";
};

function C()  {
 a.style.display = "none";
 b.style.display = "none";
 c.style.display = "block";
 d.style.display = "none";
 e.style.display = "none";
 f.style.display = "none";
};

function D(){
 a.style.display = "none";
 b.style.display = "none";
 c.style.display = "none";
 d.style.display = "block";
 e.style.display = "none";
 f.style.display = "none";
}

function E() {
 a.style.display = "none";
 b.style.display = "none";
 c.style.display = "none";
 d.style.display = "none";
 e.style.display = "block";
 f.style.display = "none";
}

function F() {
 a.style.display = "none";
 b.style.display = "none";
 c.style.display = "none";
 d.style.display = "none";
 e.style.display = "none";
 f.style.display = "block";
}