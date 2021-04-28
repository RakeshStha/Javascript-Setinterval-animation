const box_1 = document.getElementById('box_1');
const box_2 = document.getElementById('box_2');

var positionX = 0;
var positionY = 0;

var animationX = setInterval(moveX, 100);
var animationY = setInterval(moveY, 100);


function stopX(){
    clearInterval(animationX);
}
function stopY(){
    clearInterval(animationY);
}

function moveX(){
    positionX += 10;
    box_1.style.left = positionX + "px";
    // console.log(positionX);
   if (positionX == 1010){
       stopX()
   }
}

function moveY(){
    positionY += 10;
    box_2.style.top = positionY + "px";
    // console.log(positionY);
   if (positionY == 420){
       stopY()
   }
}




