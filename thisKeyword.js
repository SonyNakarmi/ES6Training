console.log('**** - this Keyword - ****');
const person = {
    name : "Sony",
    walk(){ // Every function in JavaScript is an object
        console.log(this); 
    },
    walk2(){
        console.log(this); 
    }
};

person.walk(); // when this keyword is called from a method in a object, then it will return reference to the object

const walk = person.walk;
walk(); // if we call function as a standalone object, outside the user defined object, it willr return the global window object i.e. window 
        //- if react project is in strict mode, it will return undefined

console.log('**** - Binding this Keyword - ****');

// We can bind a method to an object in JavaScript
// binding walk2 to person object
const walk2 = person.walk2.bind(person);
walk2();