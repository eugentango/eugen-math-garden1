const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF'; //'#BCFF00';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var btnPressed = false;

var canvas; //scope: variable is declared for all code
var context;

function prepareCanvas(){
  // console.log('Preparing Canvas');
  canvas = document.getElementById('my-canvas');
  context = canvas.getContext('2d');


  context.fillStyle = BACKGROUND_COLOUR;
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); //coordinates x and y, width and height

  context.strokeStyle = LINE_COLOUR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = 'round';


  // adding an event listener
  // document.addEventListener('mousedown', function (event) {
  //   console.log('X coordinates: ' + event.clientX);
  //   console.log('Y coordinates: ' + event.clientY);
  // });

  canvas.addEventListener('mousedown', function (event) {
    btnPressed = true;
    // console.log('Mouse Pressed');
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;


  });

  canvas.addEventListener('mouseup', function (event) {
    btnPressed = false;
    // console.log('Mouse Released');
  });

  canvas.addEventListener('mouseleave', function (event) {
    btnPressed = false;
    // console.log('Mouse Out');

  });

  canvas.addEventListener('mousemove', function (event) {
    if (btnPressed == true){
      //console.log('Assuming ' + btnPressed);
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      draw();
    }

  });


//Touch events

  canvas.addEventListener('touchstart', function (event) {
    btnPressed = true;
    // console.log('Touched!');
    //touches[0] - first touch
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;


  });

  canvas.addEventListener('touchend', function (event) {
    btnPressed = false;

  });

  canvas.addEventListener('touchcancel', function (event) {
    btnPressed = false;
  });

  canvas.addEventListener('touchmove', function (event) {
    if (btnPressed == true){
      //console.log('Assuming ' + btnPressed);
      previousX = currentX;
      currentX = event.touches[0].clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.touches[0].clientY - canvas.offsetTop;

      draw();
    }

  });



}
function draw(){
  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(currentX, currentY);
  context.closePath();
  context.stroke();


}
function clearCanvas(){
//resetting coordinates
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;

  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
