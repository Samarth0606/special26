


// $('button').click(function(){
//     console.log("btn clicked !!")
// })


// $('li').click(function(){
//     // console.log("list clicked")
//     $(this).css('color' , 'red')
// })


// $('input').keyup(function(){
//     console.log($(this).val())
// })


// ----------------------------------


$('.btn').on('click' , function(){
    console.log($(this).text())
})


$('input').on('keydown' , function(){
    console.log($(this).val());
})


