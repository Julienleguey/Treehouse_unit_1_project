// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
/*
let quotes = [
{source: 'Jane Austen', quote:'It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.', citation:'Pride and Prejudice', year:'1813'},
{source: 'Douglas Adams', quote:'The house stood on a slight rise just on the edge of the village.', citation:'The Hitchhiker\'s Guide to the Galaxy', year:'1978'},
{source: 'J.K. Rowling', quote:'Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.', citation:'Harry Potter and the Philosopher Stone', year:''},
{source: 'Neil Gaiman', quote:'The night before he went to London, Richard Mayhew was not enjoying himself.', citation:'Neverwhere', year:'1996'},
{source: 'J.R.R. Tolkien', quote:'In a hole in the ground there lived a hobbit.', citation:'The Hobbit', year:'1937'},
{source: 'Terry Pratchett', quote:'And it came to pass that in that time the Great God Om spake unto Brutha, the Chosen One: "Psst!"', citation:'Small Gods', year:'1992'},
{source: 'Arthur Conan Doyle', quote:'In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to go through the course prescribed for surgeons in the Army.', citation:'Sherlock Holmes, A Study in Scarlet', year:'1887'},
{source: 'John Irving', quote:'Garp\'s mother, Jenny Field, was arrested in Boston in 1942 for wounding in a movie theater.', citation:'The World According to Garp', year:'1978'},
{source: 'Philip Pullman', quote:'Lyra and her daemon moved through the darkening Hall, taking care to keep to one side, out of the kitchen.', citation:'Northern Lights', year:'1995'},
{source: 'William Goldman', quote:'The year that Buttercup was born, the most beautiful woman in the world was a French scullery maid named Annette.', citation:'The Princess Bride', year:'1973'}
];
*/
let quotes = [
{source: 'Jane Austen', quote:'It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.', citation:'Pride and Prejudice', year:'1813'},
{source: 'Douglas Adams', quote:'The house stood on a slight rise just on the edge of the village.', citation:'The Hitchhiker\'s Guide to the Galaxy', year:'1978'},
{source: 'J.K. Rowling', quote:'Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.', citation:'Harry Potter and the Philosopher Stone', year:''},
{source: 'Neil Gaiman', quote:'The night before he went to London, Richard Mayhew was not enjoying himself.', citation:'Neverwhere', year:'1996'},
{source: 'J.R.R. Tolkien', quote:'In a hole in the ground there lived a hobbit.', citation:'', year:''},
{source: 'Terry Pratchett', quote:'And it came to pass that in that time the Great God Om spake unto Brutha, the Chosen One: "Psst!"', citation:'', year:''},
{source: 'Arthur Conan Doyle', quote:'In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to go through the course prescribed for surgeons in the Army.', citation:'Sherlock Holmes, A Study in Scarlet', year:'1887'},
{source: 'John Irving', quote:'Garp\'s mother, Jenny Field, was arrested in Boston in 1942 for wounding in a movie theater.', citation:'', year:''},
{source: 'Philip Pullman', quote:'Lyra and her daemon moved through the darkening Hall, taking care to keep to one side, out of the kitchen.', citation:'', year:''},
{source: 'William Goldman', quote:'The year that Buttercup was born, the most beautiful woman in the world was a French scullery maid named Annette.', citation:'', year:'1973'}
];
// Create the getRandomQuuote function and name it getRandomQuote

//console.log(quotes);

let message ='';
let color ='';

function getRandomNumber() {
  var report = Math.floor(Math.random() * quotes.length )
  return report;
}

function getRandomQuote (array) {
  var report = [];
  var randomNumber = getRandomNumber();
  report.push(array[randomNumber].source, array[randomNumber].quote, array[randomNumber].citation, array[randomNumber].year);
  return report;
}

// Create the printQuote function and name it printQuote


function printQuote(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
  var report = getRandomQuote(quotes);
  var string="";
  string = '<p class="quote">' + report[1] + '</p><p class="source">' + report[0];
  if (report[2] !== '') {
    string += '<span class="citation">' + report[2] + '</span>'
  }
  if (report[3] !== '') {
    string += '<span class="year">' + report[3] + '</span>'
  }
    string += '</p>';
  document.getElementById('quote-box').innerHTML = string;
  return string;
}

printQuote(message);


function getColor() {
  var randomColor = Math.floor(Math.random() * 256 );
  return randomColor;
}

function changeBgColor() {
  let rgbColor;
  rgbColor = 'rgb(' + getColor() + ',' + getColor() + ',' + getColor() + ')';
  document.getElementById("new-color").style.backgroundColor=rgbColor;
  return rgbColor;
}


let intervalID = 0;

function getTimer () {
  intervalID = window.setTimeout(rebootQuote, 5000);
}

getTimer();

function rebootQuote() {
  clearTimeout(intervalID);
  printQuote();
  changeBgColor();
  getTimer();
  }


//document.getElementById("new-color").style.backgroundColor="rgbColor";

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", rebootQuote, false);
