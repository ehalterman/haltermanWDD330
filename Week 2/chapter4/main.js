//creating a function that takes a default argument
function square(number = 2){
    return number * number;
}
//testing function
console.log(square());
console.log(square(4));

//creating the same an arrow function
const arrowFunct = (number = 3) => number * number;

//testing arrow function
console.log(arrowFunct());
console.log(arrowFunct(5));

//callback function
function name(nam,callback) {
    console.log(`My name is ${nam}.`);
    callback();
}
function favorite(thing) {
    console.log(`My favorite thing is food!`);
}
console.log(name("elise", favorite));

//using functions on arrays
function mean(array) {
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}
const test = [2,5,3, 4];
console.log(mean(test));


