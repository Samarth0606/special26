


let req =  new XMLHttpRequest();
req.open('GET' , 'https://api.tvmaze.com/search/shows?q=girls')
req.send();

console.log(req);

req.onload = function(res){
    console.log(this)
}

req.onerror = function(res){
    console.log(this)
}





