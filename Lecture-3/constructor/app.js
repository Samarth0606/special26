



// function user(){

// }
// let user1 = user();
// console.log(user1);

// --------constructor---------

// function user(){

// }
// let user1 = new user();
// console.log(user1);


// ----------------

function User(){
    this.username = 'samarth',
    this.getName = function(){
        return `you name is ${this.username}`
    }
}

let user1 = new User();
let user2 = new User();
// console.log(user1);


// user2.__proto__ === User.prototype
// true
// user2.__proto__.__proto__ === Object.prototype
// true
// user2.__proto__.__proto__.__proto__ === null
// true



// -------------------
// function User(name){
//     this.username = name
// }

// User.prototype.getName = function(){
//     return `you name is ${this.username}`
// }

// let user1 = new User('samarth'); 
// console.log(user1);
// console.log(user1.username) 
// console.log(user1.getName()) ;

// let user2 = new User('harsh');
// console.log(user2);
// console.log(user2.getName());






