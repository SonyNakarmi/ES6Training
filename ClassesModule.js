console.log('**** - ClassesModule.js file - Modules - ****');
// to make class public - we use 'export' keyword infront of the class name
export class PersonPrototype{
    constructor(name){
        this.name = name; // this always returns a reference to the current object
    }

    walk(){
        console.log(`${this.name} walks ;)`);
    }
    
}

// To make class public to other files where its objects have been created, we use the 'export' keyword infront of the class
export class Teacher extends PersonPrototype {
    constructor(name, degree){
        super(name); // whenever we define a constructor in a child class, we need to call a constructor in its parent class
        this.degree = degree;
    }

    teach(){
        console.log("Teach");
    }
}