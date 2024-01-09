/* ------------------------------------------------------------
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia 
multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1: Crea un container nel DOM , aggiungendo (attraverso 
la funzione append()) un elemento html con il numero o la stringa 
corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi aggiunti al DOM 
nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, 
un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti 
prendere spunto dallo screenshot fornito in consegna.
------------------------------------------------------------ */

const albumHtml = document.querySelector('div.album');

// ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // aggiungo una nuova riga ogni 10 elementi in modo da avere 10 righe
    if (i === 1 || (i - 1) % 10 === 0) {
        albumHtml.innerHTML += `
            <div class="albumRow d-flex gap-3 p-3">
            
            </div>
        `
    }

    // seleziono tutte le righe dell'album
    let albumRowHtml = document.querySelectorAll('div.albumRow');

    //console.log(albumRowHtml);

    // albumRowHtml[albumRowHtml.length - 1].innerHTML += `
    //     ${i}
    // `

    // per la riga attuale in base al valore di i eseguo l'istruzione tra parentesi graffe
    if (i % 3 === 0 && i % 5 === 0) {
        albumRowHtml[albumRowHtml.length - 1].innerHTML += `
            ${"FizzBuzz"}
        `
        //console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        albumRowHtml[albumRowHtml.length - 1].innerHTML += `
            ${"Fizz"}
        `
        //console.log("Fizz");
    } else if (i % 5 === 0) {
        albumRowHtml[albumRowHtml.length - 1].innerHTML += `
            ${"Buzz"}
        `
        //console.log("Buzz");
    } else {
        albumRowHtml[albumRowHtml.length - 1].innerHTML += `
            ${i}
        `
        //console.log(i);
    }
}