/*
Snack 1.1
L'utente inserisce due numeri in successione, con sue prompt.
Il software stampa il maggiore.
*/

// const num1 = parseInt(prompt(`Numero 1:`));
// const num2 = parseInt(prompt(`Numero 2:`));

// if (num1 > num2) {
//     alert(num1);
// } else if (num1 < num2) {
//     alert(num2);
// } else {
//     alert(`sono uguali`);
// }


/*
Snack 1.2
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// const word1 = prompt(`Parola 1:`);
// const word2 = prompt(`Parola 2:`);

// if (word1.length > word2.length) {
//     alert(word2);
//     alert(word1);
// } else if (word1.length < word2.length) {
//     alert(word1);
//     alert(word2);
// } else {
//     alert(`Le due parole hanno la stessa lunghezza`)
// }


/*
Snack 1.3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
(provatelo anche senza array)
*/

let arrNum = []

for (i = 1; i < 11; i++) {
    let userNum = parseInt(prompt(`Inserisci un numero (${i}):`));
    arrNum.push(userNum);
}
console.log(arrNum);

// for (let i = 0; i < arrNum.length; i++) {
//     let somma = userNum;
//     alert(somma);
// }


/*
Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/


/*
Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/


/*
Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/