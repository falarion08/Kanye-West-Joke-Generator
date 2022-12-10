const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const https = require('https');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index');
});

app.get('/vote', function(req,res){
    const url = 'https://api.kanye.rest';

    https.get(url, function(response){
        response.on('data', function(data){
            const joke = JSON.parse(data);
            res.render('vote',{Joke:joke.quote});
        }); 
    })
});

app.post('/vote', function(req,res){
    
    if(req.body.vote_result1 == null && req.body.retry == null)
        res.render('result', {mood:"2", Emotion:"Sad"});
    else if (req.body.retry != null)
        res.redirect('/');
    else  
        res.render('result', {mood:"1", Emotion:"Happy"});
});
app.post('/', function(req,res){
    res.redirect('/vote');
});
app.listen(3000, 'localhost', function(){
    console.log('Server is listening on port 3000');
})