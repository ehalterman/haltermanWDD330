//Chapter 5 objects test code

//Object literal
const mom = {
    name: 'mom',
    job: 'school',
    married: true,
    age: 28,
    kids: ['Sage', 'Gavin'],
    superpower() {
        return 'Needs no sleep.';
    }
};
console.log(mom.age);
console.log(mom["name"]);

//computed properties
//symbol
const hairColor = Symbol('hairColor');
mom.hairColor = 'Brown';
console.log(mom.hairColor);

//check if a property or method exists

console.log('married' in mom);

//printing all properties

for(const key in mom) {
    if(mom.hasOwnProperty(key)){
        console.log(key + ": " + mom[key]);
    }
}

//changing properties
mom.age = 29;
console.log(mom.age);

//removing properties
delete mom.married;
console.log('married' in mom);

//passing objects into functions (don't forget to use backticks when using variables in strings)
function favoriteFood({candy,dessert,dinner}){
    return `I love ${candy} candy, ${dessert} with milk, and want ${dinner} for dinner`
}
console.log(favoriteFood({candy:'sour', dessert: 'cookies', dinner: 'asian'}));

//this

const dad = {
    hoursOfSleep: 7,
    guess() {
        return Math.floor(this.hoursOfSleep * Math.random()) + 1;
    }
}
console.log(dad.guess());

//JSON (feels weird to do this all here instead of getting the JSON from somewhere else)
const daddad = {"name": "dad", "realName": "Lon", "job": "Cop", "age": 29};
//JSON.parse(daddad);
//above line is getting an error. 
//I think it's because JSON needs to pull the info from a different source to parse it.

//Math methods
console.log(Math.round(Math.PI));
//Math.random see line 54 for hours of sleep

//current date
const day = new Date();
console.log(day.toString());
const christmas = new Date(2020, 12, 25);
console.log(christmas.getDate());

//RegExp
const animal = 'giraffe';
const pattern = new RegExp(animal);
console.log(pattern.test('giraffe'));
const pattern2 = new RegExp('[aeiou]+l+[aeiou]+s+[aeiou]');
console.log(pattern2.test('elise'));
console.log(pattern2.test('elite'));

//string methods
console.log('Sage Halterman'.split(/\s+/));




