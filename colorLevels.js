/* Automatic color leveling for HTML images
 * by AJ Farkas 2014
 * http://www.afarkas.com
 * Github: ajfarkas
 *
 * Auto Color Levels for HTML Images by AJ Farkas is licensed under
 * The MIT License.
 */

$(document).ready(function(){

	var imgList = document.getElementsByTagName('img');
	$('img').after('<canvas></canvas>');

	var colorLevel = function(imgNum){	
		var image = document.getElementsByTagName('img')[imgNum];
		var canvas = document.getElementsByTagName('canvas')[imgNum];

		image.onload = function(){
			var ctx = canvas.getContext('2d');

			canvas.width = image.width;
			canvas.height = image.height;

			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
			var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			var pixelNum = imgData.data.length;

			//initialize brightness for levels
			var redMax = 0; 
			var redMin = 255;
			var greenMax = 0; 
			var greenMin = 255;
			var blueMax = 0; 
			var blueMin = 255;

			for(var i = 0; i < pixelNum; i += 4){
				//set min and max values for each color
				if (imgData.data[i] > redMax) { redMax = imgData.data[i] };
				if (imgData.data[i] < redMin) { redMin = imgData.data[i] };
				if (imgData.data[i+1] > greenMax) { greenMax = imgData.data[i+1] };
				if (imgData.data[i+1] < greenMin) { greenMin = imgData.data[i+1] };
				if (imgData.data[i+2] > blueMax) { blueMax = imgData.data[i+2] };
				if (imgData.data[i+2] < blueMin) { blueMin = imgData.data[i+2] };
			}

			for(var i = 0; i < pixelNum; i += 4){
				//map colors to 0 - 255 range
				imgData.data[i] = (imgData.data[i] - redMin) * (255 / (redMax - redMin));
				imgData.data[i+1] = (imgData.data[i+1] - greenMin) * (255 / (greenMax - greenMin));
				imgData.data[i+2] = (imgData.data[i+2] - blueMin) * (255 / (blueMax - blueMin));
			}
			ctx.putImageData(imgData, 0, 0);

			//remove original img tag
			$(image).remove();

		 };
	}; 

	for (var j = 0; j < imgList.length; j++){
		colorLevel(j);
	}

});

