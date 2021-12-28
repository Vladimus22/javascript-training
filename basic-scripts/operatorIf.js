/* user have a question, provide answer and then code checked what he wrote:
   if answer not equal to ECMAScript he show for user correct answer. */
let question = prompt('\"What is the official name of \"Javascript\" language?\"', '');
if (question == 'ECMAScript') {
    alert('Well done!')
} else {
    alert('You don\'t know? \"ECMAScript\"')
}
/* here code checked a number of user. If number more than 0 he show 1 in alert window.
   For number few than 0 show -1, and if number equal zero show 0. */
let provideNumber = prompt('Provie your number', 0);
if (provideNumber > 0) {
    alert(1);
} else if (provideNumber < 0) {
    alert(-1);
} else {
    alert(0);
}
/* this code check sum of a & b and then compare sum with 4. For this code I use 
    ternary operator "?" */
let a = 1;
let b = 2;
let result;

result = (a + b < 4) ? 'Few' : 'Many';
alert(result);
/* compare login with three variants, if user provied Worker, code show message 'Hello', same
for others variants. Here I use ternary operator instead if/else if/ else */
let login = prompt('Provide your login', '');
let message;

message = (login == 'Worker') ? 'Hello' :
    (login == 'President') ? 'Good day, sir' :
        (login == '') ? 'Login doesn\'t exist' :
            '';
alert(message);
