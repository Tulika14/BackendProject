//import { someFunction } from './myModule.js';

// const myElement = document.getElementById("myElement");
// if (myElement) {
//     console.log("myElement is populated:", myElement.textContent);
// } else {
//     console.log("myElement is not found");
// }

// // Debugging messages
// console.log("This is a debug message.");

// // Debug a variable
// const myVariable = "Hello, debug!";
// console.log("myVariable:", myVariable);


export function myFunction(){
const http = require('http');
const httpProxy = require('http-proxy');

const targetServer = 'http://localhost:5000/thought'; // The target server's URL
const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: targetServer });
});

server.listen(5000, () => {
  console.log('Proxy server is running on port 3000');
});
const getthought = async () => {
    const res = await fetch('http://localhost:5000/thought');
    const quotes = await res.json();
    const num = Math.floor (Math.random() * quotes.length);
    const item = quotes[num];
    const quote = item.text;
    debugger;
    const authorName= item.Author;
    text.innerText = quote;
    Author.innerText = authorName;
    console.log(quotes)
   // debugger;
}
}
//import { myFunction } from './script.js';
//debugger;
//getthought();