



// fucntional invokation --> window
function a(){
    console.log(this === window)
}
// a(); //functional invokation



// -----------------------------

let obj = {
    fun: function(){
        console.log(this === obj);
    }
}

// obj.fun(); //object invokation

// ----------------------

let obj2 = {
    fun: function(){
        console.log(this === obj2);
        console.log(this === window);
    }
}

let c = obj2.fun; //object invokation
// c();

// --------------
function Person(){
    this.username = 'samarth'
    this.fun = function(){
        console.log(this == Person);
        console.log(this == window);
    }
    // console.log(this === window);
}
let person1 = new Person();
let person2 = new Person();

// person1.fun() //false
let p1 = person1.fun
p1();
// console.log(person1.username) ;
// console.log(person2.username) ;
// console.log(this) //window

// function 