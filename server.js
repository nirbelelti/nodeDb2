var express = require('express');
var app = express();
var BodyParser = require('body-parser'); // middle
var cors = require('cors');
var users = require('./routes/users.js');

/*var corsOptions ={
    origin: 'https://git.heroku.com/nodedb.git'
}*/




// middleware
app.use(BodyParser.urlencoded({
    extended: true
}));
app.use(BodyParser.json());

app.use(users);

app.use(cors());

app.use(function(req, res) {
    res.status(404);
    res.send({ 'msg': 'Page Not Found' });
})



app.listen(process.env.PORT || 3000,function(){
    console.log('CORS-enabled web server listening on port 80');
});;
