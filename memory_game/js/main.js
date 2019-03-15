var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push("queen");
console.log(cardsInPlay)
var cardTwo = cards[2];
cardsInPlay.push("king");
console.log(cardsInPlay)
console.log()
if (cardsInPlay.length===2) {
  	console.log(cardsInPlay)
}
if (cardsInPlay[0]===cardsInPlay[1]){
 	alert("You found a match!") 
}else{
 	alert("Sorry, try again.")
}
