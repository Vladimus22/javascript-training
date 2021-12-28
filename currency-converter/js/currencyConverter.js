let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstValue = document.getElementById("first_value");
let checkUnitIsActive = true;

document.getElementById("one").addEventListener("click", inputOne);
document.getElementById("two").addEventListener("click", inputTwo);
document.getElementById("three").addEventListener("click", inputThree);
document.getElementById("four").addEventListener("click", inputFour);
document.getElementById("five").addEventListener("click", inputFive);
document.getElementById("six").addEventListener("click", inputSix);
document.getElementById("seven").addEventListener("click", inputSeven);
document.getElementById("eight").addEventListener("click", inputEight);
document.getElementById("nine").addEventListener("click", inputNine);

let rateEUR = 0;
let finalCurrency = 0;

function inputOne() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[0];
    }   // } else {
    //    second_unit.value = second_unit.value + numbers[0];
    // }   
}
function inputTwo() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[1];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[1];
    // }   
}
function inputThree() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[2];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[2];
    // }   
}
function inputFour() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[3];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[3];
    // }   
}
function inputFive() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[4];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[4];
    // }   
}
function inputSix() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[5];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[5];
    // }   
}
function inputSeven() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[6];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[6];
    // }   
}
function inputEight() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[7];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[7];
    // }   
}
function inputNine() {
    if (checkUnitIsActive == true) {
        firstValue.value = firstValue.value + numbers[8];
    }
    // } else {
    //    second_unit.value = second_unit.value + numbers[8];
    // }   
}

// fetch("https://api.exchangerate-api.com/v4/latest/USD", {
//     method: 'GET',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         rates: 'EUR'
//     })
// }).then(res => {
//     return res.json()
// })
//     // .then(res => res.json())
//     // .then(res => {
//     //     if(res.ok) {
//     //         console.log("SUCCESS")
//     //     } else {
//     //         console.log("Not Successful")
//     //     }
//     // })
//     .then(data => console.log(data))
//     .catch(error => console.log("ERROR"))


// fetch("https://api.exchangerate-api.com/v4/latest/EUR") //get currency from api
//     .then(res => res.json())
//     // .then(data => console.log(data.rates.EUR))
//     .then(data => rateEUR = data.rates.USD)
//     // .then(rateEUR == data);
fetch("https://api.exchangerate-api.com/v4/latest/EUR") //get currency from api
        .then(res => res.json())
        .then(data => rateEUR = data.rates.USD)

function getRate() {    
    var amount = firstValue.value;
    var rate = rateEUR;
    console.log('current currency EUR to USD: ' + rate);
    convert(amount, rate);
}
    
function convert(amount, rate){
    var currency = amount * rate;
    firstValue.value = currency;
}
    
// function Converter() {
//     finalCurrency = firstValue.value * rateEUR;
//     firstValue.value = finalCurrency;
// }
    