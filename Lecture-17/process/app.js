// console.log(process.argv)


// let arr = process.argv;
// let ans = arr.slice(2);
// console.log(ans)


// for( let item of ans){
//     console.log(`hello from ${item}`)
// }

// ---------------------------


// console.log(process.cwd());
// console.log(__dirname);


// -------------------------

// let n = process.argv.pop();
// console.log(n)


// for( let i =1; i<=n; i++){
//     console.log(i);
// }


// ----------BAD APPROACH-----------

// let n = process.argv.pop();

// function fizzbuzz(n){
//     for(let i = 1; i<= n; i++){
//         if(i%3 == 0 && i%5 == 0){
//             console.log('fizzBuzz')
//         }
//         else if(i%3 == 0){
//             console.log('fizz')
//         }
//         else if(i%5 == 0){
//             console.log('buzz')
//         }
//         else{
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(n);

// -------------GOOD------------

let n = process.argv.pop();


function fizzbuzz(n){
    let cnt3 = 1;
    let cnt5 = 1;

    for(let i = 1; i<= n; i++){
        let str = "";
        if(cnt3 == 3){
            str += "fizz"
            cnt3 = 0;
        }
        if(cnt5 == 5){
            str += "buzz"
            cnt5 = 0;
        }
        if(str == ""){
            str += i;
        }
     
        console.log(str);
        
        cnt3++;
        cnt5++;
    }
}

fizzbuzz(n);


