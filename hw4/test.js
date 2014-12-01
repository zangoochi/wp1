alert("testing");

var pic = [ "pictures/car1.jpeg", "pictures/car2.jpeg",
     "pictures/car3.jpeg", "pictures/car4.jpeg", "pictures/car5.jpeg",
     "pictures/car6.jpeg", "pictures/car7.jpeg", "pictures/car8.jpeg",
     "pictures/car9.jpeg", "pictures/car10.jpeg", "pictures/car11.jpeg", "pictures/car12.jpeg"];

var slide = new Array();
var index = 0;  // current slide index
function loadImage(url)
{  
	if (document.images)
     {
         rslt = new Image();
         rslt.src = url; 
         return rslt; 
      }
}

// preloading all images
if ( document.images ){
   for (var i in pic)
   {
    	slide.push(loadImage(pic[i])); 
   }
}

function changeSlide()
{ 
	alert("here");
	document.getElementById(’display’).src= slide[index].src; 
}