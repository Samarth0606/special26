

// let arr = [10,20,30,40,50];

// for-each method

// arr.forEach(function(item,index){
//     // console.log(item);
//     console.log(`the index of ${item} is ${index}`)
// })


// --- map() ---

// let newArray  = arr.map(function(item){
//     return item * 2;
// })

// console.log(arr)
// console.log(newArray)


// --- filter() -----

let arr = [1,2,3,4,5,6,7,8,9,10];

let filteredArray = arr.filter(function(item){
    // case 1----
    // if(item%2 === 0){
    //     return true;
    // }
    // case 2----
    // if(item >=0){
    //     return true
    // }
    // case 3----
    if(item >10){
        return true;
    }
    else{
        return false;
    }
})


console.log(arr)
console.log(filteredArray)
