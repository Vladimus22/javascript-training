//alert
alert('hello!');
//prompt
let name = prompt('What is your name?', '');
document.getElementById('txt').innerHTML = `Hello, ${name}!`;
//confirm
let question = 'Are you human?'
let isHuman = confirm(question);
alert(isHuman);
