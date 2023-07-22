



let inpEl = document.querySelector('input')
let heading = document.querySelector('h1')
let btn = document.querySelector('button')

// inpEl.addEventListener('input' , function(e){
//     console.log(e)
// })


inpEl.addEventListener('keypress' , function(e){
    console.log(e.which)
    // if(e.which === 13){
    //     heading.innerText = e.target.value;
    // }
})
// btn.addEventListener('click' , function(){
//     heading.innerText = inpEl.value;
// })

