

const fs = require('fs');

let data = "hi my name is samarth 2";

// write
// fs.writeFile('abc.txt' , data , {
//     encoding:'utf-8',
//     flag:'w'

// } , (err)=>{
//     if(err){throw err}

//     console.log("file written successfully")
// } )

// fs.writeFile('def.txt' , data , (err)=>{
//     if(err){throw err}

//     console.log("file written successfully")
// } )

// read

// fs.readFile('abc.txt' , {
//     // encoding: 'utf-8', //defaut -> null
//     // flag:'r'
// } ,  (err , data)=>{
//     if(err){throw err}
//     console.log(data.toString())
//     // console.log(data)
// })


// update

// fs.appendFile('abc.txt' , ' special 26 web' , {} , 
// (err)=>{
//     if(err){throw err}
//     console.log("file written successfully")

// } )

// fs.appendFileSync('abc.txt', 'web ke dhurndar')


// delete

fs.unlink('abc.txt' , (err)=>{
    if(err){throw err}
    console.log("file deleted successfully")
})