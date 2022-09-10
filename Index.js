// function greetthestudent(studentname){


// const greeting = `Hello there ${studentname}`;
// return greeting;

// //const message = "Hello There";
// //const greeting = message + ' ' + studentname;
// //return greeting;
// }

// const student = "Deshraj Jogiya";

// const greet = greetthestudent(student);
// console.log(greet);


//console.log(message + " " + studentname1);
//console.log(message + " " + studentname2);


// const student ='Deshraj Jogiya';
// const greet = greetthestudent(student);//argument
// console.log(greet);

// function greetthestudent(studentname){//parameter
// return `Hello there ${studentname}`;

// }

// const greetthestudent = function(studentname){//parameter // anonymous function // expression
//     return `Hello there ${studentname}`;

// }

// const student = 'Deshraj Jogiya';
// const greet = greetthestudent(student);//argument
// console.log(greet);


// const greetthestudent = (studentname) =>//parameter // anonymous function // expression
//  `Hello there ${studentname}`;



// const student = 'Deshraj Jogiya';
// const greet = greetthestudent(student);//argument
// console.log(greet);


// const greetthestudent = studentname =>`Hello there ${studentname}`;

// const fullname =function (firstname, middlename, lastname){
// return `${lastname}, ${middlename}, ${firstname}`;
// }

// const titlename =fullname("Desharj", 'R', 'Jogiya');
// console.log(titlename);


const greetthestudent = studentname =>`Hello there ${studentname}`;

const fullname = (firstname, middlename, lastname) => `${lastname}, ${middlename}, ${firstname}`;

const titlename = fullname('Deshraj', 'R', 'Jogiya');
console.log(titlename);





//calling .json file and print it.
const students = require("./students.json");
  
console.log(students);
