/* .js files add interaction to your website */
var quoteList = [
  "Climate change isn't something people get to choose to believe or not: it's happening - Matt Gaetz",//1//
  "We need to put a price on carbon in the markets, and a price on denial in politics - Al Gore ", //2//
  "If I destroy nature, I destroy myself as well. I lose my dignity - Hindou Ibrahim", //3//
  "Climate change is about something deeper than justice, it's about solidarity. Human Solidarity - Bill Mckibben", //4//
  "Climate change is no longer some far-off problem; it is happening now - Barack Obama",
  
];

var facts = document.getElementById("facts");
var quote = document.getElementById("stuff"); 
var clickCount = 0; 
facts.addEventListener('click', displayQuote); 

function displayQuote(){

  quote.innerHTML = quoteList[clickCount];
  clickCount++;
  //clickCount+=1;
  if (clickCount == quoteList.length){
    clickCount = 0; 
  }
}






