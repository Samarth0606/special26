

// constructor
// function Person(firstName , lastName , email ){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
// }

// Person.prototype.printName = function(){
//     console.log(`MY NAME IS ${this.firstName} ${this.lastName}`)
// }
// Person.prototype.getName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// let person1 = new Person('samarth' , 'vohra' , 'sam@gmail.com');
// let person2 = new Person('Deepank' , 'sharma' , 'deepank@gmail.com');

// console.log(person1);
// console.log(person2);

// --------------------------------
// class syntax

class Person{
    // properties
    constructor(firstName , lastName , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    // methods
    getName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let person3 = new Person('harsh' , 'raj' , 'harsh@gmail.com');
let person4 = new Person('lakshit' , 'khanna' , 'lakshit@gmail.com');

// console.log(person3);
// console.log(person4);


// case 1 (very bad way)
// class Student{
//     // properties
//     constructor(firstName , lastName , email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }
//     // methods
//     getName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// inheritance
// class Student extends Person{}

// let person5 = new Student('lionel' , 'messi' , 'messi@gmail.com')
// console.log(person5);




// inheritance with extra self properties


class Student extends Person{
    constructor(firstName , lastName , email , batch){
        super(firstName , lastName , email); //inherit
        this.batch = batch;
    } 
    // override method
    getName(){
        return `my full name is ${this.firstName} ${this.lastName}`
    }
}
 
let person6 = new Student('asif' , 'khan' , 'asif@gmail.com' , 'illu-no');
console.log(person6);
console.log(person6.getName());





