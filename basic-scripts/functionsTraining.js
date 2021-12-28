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

//Function Callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed" );
  }
  
  function showCancel() {
    alert( "You canceled" );
  }
  
  ask("Are you sure?", showOk, showCancel);

//Function Expression 
let sum = function(a, b) {
   return a + b;
};

//Arrow Function
let sum = (a, b) => a + b;
alert( sum(1, 2) );
//Arrow Function without arguments
let sayHi = () => alert("Hello!");
sayHi();
//Arrow Function without brackets if we have only one argument
let double = n => n * 2;

alert( double(3) ); // 6
//Arrow Function with operator ?
let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет') :
  () => alert("Здравствуйте!");

welcome();

//Task: Function Expression -> Arrow Function
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask (
    'Are you sure?',
    () => alert('You agreed'),
    () => alert('You canceled')
);