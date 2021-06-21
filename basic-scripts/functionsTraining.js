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