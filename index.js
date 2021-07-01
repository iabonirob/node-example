//First we are making the code available to us in the lodash package. We make the value of the constant be all of the package lodash. Now we can use this constant to access any of the methods in the lodash pacakge
let lodash = require('lodash')
let message = "Hello World";
//This is what we are doing here. We are calling the constant lodash and then we are using 
let foo = lodash.round(4.006,2)
//Example of another lodash function
let name = "robertIaboni"

name = lodash.upperFirst(name);

console.log(name);
///use these function from lodash
//lowerCase();
//upperCase();
//startCase();


console.log(lodash.lowerCase(name));
console.log(lodash.upperCase(name));
console.log(lodash.startCase(name));




//Console logs
// console.log(name);
// console.log(lodash.upperFirst(name));
// console.log(message);
// console.log(foo);

// const fixNames = (caps) => {
//     let result = caps.toLowerCase();
//     result = lodash.upperFirst(result);
//     return result;
// }

// console.log(fixNames(name));