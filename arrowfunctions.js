

console.log('**** - Arrow Functions - ****');
// traditional functions in JavaScript
// const square = function(number){
//    return  number * number;
// }


// Arrow function equivalent of above normal function
const square = number => number * number; 
console.log(square);

// Use of Arrow functions 
const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
]

//const activeJobs = jobs.filter(function(job){return job.isActive;});
const activeJobs = jobs.filter(job=>job.isActive);
const count = activeJobs.length;
console.log(count);

// while(count > 0 ){
//     console.log(`Active Jobs are - ${activeJobs[count].id}`);
//     count--;
// }

console.log('**** - Arrow Functions and this - ****');


const person2 = {
    talk(){
        var self = this; // variable to bind object to this and use in standalone function
        setTimeout(function(){ // this is a standalone function that references this keyword to window object
            console.log('standalone timeout function: ');
            console.log(self);
        },1000);
        console.log('object function: ',this);

        setTimeout(() => { // arrow functions don`t rebind this keyword and takes this pointing to object within which it is called
            console.log(this);
        },1000);
    }
}
person2.talk();