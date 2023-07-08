

// function a(){
//     let b= 10;
//     function c(){
//         console.log(b);
//     }
//     c();
// }


// a();
// ------closure----------

// function a(){
//     let b = 10;
//     function c(){
//         console.log(b);
//     }
//     return c;
// }


// let d = a();    
// d();


// -------------use case --------


function counter(){
    let count = 0;
    return {
       getCount: function(){
        return count;
       } ,
       increment: function(){
        count++;
       } , 
       decrement: function(){
        count = count-1;
       },
       reset: function(){
        count=0;
       }
    }
}

let c = counter();
// console.log(c);
// let d = c.getCount();
console.log(c.getCount());
c.increment(); //1
c.increment(); //2
c.increment(); //3
console.log(c.getCount());
c.decrement(); //2
console.log(c.getCount());
c.reset(); //0
console.log(c.getCount());

