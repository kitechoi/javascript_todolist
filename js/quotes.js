const quotes = [
 {
    quote: "Some people feel the rain. Others just get wet.",
    author: "Bob Dylan",
 },
 {
    quote: "If you would be loved, love, and be loveable.",
    author: "Benjamin Franklin",
 },
 {
    quote: "What we think, we become.",
    author: "Buddha",
 },
 {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
 },
 {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
 },
 {
    quote: "Problems are not stop signs, they are guidelines.",
    author: "Robert H. Schiuller",
 },
 {
    quote: "Never let your emotions overpower your intelligence.",
    author: "Drake",
 },
 {
    quote: "Nothing lasts forever but at least we got these memories.",
    author: "Maya Angelou",
 },
 {
    quote: "Chage the game, don’t let the game change you.",
    author: "John Green",
 },
 {
    quote: "",
    author: "",
 },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.floor() 내림, Math.ceil() 올림, Math.round() 반올림 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;