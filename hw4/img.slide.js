
//===DEFAULT VALUES============================================================================================

//Array of images
var pic = [ "pictures/car1.jpeg", "pictures/car2.jpeg",
     "pictures/car3.jpeg", "pictures/car4.jpeg", "pictures/car5.jpeg",
     "pictures/car6.jpeg", "pictures/car7.jpeg", "pictures/car8.jpeg",
     "pictures/car9.jpeg", "pictures/car10.jpeg", "pictures/car11.jpeg", "pictures/car12.jpeg"];


//Captions for the images. 
//PRE: Indexes must match the index of the picture in pic
var captions = ["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10", "car11", "car12"];

var default_caption = "Classic Cars";

//Slide of all the pictures
var slide = new Array();

//3 Displayed Tiles
var tiles = new Array();

// current slide index
var index = 0; 

//Default background color
var default_background_color = "red";


//Link to forward icon
var forward_icon = "pictures/forward.png";

//Link to back icon
var back_icon = "pictures/backward.png";

//Number of tiles to be displayed on the page.
//PRE: Can only include integers that where 12 % integer returns 0. Includes, 2, 3, 4, 6
var number_of_tiles = 3;

//============================================================================================================

//===PRELOAD DEFAULT VALUES===================================================================================

// preloading all images
if ( document.images ){
   for (var i in pic)
   {
    	slide.push(loadImage(pic[i])); 
   }
}

//preloading all styles such as background color
setTiles(index);
document.getElementById('display').style.background = default_background_color;
document.getElementById('tiles').style.background = default_background_color;
document.getElementById('forward_btn').src = forward_icon;
document.getElementById('back_btn').src = back_icon;

//============================================================================================================

//===LOADS IMAGES IF ALLOWED==================================================================================
//If document allows images then create a new image and return that image
function loadImage(url)
{  
	if (document.images)
     {
         rslt = new Image();
         rslt.src = url; 
         return rslt; 
      }
}

//============================================================================================================

//changes Slide the the current index
//Also toggles which pic is selected in the tiles
function changeSlide()
{ 
	document.getElementById("display").src= slide[index].src; 
	toggle_selected(pic[index]);
	document.getElementById('caption').innerHTML = captions[index];


}


//Sets index to a particular value
//Then changes slide to that index
//Used for choosing a tile to be displayed
function setSlide(value)
{
	index = value;
	changeSlide();

}


//Arrow controls he previous displayed. 
//Shifts tiles to show 1 less. 
function prevSlide()
{

	var idx = --index;
 	if(idx < 0) 
 	{ 
 		++index;
 		return 
 	}

 	if(idx+1 > 0 && idx < slide.length-(number_of_tiles-1) && tiles[0] == slide[idx+1])
 	{
 		setTiles(index);	
	}
	changeSlide(); 
}

function nextSlide()
{
	var idx = ++index;

   if( idx >= pic.length) 
   	{ 
   		--index;
   		return; 
   	}
   	if(idx < slide.length-(number_of_tiles-1) && (idx % tiles.length) == 0)
   	{
   		setTiles(index);
   		tile_count = 0;
	}
	changeSlide(); 
}

function setTiles(value)
{
	if(value == null)
	{
		value = 0;
	}
	document.getElementById('tiles').innerHTML = "";
	tiles = [];
	for (var i in slide){
		if(i < number_of_tiles){
		var img = slide[value];
		img.id = pic[value];
		img.setAttribute('class', 'tiles');
		img.setAttribute('onClick', 'reply_click(this.id)');
		tiles.push(img);
		document.getElementById('tiles').appendChild(img);
		}
		else
		{
			break;
		}
		++value;
	}
}

function reply_click(value)
{
	var i = pic.indexOf(value);
	toggle_selected(value);
	setSlide(i);
}

function toggle_selected(value)
{
	var images = document.getElementsByClassName('tiles'); 
	for (var i in images)
	{
		if(images[i].className == "tiles selected"){
			images[i].className = "tiles";
		}
		if(images[i].id == value)
		{
			images[i].className = "tiles selected";

		}
	}
}

function set_background()
{
	var color = document.getElementById('background').value;
	document.getElementById('display').style.background = color;
	document.getElementById('tiles').style.background = color;
}

function set_back()
{
	var button = document.getElementById('back').value;
	document.getElementById('back_btn').src = button;
}

function set_forward()
{
	var button = document.getElementById('forward').value;
	document.getElementById('forward_btn').src = button;
}

