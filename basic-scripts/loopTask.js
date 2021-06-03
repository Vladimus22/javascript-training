function main() {
    var depth = parseInt(128, 10);
    var currentDistance = 0;
    var climb = 7;
    var slipBack = 2;
    var dayCount = 0;
    for (i = 0; i < depth; i++) {
        if (currentDistance < depth) {
            currentDistance += climb;
            if(depth > currentDistance){
                currentDistance -= slipBack;
            }
            dayCount++;
        } else {
            console.log(dayCount);
            break;
        }

    }
}

// function main() {
//     var depth = parseInt(128, 10);
//     //your code goes here   
//    var currentDistance = 0;
//    for(i = 0; ; i++){
//        currentDistance += 5;
//     //    depth = depth - 5;       
//        if (depth <= 0) {
//         console.log(i);
//            break;           
//        }
//        console.log(depth);
//    }
// }