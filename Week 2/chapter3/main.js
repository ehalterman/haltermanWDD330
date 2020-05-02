//preferred method
let arrayOne = ["Sage", "Gavin"];
//other method
let arrayTwo = new Array(1);
arrayTwo[0] = "Sage";
arrayTwo[1] = "Gavin";

//checking my work
console.log(arrayOne);
console.log(typeof arrayTwo);
console.log(arrayOne[2]);

//adding a value
arrayOne[2] = "Future kid"
console.log(arrayOne);

//deleting value
delete arrayOne[2];
console.log(arrayOne);

//destructring arrays
const [Sage, Gavin] = [1,2];
console.log(Sage);

//array properties and methods
console.log(arrayTwo.length);
console.log(arrayTwo[arrayTwo.length - 1]);
arrayOne.length = 3
console.log(arrayOne);
arrayOne.pop();
console.log(arrayOne);
arrayOne.shift();
console.log(arrayOne);
//push() adds to the end of the list, unshift() adds to the beginning
arrayOne.unshift("Sage");
console.log(arrayOne);
//merging arrays
//concat did not work?
arrayOne.concat(["three", "four"]);
console.log(arrayOne);
delete arrayOne[3];
delete arrayOne[2];
console.log(arrayOne);
//join not working? unsure why. tried switching from const to let but still doesn't work
arrayOne.join('&');
console.log(arrayOne);
//splicing slicing finding values
const numArray = [1,2,3,4,5];
console.log(numArray);
console.log(numArray.slice(1,3));
numArray.splice(2, 1, "three");
console.log(numArray);
console.log(numArray.reverse());
console.log(numArray.sort());
console.log(numArray.indexOf(4));
console.log(numArray.indexOf(8));
console.log(numArray.includes("three"));

//multidimentional arrays
const spring = ["March", "April", "May"];
const fall = ["September", "October", "November"];
const nested = [ spring, fall ];
console.log(nested);
const flat = [...spring, ...fall];
console.log(flat);

//sets
const setPractice = new Set();
setPractice.add(10);
console.log(setPractice);
setPractice.add(11).add(12).add(13);
console.log(setPractice);
//sets do not have duplicates
const setPractice2 = new Set([1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4]);
console.log(setPractice2);
//unless they are added as non-primitive values (objects) or mixed types
setPractice2.add("1").add([1]).add([2]).add([2]);
console.log(setPractice2);

//set methods
const dogs = new Set().add("Toby").add("Bear").add("Kylo");
//error, says size() isn't a function?
//console.log(dogs.size());
console.log(dogs.has("Cocoa"));
dogs.delete("Toby");
console.log(dogs);
//convert to array
const dogsArray = [...dogs];
console.log(dogsArray);

//Maps (like a dictionary)
const firstLastNames = new Map();
firstLastNames.set("Heather", "Kelsey").set("Chad", "Jones").set("Rachelle","Hurd");
console.log(firstLastNames);
console.log(firstLastNames.get("Chad"));
firstLastNames.delete("Rachelle");
console.log(firstLastNames);

//if statements
if (1 < 2) {
    console.log("one is less than two");
} else {
    console.log("this is my else statement")
}
//ternary operator
1<2 ? console.log("ternary one is less than two") : console.log("ternary else statement");
//switch (don't forget breaks)
const name = "Sage";
switch (name) {
    case "Sage":
        console.log("your name is Sage");
        break;
    case "Mom":
        console.log("your name is mom");
        break;
    case "Gavin":
        console.log("your name is Gavin");
        break;
    default:
        console.log("you have a name");
        break;
}

//while loops 
/**
 * originally I had this as an infinite loop
 * and forgot to terminate with number++
 * it crashed my window and froze my machine
 * ALWAYS have a way to terminate a loop
 */
let number = 17;
while (number < 20) {
    console.log("number is less than 20");
    number++;
}
//do while loop
let num = 17;
do{
    console.log("number is less than 20");
    num++;
} while( num < 20 )
//for loop
for (let kids = 9; kids > 0; kids--) {
    console.log(`You still have ${kids} at home`);
}
for ( let i=0, max=arrayOne.length; i < max; i++){
    console.log(arrayOne[i]);
}
//set loop - the second e doesn't show up because sets don't have duplicates
const nameLetters = new Set("elise");
for(const letter of nameLetters) {
    console.log(letter);
}

