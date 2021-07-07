var t = setInterval(move, 10);
//start position
var pos = 0;
//box element
var box = document.getElementById('box');

function move() {
    if(pos >= 150) {
        clearInterval(t); //clearInterval - stop setInterval timer
    } else {
        pos += 1;
        box.style.left = pos+"px"; //px - pixels
    }   
}
