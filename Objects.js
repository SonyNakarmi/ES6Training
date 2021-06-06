console.log('**** - Objects - ****');
// Person is an object
// Person object with 3 members - One Property and 2 methods
const person = {
    name: 'Sony',
    walk: function(){}, // walk is a function/method in person object
    talk(){} // new way of writing functions is ES6
};

// ways to access these members 

// 1. Dot Notation
person.talk();

// 2. Bracket Notation
// We use this method when we get value from form and want to dynamicallya access that property
person['walk'] = 'John';// string inside square brackets refect to name of the method/property