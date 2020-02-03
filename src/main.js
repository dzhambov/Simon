import {Simon} from './simon-logic';
import './styles.css';

function displaycolor(game, i){
  if (i < game.colorArr.length) {
    $('#color-box').html(`<div class="${game.colorArr[i]} box">${i+1}</div>`);
    setTimeout(function(){
        $('#color-box').empty();
        console.log(game.colorArr[i]);
        i++;
        displaycolor(game, i);
      }, 1000);
    }
} 



$(document).ready(function(){
  var game = new Simon();
   $('#start-game').submit(function(event){
     event.preventDefault();
      game.randColor();
      var i = 0;
      displaycolor(game, i);
      console.log(game);
   });
});