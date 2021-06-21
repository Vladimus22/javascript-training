//return minimum value from two numbers
function min(a,b) {
    if (a < b) {
        return a;
    }else {
        return b;        
    }
}
alert(min(2,5))
alert(min(3,-1))
alert(min(1,1))

//variant with operator ?
// function min(a, b) {
//     return a < b ? a : b;
//   }

function pow(x,n){
   let result = x;

   for(let i = 1; i < n; i++){
        result *= x;
   }
   return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n < 1){
    alert('Error');
}else {
    alert( pow(x,n));
}

alert(pow(3, 2));