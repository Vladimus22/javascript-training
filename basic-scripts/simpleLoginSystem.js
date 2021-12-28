/*
Write a code that will ask for a login using prompt.
If the visitor enters “Admin” or "admin", then prompt asks for a password, 
if nothing is entered or the Esc key is pressed, show “Canceled”, otherwise display “I don’t know you”.
Check the password like this:
-If the password "boss" is entered, then display "Hello!",
-Otherwise - "Invalid password",
-If canceled - "Canceled". 
*/
let login = prompt('Who are you?', '');
if (login == 'Admin' || login == 'admin') {
    let password = prompt('Provide your password:', '')
    if (password == 'boss') {
        alert('Hello!');
    } else if (password = '' || password == null) {
        alert('Cancelled!')
    } else {
        alert('Invalid password!');
    }
} else if (login == '' || login == null) {
    alert('Canceled!');
} else {
    alert('I don\'t know you');
}