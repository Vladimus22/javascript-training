//1 task
let question = prompt('\"What is the official name of \"Javascript\" language?\"', '');
if (question == 'ECMAScript') {
    alert('Well done!')
} else {
    alert('You don\'t know? \"ECMAScript\"')
}
//2 task
let provideNumber = prompt('Provie your number', 0);
if (provideNumber > 0) {
    alert(1);
} else if (provideNumber < 0) {
    alert(-1);
} else {
    alert(0);
}
//3 task
let a = 1;
let b = 2;
let result;

result = (a + b < 4) ? 'Few' : 'Many';
alert(result);
//4 task
let login = prompt('Provide your login', '');
let message;

message = (login == 'Worker') ? 'Hello' :
    (login == 'President') ? 'Good day, sir' :
        (login == '') ? 'Login doesn\'t exist' :
            '';
alert(message);
