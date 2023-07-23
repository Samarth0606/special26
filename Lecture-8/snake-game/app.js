
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let cellSize = 50;
let boardWidth = 1000;
let boardHeight = 600;

let snakeCells = [ [0,0]  ];

let direction = 'right';

document.addEventListener('keydown' , function(e){
    console.log(e)
    if(e.key === 'ArrowLeft'){direction = 'left'}
    else if(e.key === 'ArrowUp'){direction = 'up'}
    else if(e.key === 'ArrowDown'){direction = 'down'}
    else if(e.key === 'ArrowRight'){direction = 'right'}
})


function draw(){
    ctx.clearRect(0,0,boardWidth,boardHeight);
    for(let item of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(item[0] , item[1] , cellSize ,cellSize )
    }

}

function update(){
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    let newHeadX;
    let newHeadY;
    // according the direction
    if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
    }
    else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY-cellSize;
    }
    else if(direction === 'down'){
        newHeadX = headX;
        newHeadY = headY+cellSize;
    }
    else if(direction==='right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
    }
    
    snakeCells.push([newHeadX ,newHeadY]);
    snakeCells.shift()
    
}

setInterval(function(){
    update();
    draw();
} , 200)

