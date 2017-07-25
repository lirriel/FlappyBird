var pipeHeigh, pipeWidth,
	birdHeight, birdWidth,
	pipeLineHegith,
	holeHeight, holeWidth;

function drawCanvas() {

    var canvas1 = document.getElementById("canvas");

    var context = canvas1.getContext("2d");

    /* coordinates to start flight*/
    var py_0 = canvas1.clientHeight/2,
    	px_0 = canvas1.clientWidth/2;
    
    var img = new Image(),
    	img1 = new Image(),
    	imgTop = new Image(), 
    	imgBottom = new Image(),
    	imgPipe = new Image();

    img.src = "images/superman.png";
    img1.src = "images/bck2.png";
    imgTop.src = "images/stolb1.png";
    imgBottom.src = "images/stolb.png";
    imgPipe.src = "images/pipeLine.png";
    
    img1.onload = function() {
        context.drawImage(img1, 0, 0);
        context.drawImage(img, 10, py_0);
        context.drawImage(imgTop, 40, 0);
        context.drawImage(imgBottom, 40, pipeHeight + 300);
    };
    
    imgTop.onload = function () {
    	pipeHeight = imgTop.height;
    	pipeWidth = imgTop.width;
    	console.log("pipeHeight: " + pipeHeight + "\n pipeWidth: " + pipeWidth);
    };
    
    imgPipe.onload = function () {
    	pipeLineHeight = imgPipe.height;
    	console.log("pipeLineHeight: " + pipeLineHeight + "\n pipeLineWidth: " + imgPipe.width);
    };
    
    img.onload = function () {
    	birdHeight = img.height;
    	birdWidth = img.width;
    	holeHeight = birdHeight * 2;
    	holeWidth = birdWidth + 20;
    	console.log("birdHeight: " + birdHeight + "\n birdWidth: " + birdWidth);
    };
}