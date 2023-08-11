



// let obj = {
//     name:"samarth",
//     fn: function(a,b,c){
//         console.log(this,a,b,c)
//     }
// }

// let obj2 = {
//     name:"sam"
// }

// console.log(obj.name);

// obj.fn(1,2,3);


// ------------------------------------

// -> JS is OOPS program lang -> call & apply ki vajah se polymorphism hota hai. (interview)


// obj.fn() 
// call  -> this hamesha point krega jo aapne call ke andar value di hai usko
// the arguments it accept will always be a generic argument
// obj.fn.call(obj2)
// obj.fn.call(obj2 , 1 , 2 , 3)


// apply -> this hamesha point krega jo aapne apply ke andar value di hai usko
// the arguments it accept will always be an array
// obj.fn.apply(obj2)
// obj.fn.apply(obj2 ,[ 1 , 2 , 3 ])




// -------- bind -------- 

let obj3 = {
    a:10,
    fn: function(){
        console.log(this)
    }
}

// obj3.fn();

let myfunc = obj3.fn.bind(100)  //bind -> function assign karna & not call/run karna

myfunc();









