
// way 1
// function square(num){
//     return num * num 
// }

// let ans = square(5);
// console.log(ans)


// way 2
// let square = (num)=>{
//     return num * num 
// }

// way 3
// let square = (num)=> num * num 


// way 4
// let square = num => num * num 

// let ans = square(5);
// console.log(ans)



// this keyword

// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this);
//     }
// }
// obj.fn();

// -------

// let obj2 = {
//     a:10,
//     fn: ()=>{
//         console.log(this)
//     }
// }
// obj2.fn();


let obj3 = {
    b:100,
    fn: function(){
        // console.log(this);
        const fun = ()=>{
            console.log(this);
        }
        fun();
    }

}

obj3.fn();