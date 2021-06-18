// pre-increment varianant, show form 0 to 4 
// let i = 0;
// while (++i < 5) alert( i );
// console.log(i);

// post-increment variant, show from 0 to 5
//from 1 to 5
// let i = 0;
// while (i++ < 5) alert( i );

//show numbers who divided by 2 wihout without remainder (divisible numbers by 2)
// for(let i = 2; i <= 10; i++) {
//     if(i % 2 == 0) {
//         alert(i);
//     }
// }
//
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while(i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// let i;
// do {
//     i = +prompt('Provide number more then 100', 0);
// } while(i <= 100 && i);

//program show prime numbers in interval from 2 to n (n- number that user provide)
// let num = +prompt('Provide number');
// let i = 2;

// for(i = 2; i <= num; i++) {
//     if( i % 1 ==0 && i % num == 0){
//         alert(i);
//     }
// }

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}