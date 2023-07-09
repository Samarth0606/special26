



// console.log('start');

// setTimeout(function(){
//     console.log('after 2 secs')
// } , 2000)

// setTimeout(function(){
//     console.log('after 4 secs')
// } , 4000)

// for now -> total time - > 4s

// but i want 6 le

//wrong appraoch --->
// console.log('start');

// setTimeout(function(){
//     console.log('after 2 secs')
// } , 2000)

// setTimeout(function(){
//     console.log('after 4 secs')
// } , 6000)


// right approach ----->

// instagram 

function step1(fn){
    console.log('selecting your picture please wait...')
    
    setTimeout(function(){
        console.log('picture selected !');
        fn('selected picture'); //fn calling
    } , 3000)
}

function step2(image , fn){
    console.log(`applying filter to ${image} please wait...`);

    setTimeout(function(){
        console.log('filtered the image please move ahead !');
        fn('filtered image')
    } , 2000)
}

function step3(filteredImage , fn){
    console.log(`adding caption to the ${filteredImage}`);

    setTimeout(function(){
        console.log(`caption is apllied on ${filteredImage} please go forward `);
        fn('filtered image with caption');
    } , 5000)
}

function step4(finalImage){
    console.log(`uploading you ${finalImage} please wait a while..`);

    setTimeout(function(){
        console.log(`${finalImage} is finally uploaded , thankyou!`);
    } , 4000)
}


step1(function(image){
    step2(image , function(filteredImage){
        step3(filteredImage , function(finalImage){
            step4(finalImage);
        });
    });
});


