
// use var only when we need to use that variable within the function scope
console.log('**** - Variables - ****');
function sayHello(){
    // use let over var when needed accessibility is within the scope of the block where they are defined
    // use let over const when variable value need to be changed
    for(let i = 0; i< 5; i++){
         console.log(i);
    }
}

sayHello();

// use const for constants and their accessibility is within the block where they are defined
const x = 1;
