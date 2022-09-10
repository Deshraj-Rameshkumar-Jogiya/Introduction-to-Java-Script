// var student ={
//     name: 'Deshraj Jogiya',
//     birthyear: 2000,
//     course: 'IFT458/598',
//     grades: 100,
//     age: function(){
//         return 2022 - this.birthyear;
//     }
// }

// var student1 ={
//     name: 'Dripraj Jogiya',
//     birthyear: 1995,
//     course: 'IFT458/598',
//     grades: 80,
//     age: function(){
//         return 2022 - this.birthyear;
//     }
// }
// console.log(student.name);
// console.log(student.age());
// console.log(student1.name);
// console.log(student1.age());


// var student ={
//     name: 'Deshraj Jogiya',
//     birthyear: 2000,
//     course: 'IFT458/598',
//     grades: 100,
//     age: ()=> 2022 - this.birthyear    
// }


// var student1 ={
//     name: 'Dripraj Jogiya',
//     birthyear: 1995,
//     course: 'IFT458/598',
//     grades: 80,
//     age: ()=> 2022 - this.birthyear
// }

// console.log(student.age());
// console.log(student1.age());


// var student ={
//     name: 'Deshraj Jogiya',
//     birthyear: 2000,
//     course: 'IFT458/598',
//     grades: 100,
//     active: true,
//     age: function calcukate(){
//         if(this.active){
//             return 2022 - this.birthyear;
//         }
//     }
// }

// var student1 ={
//     name: 'Dripraj Jogiya',
//     birthyear: 1995,
//     course: 'IFT458/598',
//     grades: 80,
//     active: false
//     age: function calcukate(){
//         if(this.active){
//             return 2022 - this.birthyear;
//         }
//         else{
//             return 0;
//         }
//     }
// }

// console.log(student.age());
// console.log(student1.age());

var students = [];

var student = {
    name: 'Deshraj Jogiya',
    birthyear: 2000,
    course: 'IFT458/598',
    grades: 100,
    active: true,
    age: function() {
        if(this.active){
            return 2022 - this.birthyear;
        }
    }
}

var student1 = {
    name: 'Dripraj Jogiya',
    birthyear: 1995,
    course: 'IFT458/598',
    grades: 80,
    active: false,
    age: function() {
        if(this.active){
            return 2022 - this.birthyear;
        }
        else{
            return 0;
        }
    }
}

students.push(student);
students.push(student1);
console.log(students);
students.forEach((item)=> console.log(item.age()));