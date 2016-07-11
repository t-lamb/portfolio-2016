var canvas;
var context;

var mainArr = new Array;
var imgArray = mainArr;

mainArr[0] = new Image();
mainArr[0].src = "images/win0.png";

mainArr[1] = new Image();
mainArr[1].src = "images/win1.png";

mainArr[2] = new Image();
mainArr[2].src = "images/win2.png";

mainArr[3] = new Image();
mainArr[3].src = "images/win3.png";

mainArr[4] = new Image();
mainArr[4].src = "images/win4.png";

mainArr[5] = new Image();
mainArr[5].src = "images/win5.png"

mainArr[6] = new Image();
mainArr[6].src = "images/win6.png";

mainArr[7] = new Image();
mainArr[7].src = "images/win7.png";

mainArr[8] = new Image();
mainArr[8].src = "images/win8.png";

mainArr[9] = new Image();
mainArr[9].src = "images/win9.png";

mainArr[10] = new Image();
mainArr[10].src = "images/win10.png";

mainArr[11] = new Image();
mainArr[11].src = "images/win11.png"

mainArr[12] = new Image();
mainArr[12].src = "images/win12.png";

mainArr[13] = new Image();
mainArr[13].src = "images/win13.png";

mainArr[14] = new Image();
mainArr[14].src = "images/win14.png";

mainArr[15] = new Image();
mainArr[15].src = "images/win15.png";

mainArr[16] = new Image();
mainArr[16].src = "images/win16.png";

var cuteArr = new Array;

cuteArr[0] = new Image();
cuteArr[0].src = "images/cute0.png";

cuteArr[1] = new Image();
cuteArr[1].src = "images/cute1.png";

cuteArr[2] = new Image();
cuteArr[2].src = "images/cute2.png";

cuteArr[3] = new Image();
cuteArr[3].src = "images/cute3.png";

cuteArr[4] = new Image();
cuteArr[4].src = "images/cute4.png";

cuteArr[5] = new Image();
cuteArr[5].src = "images/cute5.png";

cuteArr[6] = new Image();
cuteArr[6].src = "images/cute6.png";

cuteArr[7] = new Image();
cuteArr[7].src = "images/cute7.png";

cuteArr[8] = new Image();
cuteArr[8].src = "images/cute8.png";

cuteArr[9] = new Image();
cuteArr[9].src = "images/cute9.png";

cuteArr[10] = new Image();
cuteArr[10].src = "images/cute10.png";

cuteArr[11] = new Image();
cuteArr[11].src = "images/cute11.png";

cuteArr[12] = new Image();
cuteArr[12].src = "images/cute12.png";

cuteArr[13] = new Image();
cuteArr[13].src = "images/cute13.png";

var miscArr = new Array;

miscArr[0] = new Image();
miscArr[0].src = "images/misc0.png";

miscArr[1] = new Image();
miscArr[1].src = "images/misc1.png";

miscArr[2] = new Image();
miscArr[2].src = "images/misc2.png";

miscArr[3] = new Image();
miscArr[3].src = "images/misc3.png";

miscArr[4] = new Image();
miscArr[4].src = "images/misc4.png";

miscArr[5] = new Image();
miscArr[5].src = "images/misc5.png";

miscArr[6] = new Image();
miscArr[6].src = "images/misc6.png";

miscArr[7] = new Image();
miscArr[7].src = "images/misc7.png";

miscArr[8] = new Image();
miscArr[8].src = "images/misc8.png";

miscArr[9] = new Image();
miscArr[9].src = "images/misc9.png";

miscArr[10] = new Image();
miscArr[10].src = "images/misc10.png";

miscArr[11] = new Image();
miscArr[11].src = "images/misc11.png";

miscArr[12] = new Image();
miscArr[12].src = "images/misc12.png";

miscArr[13] = new Image();
miscArr[13].src = "images/misc13.png";

miscArr[14] = new Image();
miscArr[14].src = "images/misc14.png";

function newIndex(arrLength) {
	var randIndex = Math.floor(arrLength * Math.random());
	return randIndex;
};
var myIndex = newIndex(imgArray.length);
var myCursor = imgArray[myIndex];

function initcanvas() {
	canvas = document.getElementById('mycanvas');
	context = canvas.getContext('2d');
	
	//load canvas to fit window size
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	context.fillStyle = "rgba(0, 0, 200, 0)";
	context.fillRect(0,0,canvas.width,canvas.height);

	//draw at cursor location whenever mouse moves
	canvas.addEventListener('mousemove', function (e){
		//console.log("mousemove " + e.clientX + ", " + e.clientY);

		x = e.clientX;
		y = e.clientY;

		//console.log("mousemove x:" + x + " y:" + y);
		draw(x,y);
	}, false);

	canvas.addEventListener('touchmove', function (e){
		//console.log("mousemove " + e.clientX + ", " + e.clientY);

		x = e.clientX;
		y = e.clientY;

		//console.log("mousemove x:" + x + " y:" + y);
		draw(x,y);
	}, false);

	//when mouse clicked, get new icon
	canvas.addEventListener('click', function(){
		myIndex = newIndex(imgArray.length);
		myCursor = imgArray[myIndex];
	});

	//show/hide dropdown when clicked
	var show = document.getElementById("infoButton");
	var dropdown = document.getElementById("dropdown");
	var showing = false;
	show.addEventListener('click', function(){
		if(showing){
			dropdown.style.display = "none"; 
			showing = false;
		} else {
			dropdown.style.display = "block";
			showing = true;
		}
	});

	//switch to cute icons
	var cute = document.getElementById("cute");
	cute.addEventListener('click', function(){
		imgArray = cuteArr;
		myIndex = newIndex(imgArray.length);
		myCursor = imgArray[myIndex];
	});

	//switch to misc icons
	var misc = document.getElementById("misc");
	misc.addEventListener('click', function(){
		imgArray = miscArr;
		myIndex = newIndex(imgArray.length);
		myCursor = imgArray[myIndex];
	});

	//switch to main icons
	var misc = document.getElementById("main");
	misc.addEventListener('click', function(){
		imgArray = mainArr;
		myIndex = newIndex(imgArray.length);
		myCursor = imgArray[myIndex];
	});

	//draws icons on canvas
	function draw(xval, yval) {
		//console.log("draw " + xval + " " + yval);
        context.drawImage(myCursor, xval, yval);
	};
};

window.onload = initcanvas;