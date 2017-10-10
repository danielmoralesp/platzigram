var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var title = require('title');

page('/', function(ctx, next){
  title('Platzigram')
  var main = document.getElementById('main-container')
  main.innerHTML = '<a href="/signup">Signup</a>'
})
