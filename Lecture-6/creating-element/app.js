let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
p1.innerText = 'my name is bottle 1'
p2.innerText = 'my name is bottle 2'
p3.innerText = 'my name is bottle 3'

let div = document.querySelector('div');

// div.appendChild(p1 , p2);


// div.append(p1 , p2 , p3);

div.prepend(p1 , p2 , p3);

