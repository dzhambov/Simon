export function Simon(){
  this.colors = ['blue','red','yellow','green'];
  this.colorArr = [];
  this.playerInputArr = [];
}
Simon.prototype.randColor = function(){
  var randomIndex = Math.floor(Math.random()*4);
  this.colorArr.push(this.colors[randomIndex]);
};
Simon.prototype.checkAnswer = function(){
  var colors = this.colorArr.join('')
  var inColors = this.playerInputArr.join('')
    if(colors===inColors ){
      return true
    } else{
      return false
    }
}
Simon.prototype.addInputColor = function(color){
  this.playerInputArr.push(color)
}
Simon.prototype.clearUserInput =function(){
  this.playerInputArr = []
}

