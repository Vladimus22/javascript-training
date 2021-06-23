function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let num = Math.sqrt(sq);
    let num2 = Math.pow(num, 2);  
    console.log(num);
    let num3 = num % 2;
    console.log(num3);
    if((num ^ 0) == num) {
      num++;
      console.log(num);
      return num2;   
    } else {
      return -1;
    }
    
  }
  findNextSquare(121);

  function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
     let num = Math.sqrt(sq);
      let num2 = Math.pow(num, 2);  
      let num3 = num % 2;
      if((num ^ 0) == num) {
        num++;
        console.log(num);
        return Math.pow(num, 2);   
      } else {
        return -1;
      }
      
  }
  findNextSquare(121);


  function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
  let rootExtraction = Math.sqrt(sq);
  if((rootExtraction ^ 0) == rootExtraction) {
     rootExtraction++;
     return Math.pow(rootExtraction, 2);   
  } else {
        return -1;
  }    
  }

  //
//   You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

// function findNextSquare(sq) {
//     //put root extraction into another variable
//     let rootExtraction = Math.sqrt(sq);
//     //check if rootExtraction is an integer
//     if((rootExtraction ^ 0) == rootExtraction) {
//       //if true go to the next number
//        rootExtraction++;
//        return Math.pow(rootExtraction, 2);   
//     } else {
//           return -1;
//     }    
//     }
  
 