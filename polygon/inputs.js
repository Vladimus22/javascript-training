function addInputs() {
    //declare inputs DOM Doc
    let input_1 = document.getElementById('inp_1').value; 
    let input_2 = document.getElementById('inp_2').value;
    let input_3 = document.getElementById('inp_3').value;
    //declare output
    let input_4;
    //sum of inputs (convert string type to numbers (+value or Number(value))
    let sum = +input_1 + +input_2 + +input_3;    
    //convert sum to String
    input_4 = String(sum);
    //output
    document.getElementById('inp_4').value = input_4;
}

//variant 2
/*
    HTML part:
    <input class="cls" type="text" value="" placeholder="число">
    <input class="cls" type="text" value="" placeholder="число">
    <input class="cls" type="text" value="" placeholder="число">
    <button id="task">Click!</button>
    <input id="sum" type="text" value="">   

    JS part:
    var elem = document.getElementById('task');
    elem.addEventListener('click', func);
    var elem1 = document.getElementsByClassName('cls');

    function func() {
        var sum = 0;
        for (var i = 0; i < elem1.length; i++) {
            sum += +elem1[i].value;
        }
        var newElem = document.getElementById('sum');
        newElem.value = sum;
}    
*/
