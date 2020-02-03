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
      $('#start-game').addClass('no-display');
      console.log(game)
   });
   $('#blue').click(function(){
     game.addInputColor('blue')
     console.log(game)
   })
   $('#red').click(function(){
    game.addInputColor('red')
    console.log(game)
  })
  $('#green').click(function(){
    game.addInputColor('green')
    console.log(game)
  })
  $('#yellow').click(function(){
    game.addInputColor('yellow')
    console.log(game)
  })
  $('#check').click(function(){
    console.log(game)
    if(game.checkAnswer()){
      alert('Right! keeps going!')
      $('#start-game').removeClass('no-display');
    } else{
      alert('Wrong! press okay to try again')
      location.reload(true);
    }
    game.clearUserInput()
  })
});