




fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(res){
    // console.log(res)
    return res.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})