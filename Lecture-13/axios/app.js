




axios.get('https://api.tvmaze.com/search/shows?q=superman')
.then(function(res){
    console.log(res.data)
})
.catch(function(err){
    console.log(err)
})