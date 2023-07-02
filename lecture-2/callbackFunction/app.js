


// type 1-----------
// function a(fn){
//     console.log("inside a");
//     fn();
// }


// function b(){
//     console.log("inside b");
// }

// a(b);



// ------------ eg -----------

function checkString(item){
    return typeof item === 'string'
}

function checkBoolean(item){
    return typeof item === 'boolean'
}

function checkNumber(item){
    return typeof item === 'number'
}


function get(arr , fn){
    let result = []
    for(let item of arr){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}


let arr = [10,'sam', 20 , true , 40 , false , 'special 26'];

console.log(get(arr , checkNumber)) ;
console.log(get(arr , checkBoolean)) ;
console.log(get(arr , checkString)) ;
