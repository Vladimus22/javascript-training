//this code check if the value of the variable is between 14 and 90, the expression is true 
let age = 25;

if (age >= 14 && age <= 90){
    alert(true);
}
//variant with NOT (!) if the value is NOT between 14 and 90
let age = 25;

if (!(age >= 14 && age <= 90)){
    alert(true);
}
//variant without NOT (!)
let age = 25;

if (age < 14 || age > 90){
    alert(true);
}else {
    alert(false);
}