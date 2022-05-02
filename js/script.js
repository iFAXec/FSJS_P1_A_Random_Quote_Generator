/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//Quotes array with famous quote and source as object
let quotes = [

  {
    quote: "Insanity is doing the same thing over and over again and expecting different results.",
    source: "Albert Einstein",
  },

  {
    quote: "I have no special talent. I am only passionately curious.",
    source: "Albert Einstein",
  },

  {
    quote: "Every champion was once a contender who refused to give up.",
    source: "Rocky Balboa",
    citation: "Rocky",
    year: "2006",
  },

  {
    quote: "You only loose when you give up.",
    source: "Imran Khan",
    tag: "sports", 
  },

  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
  },

  {
    quote: "Don’t count the days, make the days count.",
    source: "Muhammad Ali",
  },

  {
    quote: "When life knocks you down, try to land on your back. Because if you can look up, you can get up. Let your reason get you back up.",
    source: "Les Brown",
  },

  {
    quote: "Life is too short for long-term grudges.",
    source: "Elon Musk",
    citation: "Tesla and Twitter CEO",    
  },

  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha",
  }  
];

// console.log(quotes);



//GetRandomQuote function produces a random quote and picks the quote from above array as its index
function getRandomQuote() {  
  let getQuoteFromArray = Math.floor(Math.random() * 8) + 1; 
  // console.log("Random Number: ", getQuoteFromArray); 
  return quotes[getQuoteFromArray]; 
}
console.log("Random Quote: ", getRandomQuote())



//function to print the quote as an HTML element
function printQuote(){
  let recallRandomQuote = getRandomQuote();
  let printRandomQuote = '' ; 
  
    printRandomQuote += `<p class ="quote"> ${recallRandomQuote.quote}</p>`;  
    printRandomQuote += `<p class ="source"> ${recallRandomQuote.source}</p>`;

    if(quotes.citation){
      printRandomQuote += `<span class ="citation">${recallRandomQuote.citation}</span>`;
    }

    if(quotes.year){
      printRandomQuote += `<span class ="year">${recallRandomQuote.year}</span>`;
    }

    if(quotes.tag){
      printRandomQuote += `<span class = "tag"> ${recallRandomQuote.tag}</span>`;
    }
  return printRandomQuote;
}

// console.log(printQuote())
document.getElementById('quote-box').innerHTML = printQuote(); 



//function changes the background color dynamically by setting the rgb value at random
function randomBackgroundColor() {
  let r = Math.floor(Math.random() * 256) + 1;
  let g =  Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  bgRGB = 'rgb(' + r + ',' + g + ',' + b + ')';  
  return bgRGB;  
}
//Passing the above function to change the backgroundcolor change at random
document.body.style.background = randomBackgroundColor();

// console.log(randomBackgroundColor());


setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
