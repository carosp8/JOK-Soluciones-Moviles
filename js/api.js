const quote = document.getElementById('quote');
const autor = document.getElementById('autor');
const btnQuote = document.getElementById('btn-quote');

const urlQuote = ('https://api.quotable.io/random')

let quoteRandom = () =>{

    fetch(urlQuote)
        .then(response => response.json())
        .then(data => {
            console.log(data.content);
            console.log(data.author);
            quote.innerText = data.content
            autor.innerText = `~ ${data.author}`
        })
}

window.addEventListener('load', quoteRandom);
btnQuote.addEventListener('click', quoteRandom);

