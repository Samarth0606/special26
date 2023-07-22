



let formEl = document.querySelector('form');


formEl.addEventListener('submit' , function(e){
    // console.log(e);
    e.preventDefault();
    // console.log("submitted form");
    console.log(formEl.elements);
    console.log(formEl.elements[1]);
    console.log(formEl.elements[1].value);

})







