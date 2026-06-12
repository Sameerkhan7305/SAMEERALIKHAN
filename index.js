// An Array is a special variable used to store multiple values in a single variable


// Problem Without Array
// let student1 = "Sameer";
// let student2 = "Rahul";
// let student3 = "Aman";
// let student4 = "Khan";
// let student5 = "Ali";



// Solution - Array
let students = ["Sameer","Rahul","Aman","Khan","Ali"];

console.log(students)


// how to access the arrey item using index values 
// it starts with 0 and ends with n-1 


let alpha = ["a", "b", "c" , "d ", "f" ];
console.log(alpha[0])

//         Index       Value

//            0        a

//            1        b

//            2        c.....







// example

let students11 = ["Sameer","Rahul","Aman","Ali"];

console.log(students11[0]);
console.log(students11[1]);
console.log(students11[2]);
console.log(students11[3]);




// Array Length
// this will show the length of the array 

let cart = [
    "Mobile",
    "Laptop",
    "Watch",
    "Earbuds"
];

console.log(cart.length);


/////////////////////////////////////////////////////////////////////

// changing values or modifing 

let vegis = ["tamato", "carror", "chillie"];

vegis[1] = "Orange";

console.log(vegis);

/////////////////////////////////////////////////////////////////////////////


// Array Can Store Different Data Types
let data = ["Sameer",25,true,null];

console.log(data);

////////////////////////////////////////////////////////////////////////////////

// Adding Elements To Array  ///push()  // it will add element at the end  

let songs = ["Song 1","Song 2","Song 3"
];

songs.push("Song 4");// it will add element at the end 

console.log(songs);


let singer = ["yo" ,"yo" , "honey",]

singer.push( "singh")// it will add element at the end 


console.log(singer)

//////////////////////////////////////////////////////////////////////

// Adding element in the Beginning with the help of unshift()

// unshift()

let company = ["infotech","Company"];

company.unshift("NYB");
console.log(company)



let messages = [
    "Hi",
    "How Are You"
];

messages.unshift("Good Morning");

console.log(messages);

///////////////////////////////////////////////////////////////////////////////////


// Adding element at Any Position with the help of splice 

// splice()


let persons= [
    "Sameer",
    "Rahul",
    "Aman"
];

persons.splice(1,0,"Ali");

console.log(persons);

//    splice(1,0,"Ali");
//     Index value= 1

//     Deletecount = 0

//     Add New  = Ali


    ////["0","1","2","3","4","5"]; index value 
let n = ["a","b","c","d","l","m"];
console.log(n)

n.splice(3,0,"new d")

console.log(n)

n.splice(6,3,"new m")
console.log(n)


n.splice(6,3,"new 3")
console.log(n)



n.splice(1,3,"new 3")
console.log(n)
//////////////////////////////////////////////////////////////


// Removing Elements From Arrays
//Removing from end using Pop()

// pop()


let name= ["Sameer","Ali","Khan","M"];

name.pop();

console.log(name);

// removing from starting of array 

let queue = [
    "Person1",
    "Person2",
    "Person3"
];

queue.shift();

console.log(queue);

// removing from any position 

let stud= [
    "Sameer",
    "Rahul",
    "Ali",
    "Aman"
];

stud.splice(2,1);

console.log(stud);
/////////////////////////////////////////////////

// Multidimensional Arrays
let classes = [

    ["Sameer","Rahul"],

    ["Ali","Aman"]

];

console.log(classes);
/////////////
let classes1 = [["Sameer","Rahul"],["Ali","Aman"]];

console.log(classes1[0][0]);
console.log(classes1[0][1]);
console.log(classes1[1][0]);
console.log(classes1[1][1])


let friend = ["sameer","khan",["age","male",["25","30"]]]

console.log(friend[0])
console.log(friend[2])
console.log(friend[2][0])
console.log(friend[2][2])
console.log(friend[2][2][0])

/////////////////////////////////////////////////


// includes() check wheather the element present in the array 

let guests = [ "Sameer","Rahul","Ali"];

console.log(guests.includes("Sameer"));


let p = ["A","B","C"]
console.log(p.includes("C"))
console.log(p.includes("d"))



// indexof gives the index position of the element and it dont find the element in the array it gives -1

let clas = ["Sameer","Rahul","Ali","Aman"];

console.log(clas.indexOf("Sameer"))
console.log(clas.indexOf("Sam"))

///
/////////////////////////////////////////////////////////////

//  lastindexof()
// lastindexof will return the index of last occurence of the element 

let numbers = [10,20,30,20,50];

console.log(numbers.lastIndexOf(20));



let m = [9,9,9,0,0,2,4,6,8,88];
console.log(m.lastIndexOf(9));
console.log(m.lastIndexOf(88));
console.log(m.lastIndexOf(0));
console.log(m.lastIndexOf(5));
////////////////////////////////////////////////////////////////



// Making Array Empty

let fruitz = [
    "Apple",
    "Mango"
];

// fruits.length = 0;

console.log(fruitz.length);




let fruitss=["mango", "apple", "banana"];

fruitss.length=0
console.log(fruitss.length)

console.log(fruitss);


let fruitss1=["mango", "apple", "banana"];

fruitss1.length=2
console.log(fruitss1.length)

console.log(fruitss1);






















