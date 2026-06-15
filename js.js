// forEach()


// forEach() Runs a function on each element of the array
let students = [
    "Sameer",
    "Rahul",
    "Ali"
];

students.forEach(function(student){

    console.log(student);

});





let alpha = ["apple","orange","leachy"]

alpha.forEach(function(a){
    console.log(a);
});




let cart = [
    "Mobile",
    "Laptop",
    "Watch"
];

cart.forEach(item => {

    console.log(
        "Product: " + item
    );

});





























// . Array.some()

// Does at least one element in the array satisfy the condition?


let marks = [
    80,
    90,
    20,
    70
];

let result =
marks.some(marks => marks < 35);

console.log(result);



let marks1 = [
    80,
    90,
    60
];

let result1 =
marks1.some(marks1 => marks1 < 35);

console.log(result1);































// Array.every()
// Do all the elements satisfy the condition?


let marks2 = [
    80,
    90,
    60
];

let result2 =
marks2.every(marks2 => marks2 >= 35);

console.log(result2);




let marks22 = [
    80,
    90,
    20
];

let result22 =
marks22.every(marks22 => marks22>= 35);

console.log(result22);

























// join()
// Joins all the elements of the array to form a string
let friends = [ "Sameer", "Rahul", "Ali"];

console.log(
friends.join()
);





let num1 = [4,5,6,7,8,4,3,]

console.log(num1.join( ))



let num12 = ["4","5","6","7","8","4","3",]

console.log(num12.join( ))


let num123 = ["4","5","6","7","8","4","3",]

console.log(num123.join(""))

let num13 = ["4","5","6","7","8","4","3",]

console.log(num13.join("-"))


let num132 = ["4","5","6","7","8","4","3",]

console.log(num132.join("|"))

























// sort()
// it will sorts the array 


let fruits = [
    "Banana",
    "Apple",
    "Mango"
];

fruits.sort();

console.log(fruits);


let frienz = ["sameer", "ali", "khan"];
frienz.sort();

console.log(frienz)


let numbers = [100,5,2];

numbers.sort();

console.log(numbers);

let numbers1 = [100,5,20];

numbers1.sort();

console.log(numbers1);



let numbers12 = [100,50,20];

numbers12.sort();

console.log(numbers12);



let numbers123 = [50,98,472819,839,38,0,1,2,2,3,4,5,6,7,8,9,0];

numbers123.sort();

console.log(numbers123);



let n = [90,80,70,60,50,40,30,20,10];
n.sort(
);
console.log(n);



let a=[23,20,7,15,7,5,34,33] //[ ]
a.sort((a,b)=>a-b);

console.log(a)



let a1=[23,20,34,33] //[ 20 - 23 34  ]
a1.sort((a,b)=>a-b);

console.log(a)


// wrong for numbers//JavaScript default sorts strings.





// Correct Number Sort
let number = [ 100, 5, 20];

number.sort((a,b)=>a-b);

console.log(number);



let n1 = [90,80,70,60,50,40,30,20,10];
n1.sort((a,b)=> a-b);
console.log(n1);



let n12 = [90,80,70,60,50,40,30,20,10];
n12.sort((a,b)=> b-a);
console.log(n12);
























let stud = [
    "Rahul",
    "Sameer",
    "Ali",
    "Sameer"
];

console.log(
stud.join(" | ")
);

console.log(
stud.indexOf("Sameer")
);

console.log(
stud.lastIndexOf("Sameer")
);

stud.sort();

console.log(stud);



























// map()
// Operates on each element of the array and returns a new array


let nu = [ 10, 20, 30];

let res = nu.map(num => num * 2);
console.log(res);





let o= [ 70,80,93]

let h = o.map( j => j * 2);

console.log(h)




let prices = [ 100, 200, 300];

let gstPrices = prices.map(price => price + 18);

console.log(gstPrices);





let studs = [ "sameer", "ali", "khan"];

let upper =
studs.map(name => name.toUpperCase());

console.log(upper);























// filter()

// Selects elements based on conditions. Returns only matching elements.




let ages = [   12,  18,  25, 15];


let adults =
ages.filter(age =>age >= 18);

console.log(adults);



let prices1 = [
    500,
    1500,
    700,
    2500
];

let expensive =
prices1.filter(price => price > 1000
);

console.log(expensive);



let pricse = [101,3890,839,3944,94576]

let highprices = pricse.filter(f=> f >=1000);

console.log(highprices)






























// reduce ()
// combining all the values ​​of the array and returns single value 

let nl = [  10, 20,   30];

let total =nl.reduce((acc,current)=>acc + current);

console.log(total);



let k = [2,3,4,,6,7,43443,6,545];

let combine = k. reduce( (a,b)=> a+b )

console.log(combine)



let f = [2,3,4,,6,7,43443,6,545];

let combined = f. reduce( (a,b)=> a*b )

console.log(combined)





let j = [  10,   50,  30,  80];

let max =j.reduce((a,b)=>a > b ? a : b);

console.log(max);


let m = ["give", "and", "take"]

let c = m.reduce((a,b) => a+b);
console.log(c)






















// Array Flattening


// Converting an array within an array into a single array

let data = [   [1,2],  [3,4]];

console.log(data.flat());




let nams = [["sameer", "ali"],["khan"]]

console.log(nams.flat())




let lam = [["sam"],["ali",["khan",["Age=26"]]],["nyb-employee"]]

console.log(lam.flat())






























// Removing Duplicates

// remving dupicates /


var dupe = [1,1,1,3,4,9,4,3,6,6,1]
console.log(dupe)

var dupe = [1,1,1,3,4,9,4,3,6,6,1]

var unique =[...new Set(dupe)];

console.log(unique);

















// sorting without sort()



let s = [
    5,
    2,
    8,
    1
];

for(let i=0;i<s.length;i++){

    for(let j=0;j<s.length-1;j++){

        if(s[j] > s[j+1]){

            let temp = s[j];

            s[j] =
            s[j+1];

            s[j+1] =
            temp;

        }
    }
}

console.log(s);