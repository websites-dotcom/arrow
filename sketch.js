var n = 0;
var images = [];
var time = 2000;

images[0] = 'img/arrow-2.jpg';
images[1] = 'img/arrow-3.jpg';
images[2] = 'img/arrow-4.jpg';
images[3] = 'img/arrow-5.jpg';

var changeImg = function(){

	document.slide.src = images[n];

	if(n<images.length - 1){
		n++;
	}
	else{
		n = 0;
	}

	setTimeout("changeImg()", time);

}

window.onload = changeImg