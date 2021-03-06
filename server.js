var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
  'article-one' : {
  title :'ArticleOne : Bino P Mathai',
  heading : 'Article One',
  date : '5 sep 2016',
  content:
  `<p>
    This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.
</p>
<p>
    This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.
</p>
<p>
    This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.This is the content of my First article.
</p>`
},
 'article-two':{
    title :'ArticleTwo : Bino P Mathai',
  heading : 'Article Two',
  date : '8 sep 2016',
  content:
  `<p>
    This is the content of my Second article.
    </p>`
},
'article-three':{
    title :'ArticleThree : Bino P Mathai',
  heading : 'Article Three',
  date : '28 sep 2016',
  content:
  `<p>
    This is the content of my third article.
    </p>`
}
};
function CreateTemplate(data){
var title=data.title;
var heading= data.heading;
var date=data.date;
var content=data.content;

var HtmlTemplate=`

<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class='container'>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>

`;
return HtmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter',function(req,res){
   counter = counter + 1; 
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
     var articleName= req.params.articleName;
     res.send(CreateTemplate(articles[articleName]));  
});
app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});
app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));   
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
