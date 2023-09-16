// console.log("hello")

function refresh(){
    $('#list').empty();
    $.get('/todos' , function(data){
        // console.log(data);
        for(let todo of data){
            $('#list').append(`<li>${todo}</li>`);
        }
    })
}

refresh();

$('#btn').on('click' , function(){

    let todo = $('#inp').val();

    $.post('/todos' , {todo} , function(res){
        console.log(res);
        $('#inp').val("");
        refresh();
    })

})







