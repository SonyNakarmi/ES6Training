import {PersonPrototype} from './ClassesModule';
import {Teacher} from './ClassesModule';

console.log('**** - Classes - ****');
// moved to ClassesModule.js class
// class PersonPrototype{
//     constructor(name){
//         this.name = name; // this always returns a reference to the current object
//     }

//     walk(){
//         console.log(`${this.name} walks ;)`);
//     }
    
// }

console.log('**** - Inheritance / Composition - ****');

const newPerson = new PersonPrototype('Sony');
newPerson.walk();

// moved to ClassesModule.js class
// class Teacher extends PersonPrototype {
//     constructor(name, degree){
//         super(name); // whenever we define a constructor in a child class, we need to call a constructor in its parent class
//         this.degree = degree;
//     }

//     teach(){
//         console.log("Teach");
//     }
// }

const TeacherObject = new Teacher('Sony','Graduate');
console.log(TeacherObject);
