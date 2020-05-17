
//Ripple Effect
// jQuery(document).ready(function(){
// "use strict"

// $('.slider').ripples({
//   dropRadius:10,
//   perturbance: 0.05,
  
// });
// });

var myText = "Launching Soon ...";
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
        var dWidth = $(document).width() - 100, // 100 = image width
            dHeight = $(document).height() - 100, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});