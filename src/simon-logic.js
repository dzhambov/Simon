export function Simon(){
  this.colors = ['blue','red','yellow','green'];
  this.colorArr = [];
  this.playerInputArr = [];
}
Simon.prototype.randColor = function(){
  var randomIndex = Math.floor(Math.random()*4);
  this.colorArr.push(this.colors[randomIndex]);
};

