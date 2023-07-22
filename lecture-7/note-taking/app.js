

let inpEl = document.querySelector('#inpEl');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');


btn.addEventListener('click' , function(e){
 
    let textmsg = inpEl.value;
    // console.log(textmsg);

    let li = document.createElement('li');
    li.innerText = textmsg;

    list.appendChild(li);
    inpEl.value="";

    li.addEventListener('click' , function(){
        li.remove();
    })
    
})
