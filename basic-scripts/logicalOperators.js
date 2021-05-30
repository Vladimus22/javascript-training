// OR - ||
alert( null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
// AND &&
alert(1 && null && 2);
// NOT !
let value = !true;
alert(value) // false


/*
logical combinations for OR ||
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


logical combinations for AND && 
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

priority: 
1. !
2. &&
3. ||
*/