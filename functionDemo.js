// var age = 10;
// var slary =15.00

// console.log(`the variable type of age is ${typeof age}`);
// console.log(`the variable type of salary is ${typeof slary}`);

// var name = 'Deshraj Jogiya';
// console.log(`the variable type of name is ${typeof name}`);

// const displaygreetings = function(name, year){
//     console.log(`happy new year ${year} ${name}`)
// }

// console.log(`the variable type of displaygreetings is ${typeof displaygreetings}`);


// var age = 10;
// var slary =15.00

// const displaygreetings = function(name, year){
//     console.log(`happy new year ${year} ${name}`)
// }

// const displaygreetingswithemoji = function(name, year){
//     console.log(`🥳🥳happy new year ${year} ${name}🥳🥳`)
// }

// var greet ={};

// if(age > 10){
//     greet = displaygreetings;
// }
// else{
//     greet = displaygreetingswithemoji;
// }

// greet('Deshraj Jogiya', 2022);

const displaygreetings = function(name, year){
    console.log(`happy new year ${year} ${name}`)
}


const displaygreetingswithemoji = function(name, year){
        console.log(`🥳🥳happy new year ${year} ${name}🥳🥳`);
 }

 const greet = function(name, year, func){
    func(name, year);
 }

 greet('Dripraj Jogiya', 1995, displaygreetings);
 greet('Deshraj Jogiya', 2000, displaygreetingswithemoji);