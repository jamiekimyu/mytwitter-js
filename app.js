const express = require('express');
const app = express();
const chalk = require('chalk');
const volleyball = require('volleyball');
//const morgan = require('morgan');
const nunjucks = require('nunjucks');


app.use(volleyball);
//app.use(morgan);
//morgan gave a deprecated text

// app.use('/', function(req, res, next){
//     console.log(chalk.blue(req.method, req.url))
//     next();// call `next`, or else your app will be a black hole — receiving requests but never properly responding
// }) 
// dont need logger anymore because of volleyball


app.get('/', function(req, res, next){
    res.send('the get works!')
})
app.listen(3000, function(){
    console.log('app is listening on port 3000!')
});


//for views/index.html
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people}, function(err, output){
//     console.log(output);
// } );