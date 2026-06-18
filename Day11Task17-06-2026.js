// for...in Loop


// The for...in loop is used to iterate over the properties (keys) of an object.


// Key 
let student = {name: "Sameer",age: 25,city: "Hyderabad"};

for(let key in student)
{console.log(key);}


let fruits = { A :"Banana", B:"Apple", C : "Grapes"}

for(let key in fruits)

console.log(key)





let fruit = { A :"Banana", B:"Apple", C : "Grapes"}

for(let key in fruit)

console.log(key , fruit[key])





let k = { name: "Sameer", age: 25};

for(let key in k)

{console.log(  key,  k[key] );}




let mobile = {brand: "Samsung", ram: "8GB", price: 25000};

for(let key in mobile){console.log(  key +   " : " +     mobile[key] );}







// Date Object

// The Date object is used to work with dates and times.

// Current Date & Time
let today = new Date();
console.log(today);



// Current Year
let today1 = new Date();

console.log(today1.getFullYear());


// Current Month
let today2 = new Date();

console.log(today2.getMonth());



// January = 0

// February = 1

// March = 2
// ...
// June = 5


// Current Day

let today3 = new Date();
console.log(today3.getDate());

// getFullYear()

// getMonth()

// getDate()

// getDay()

// getHours()

// getMinutes()

// getSeconds()



let now = new Date();

console.log(
now.getHours()
);

console.log(
now.getMinutes()
);

console.log(
now.getSeconds()
);





// Math Object

// The Math object provides mathematical constants and methods.


// The Math object provides built-in mathematical methods and constants for performing calculations.










// Math.round()----gives nearest whole number


console.log( Math.round(4.2));


console.log(  Math.round(4.8));










// Math.floor()

// it all ways gives before low number or . before number 


console.log(
    Math.floor(4.9)
);


console.log(
    Math.floor(4.1)
);





// 3. Math.ceil()
// all way gives the above number .\



console.log(
    Math.ceil(4.1)
);   


// Output

// 5




// Difference
// round()

// 4.4 → 4

// 4.5 → 5

// ----------------

// floor()

// 4.9 → 4

// ----------------

// ceil()

// 4.1 → 5








// Math.random()

// always genrates the random number 

console.log(
    Math.random()
);



let number =
Math.floor( Math.random() * 10) + 1;

console.log(number);


let random = Math.floor(Math.random() * 100) + 1

console.log(random)










// Math.max()

// gives the maximun number from the variable \\\\


console.log(
    Math.max(
        10,
        50,
        30
    )
);


// Math.min()

console.log(
    Math.min(
        10,
        50,
        30
    )
);



// Math.sqrt()

console.log(
    Math.sqrt(25)
);


// Math.pow()

console.log(  Math.pow(  2,    3 ));






let marks = [
    50,
    90,
    75
];

console.log(
    Math.max(...marks)
);

console.log(
    Math.min(...marks)
);

console.log(
    Math.round(4.7)
);

console.log(
    Math.sqrt(64)
);





// Math.round()

// ↓

// Nearest Whole Number

// --------------------

// Math.floor()

// ↓

// Always Down

// --------------------

// Math.ceil()

// ↓

// Always Up

// --------------------

// Math.random()

// ↓

// Random Number

// --------------------

// Math.max()

// ↓

// Largest Number

// --------------------

// Math.min()

// ↓

// Smallest Number

// --------------------

// Math.sqrt()

// ↓

// Square Root

// --------------------

// Math.pow()

// ↓

// Power





// The String object provides methods to create, manipulate, and work with text data.

// length()

// It counts the total characters in a string.


let nm = "Sameer";

console.log(nm.length);


let bb = " jsjdajdoadijisjdiascoahoananohqohoq"

console.log(bb.length);









// toUpperCase()

// it will covert to capital letter 


let l = "sameer";

console.log(  l.toUpperCase());





// 3. toLowerCase()


// capial letters to small letters 


let ne = "SAMEER";

console.log(
    ne.toLowerCase()
);



// includes()

// to check where it include the value which is given and gives true or false



let email =
"sameer@gmail.com";

console.log(
email.includes("gmail")
);



// slice()
// it will remove some par of the string /

let x = "Indian"
console.log(x.slice(0,5))



let y = "Sameer";

console.log(
name.slice(0,4)
);




// trim()

// it will remove the Start aur end ke extra spaces 
// 
let m =
"   Sameer   ";console.log(name.trim());





// replace()
// it will replace the one value to other 



let message =
"Hello Sameer";

console.log(
message.replace(
"Sameer",
"Rahul"
)
);


// Template Strings
// Template literals allow embedding variables and expressions inside strings using backticks ( ).


// old way 
let name = "Sameer";

console.log("Hello " + name);


// new way es6
let n = "Sameer";

console.log(`Hello ${name}`);


let n1 = "Sameer";

let age1 = 25;

console.log(`My Name Is ${n1}And I Am ${age1}`);



let a = 10;

let b = 20;

console.log(`Total = ${a+b}`);



let F = "Java";
let V = "Script";


console.log(`i am learning ${(F)}${(V)} today`)



let student1 = "Sameer";
let course = "JavaScript";
let fee = 5000;

console.log(`Student Name: ${student1}  Course: ${course}   Fee: ₹${fee}`);




