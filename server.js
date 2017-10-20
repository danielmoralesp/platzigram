var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.render('index', { title: "Platzigram" })
})

app.get('/signup', function(req, res){
  res.render('index', { title: "Platzigram - Signup" })
})

app.get('/signin', function(req, res){
  res.render('index', { title: "Platzigram - Signin" })
})

app.get('/api/pictures', function(req, res, next){
  var pictures = [
    {
      user: {
        username: 'danielmorales',
        avatar: 'https://avatars3.githubusercontent.com/u/2589699?s=460&v=4'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: true,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'mariaclara',
        avatar: 'https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-19/s150x150/21568700_782945801886087_2660482397329424384_a.jpg'
      },
      url: 'https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/e35/22426909_124831288180297_5253530316303237120_n.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function(){
    res.send(pictures);
  }, 2000)
})

app.listen(3000, function(err){
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})
