


let arr = [
    'https://images.unsplash.com/photo-1689333131663-6bda0b18e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1684323041566-1958d8056e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmhhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1621758322880-5f7871de6e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
]

let imgEl = document.querySelector('img');

let index = 0;

setInterval(function(){
    imgEl.setAttribute('src' , arr[index]);
    index = (index+1)% arr.length;

} , 2000);




