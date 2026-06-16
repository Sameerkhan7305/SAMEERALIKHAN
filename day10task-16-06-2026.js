// Copying Objects

// Normal Copy-- direcy assign


// let student1 = {name: "Sameer"};

// let student2 = student1;

// two vaiables refering to same object 



let student1 = {name: "Sameer"};

let student2 = student1;

student2.name = "Rahul";

console.log(student1.name);
console.log(student2.name);





let a = {name: "Sameer", age: 25 , city : "Hyderabad"}

console.log(a.name)

let b = a ;

b.city = "banglore";

console.log(a.city)
console.log(b.city)
console.log(a)
console.log(b)
// One Change = Both Change
































// Shallow Copy
// Top-level properties are copied. Nested objects are not




//  ---Spread Operator/


let st= { name: "Sameer",age: 25 };

let st2 = {  ...st};

st2.name = "Rahul";

console.log(st.name);
console.log(st2.name);



let B= { name :"Sam", age:30, gender : "Male"}

let A = { ...B};

A.age = 26

console.log(A);
console.log(B);

console.log(A.age);
console.log(B.age);


//now actual copy has been created 

let obj1 = {user: {  name: "Sameer"  } };

let obj2 = {...obj1};

obj2.user.name = "Rahul";

console.log(obj1)
console.log(obj2)
console.log(obj1.user.name);
console.log(obj2.user.name);

// Shallow Copy creates a new outer object but copies references of nested objects instead of cloning them.




let G = { name: "Sameer",  age: 25};

let GG =Object.assign({},G);

GG.name ="Rahul";

console.log(G);
console.log(GG);


let FP = {F:"Mango",F1:"Banana",F2:"Grape"}

let PF = Object.assign({},FP);

PF.F1= "Vegetable"

console.log(PF)
console.log(PF.F1)
console.log(FP)
console.log(FP.F1)





let PP = {F:"Mango",F1:"Banana",F2:"Grape",prices:  {F:220,  F1:344,  F2:545}};

let FF = Object.assign({},PP);

FF.F1= "Vegetable"

FF.prices.F2= 456

console.log(PP)
console.log(FF)

console.log(FF.prices.F2)
console.log(PP.prices.F2)




























// Deep Copy---Complete independent copy 


// structuredClone()


let f= {name: "Sameer",address: {city: "Bangalore"}};

let ff = structuredClone(f);

ff.address.city ="Hyderabad";

console.log(f.address.city);

console.log(ff.address.city);




let  m = { fruti1 : "oange" , fruit2 :"Mango" ,price :{ornage :250 , Mango:300}};


let mm = structuredClone(m);

mm.price.Mango= 350;

console.log(m.price.Mango)
console.log(mm.price.Mango)




let obj3 = { user: {     name: "Sameer"   }};

let obj4 =structuredClone(obj3);

obj4.user.name = "ali";

console.log(obj3.user.name);
console.log(obj4.user.name)




// Type	                               Copy Created                      	Nested Object
// Normal Copy                          	 No                              	Shared
// (One Change----Both Change)


// Shallow Copy	                        Top Level	                             Shared

// (Outer Object Copied---Nested Object Shared)



// Deep Copy	                         Complete	                              Copied
// (Everything Copied------Fully Independent)




let o = { name: "Sameer", address: {    city: "Bangalore" }};

let oo =JSON.parse(JSON.stringify(o));

oo.address.city ="Hyderabad";

console.log(o);
console.log(oo);



// let n = { name : "Mysore", state:"Karnataka",country:{I:"India"}}

// let c = JSON.stringify(n)

// n. country.I = "INDIA",

// console.log(c';)