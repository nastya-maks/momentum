import { quotes } from "./quotes.js";

const quote = document.querySelector('.quotes');
const author = document.querySelector('.author');
const btnGenerate = document.querySelector('.button-generate');

function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateQuotes() {
  let index = getRandomIndex(0, quotes.length);
  quote.textContent = `"${quotes[index].text}"`;
  author.textContent = quotes[index].author;
}

updateQuotes();

btnGenerate.addEventListener('click', updateQuotes);