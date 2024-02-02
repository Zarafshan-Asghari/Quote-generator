"use strict";
// import it localay
import quotes from "./quotes.js";
console.log(quotes.length);

// ====================  geting quotes from API firt way ===========================================

// selecting elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const shareBtn = document.getElementById("share");
const loader = document.getElementById("loader");
const container = document.getElementById("q-container");

let apiQuotes = [];

// geting Quotes from API
async function getQuotes() {
  loading();
  try {
    const rep = await fetch("https://type.fit/api/quotes");
    apiQuotes = await rep.json();

    setQuote();
  } catch (err) {
    console.log(err.message);
  }
}

getQuotes();

//Show Loader
function loading() {
  loader.classList.remove("hidden");
  container.classList.add("hidden");
}

//Hide Loader
function complet() {
  loader.classList.add("hidden");
  container.classList.remove("hidden");
}

function setQuote() {
  loading();
  const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  author.innerHTML = newQuote.author;
  quote.innerHTML = newQuote.text;
  complet();
}

newQuoteBtn.addEventListener("click", () => {
  setQuote();
});
window.addEventListener("click", () => {
  setQuote();
});
window.addEventListener("load", () => {
  setQuote();
});

// share function
function shareTo() {
  const instagramUrl = `https://intagram.com/post? text=${quote.textContent}`;
  window.open(instagramUrl, "_blank");
  // console.log(instagramUrl);
}

shareBtn.addEventListener("click", () => {
  shareTo();
});

// =========================( using local Quotes 2th way)=======================================================================
/*
function randomQuoteGenerator() {
  return Math.trunc(Math.random() * quotes.length);
}
randomQuoteGenerator();

window.addEventListener("load", () => {
  setQuote();
});
window.addEventListener("click", () => {
  setQuote();
});
newQuoteBtn.addEventListener("click", () => {
  setQuote();
});

function setQuote() {
  quote.innerHTML = quotes[randomQuoteGenerator()].text;
  author.innerHTML = quotes[randomQuoteGenerator()].author;
}
*/
