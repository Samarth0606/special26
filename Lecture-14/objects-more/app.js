

// let obj = {
//     first: "samarth",
//     last: "vohra"
// }

// console.log(obj)
// // adding
// obj.age = 21;

// console.log(obj)

// // delete

// delete obj.last;

// console.log(obj);



// -----------------------


// let arr = [10,20,30]
// let num = [50,70,90,110]

// let ans = arr.concat(num); //possible

// console.log(ans);

// num = [...arr , 50,70,90,110 ];
// num = [...arr , ...num ];
// console.log(num);


// ------------------------

// let obj = {
//     first: "samarth",
//     last: "vohra"
// }

// let obj2 = {
//     ...obj,
//     age: 28,
//     favColor : 'black'
// }


// console.log(obj2.first);
// console.log(obj2.last);
// console.log(obj2.age);
// console.log(obj2.favColor);

// --------REST PARAMETER------------

// function sam(a,b,c , ...nums){
//     // console.log(a+b+c);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(nums);
// }

// let arr4 = [10,20,30,40,50,60]

// function sam(...arr  , ...nums){ //wrong
//     // console.log(a+b+c);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(nums);
// }

// console.log(Math.max(...arr4)) ;
// sam()

// ---------------destructure---------------------


let arr = ['samarth' , 'vohra','shubham'];
// console.log(arr[0])
// console.log(arr[1])

// let [first , second] = arr;
// let [first] = arr;
// let [first,second,third="coding"] = arr;

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(arr[2]) 

// console.log(arr)

// ----------------------------------------

let bro = {
    first: "bada bro",
    last : "chota bro",
    dost : "bro bro"
}

// console.log(bro)
// console.log(bro.first)
// console.log(bro.last)
// console.log(bro.dost)

let {first:shubham,last,dost}  = bro
// console.log(first) //error -> cannot access
console.log(shubham)
console.log(last)
console.log(dost)

console.log(bro.first)
