const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";

async function getQuote(url){
    const respond = await fetch(url);
    const data = await respond.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiUrl);

function post(){
    window.open
}


