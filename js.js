// for (let x = 0; x <= 100; x++) {
//     if (((x % 3)==0) && ((x % 5)==0)) {
//         console.log(x, "<= fizz buzz");
//     } else if ((x % 3==0)) {
//         console.log(x, "<= fizz");
//     } else if ((x % 5==0)) {
//         console.log(x, "<= buzz");
//     } else {
//         console.log(x, "<= :(");
//     }
// }
// /////////////////////////////////////////////////////////
// var x = 0
// while(x <= 100) {
//     if (((x % 3)==0) && ((x % 5)==0)) {
//         console.log(x, "<= fizz buzz");
//     } else if ((x % 3==0)) {
//         console.log(x, "<= fizz");
//     } else if ((x % 5==0)) {
//         console.log(x, "<= buzz");
//     } else {
//         console.log(x, "<= :(");
//     }
//     x = x +1;
// }
// ////////////////////////////////////////////////////////////
for (let x = 0; x <= 100; x++) {
    let fizz = (x % 3)==0;
    let buzz = (x % 5)==0;
    if ( fizz && buzz) {
        console.log(x, "<= fizz buzz");
    } else if (fizz) {
        console.log(x, "<= fizz");
    } else if (buzz) {
        console.log(x, "<= buzz");
    } else {
        console.log(x, "<= :(");
    }
}
//////////////////////////////////////////////////////////
