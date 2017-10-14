var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Platzigram')
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'danielmorales',
        avatar: 'https://avatars3.githubusercontent.com/u/2589699?s=460&v=4'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: true
    },
    {
      user: {
        username: 'mariaclara',
        avatar: 'https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-19/s150x150/21568700_782945801886087_2660482397329424384_a.jpg'
      },
      url: 'https://instagram.fbog2-1.fna.fbcdn.net/t51.2885-15/e35/22426909_124831288180297_5253530316303237120_n.jpg',
      likes: 10024,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})
