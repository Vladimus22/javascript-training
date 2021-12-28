// I: write code if/else that will be equal this switch code
//
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
//Answer:
let browser = prompt('What browser you used?');

if(browser == 'Edge'){
    alert('You\'ve got the Edge!');
    
} else if(browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

// II: Rewrite the code using a single switch statement
// const number = +prompt('Provide a number beetwen 0 and 3', '');

// if (number === 0) {
//   alert('You provide a number 0');
// }

// if (number === 1) {
//   alert('You provide a number 1');
// }

// if (number === 2 || number === 3) {
//   alert('You provide a number 2, but maybe a number 3');
// }
//Answer:
const number = +prompt('Provide a number beetwen 0 and 3', '');

switch(number){
    case 0:
        alert('You provide a number 0');
        break;
    case 1:
        alert('You provide a number 1');
        break;
    case 2:
    case 3:
        alert('You provide a number 2, but maybe a number 3');
        break;
}