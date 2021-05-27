var elem = document.getElementById('task'); //ECMAScript5: let const var
elem.addEventListener('click', func);
var elem1 = document.getElementsByClassName('cls');

function func() {
    var sum = 0;
    for (var i = 0; i < elem1.length; i++) { //
        sum += +elem1[i].value;
        sum = sum + Number(value) // 0 + 1=1, 1 + 2 = 3, 3 + 3 = 6
    }
    var newElem = document.getElementById('sum');
    newElem.value = sum;
}

// HTML part:
// <input class="cls" type="text" value="" placeholder="число">
// <input class="cls" type="text" value="" placeholder="число">
// <input class="cls" type="text" value="" placeholder="число">
// <button id="task">Click!</button>
// <input id="sum" type="text" value="">   
