
// constructor

// function sam(cb){
//     setTimeout(function(){
//         let data = "hello from constructor";
//         cb(data , null);
//     } , 4000)
// }


// sam(function(data , error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })

// --- promise ---

// let mypromise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let data = "hello from promise";
//         let error = "merese nahi hoga";
//         reject(error);
//         resolve(data);
//     } , 4000)
// })
// mypromise.then(function(d){
//     console.log(d);
// }).catch(function(err){
//     console.log(err);
// })

// ------- instagram -------


let step1 = function(){
    return new Promise(function(resolve , reject){
        console.log('selecting image');
        setTimeout(function(){
            resolve('photo selected')

        } , 2000)
    })
}

let step2 = function(image){
    return new Promise(function(resolve , reject){
        console.log(`applying filter on ${image}`);
        setTimeout(function(){
            resolve('filter applied on the photo')
        } , 4000)
    })
}

let step3 = function(filter){
    return new Promise(function(resolve , reject){
        console.log(`adding caption on ${filter}`);
        setTimeout(function(){
            resolve('caption added')
        } , 2000)
    })
}

let step4 = function(){
    return new Promise(function(resolve , reject){
        console.log('uploading photo');
        setTimeout(function(){
            resolve('photo uploaded successfully')
        } , 5000)
    })
}


// step1()
// .then(function(image){
//     console.log(image);
//     step2(image).then(function(filter){
//         console.log(filter)
//     })
// })


step1()
.then(function(image){
    console.log(image);
    return step2(image)
})
.then(function(filter){
    console.log(filter);
    return step3(filter)
})
.then(function(caption){
    console.log(caption);
    return step4()
})
.then(function(final){
    console.log(final);
})


