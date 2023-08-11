let grandParent = document.getElementById('grandParent')
let parent = document.getElementById('parent')
let child = document.getElementById('child')



// default useCapture -> false

// grandParent.addEventListener('click' , function(){
//     console.log("inside the grand parent")
// })

// parent.addEventListener('click' , function(){
//     console.log("inside the parent only")
// })

// child.addEventListener('click' , function(){
//     console.log("inside the child element")
// })


// override the useapture -> true

// grandParent.addEventListener('click' , function(){
//     console.log("inside the grand parent")
// } , true)

// parent.addEventListener('click' , function(){
//     console.log("inside the parent only")
// } , true)

// child.addEventListener('click' , function(){
//     console.log("inside the child element")
// } , true)


// ------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("inside the grand parent")
// } , true)

// parent.addEventListener('click' , function(){
//     console.log("inside the parent only")
// } , false)

// child.addEventListener('click' , function(){
//     console.log("inside the child element")
// } , true)


// ---------------------------
// stopping the lifecycle

// e.preventDefault -> default beh ko rokna hota hai

// e.stopPropagation -> aage vaale cycle mei jaane se rok deta hai


// capturing - stopPropagation()

// grandParent.addEventListener('click' , function(e){
//     e.stopPropagation();
//     console.log("inside the grand parent")
// } , true)

// parent.addEventListener('click' , function(e){
//     // e.stopPropagation();
//     console.log("inside the parent only")
// } , true)

// child.addEventListener('click' , function(){
//     console.log("inside the child element")
// } , true)


// bubbling - stopPropagation()

// grandParent.addEventListener('click' , function(e){
//     // e.stopPropagation();
//     console.log("inside the grand parent")
// } , false)

// parent.addEventListener('click' , function(e){
//     // e.stopPropagation();
//     console.log("inside the parent only")
// } , false)

// child.addEventListener('click' , function(e){
//     e.stopPropagation();
//     console.log("inside the child element")
// } , false)





