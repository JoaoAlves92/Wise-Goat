var conselho = document.getElementById("conselho");

fetch("https://api.adviceslip.com/advice")
    .then( res => res.json() )
    .then( resCompleto => {
        conselho.textContent= `"${resCompleto.slip.advice}"`
    })
