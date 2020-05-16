jQuery(document).ready(function(){
"use strict"

$('.slider').ripples({
  dropRadius:10,
  perturbance: 0.05,
  
});
});

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