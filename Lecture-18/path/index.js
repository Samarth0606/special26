const path = require('path');


// let ans1 = path.join('abc' , 'def' , 'ghi' , 'jkl');

// let ans2 = path.join('abc///' , '///def///' , '///ghi///' , '///jkl');
// console.log(ans2)




let ans3 = path.join(process.cwd() , 'path' , 'index.js')
console.log(__dirname)
console.log(ans3)