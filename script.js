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

const word1 = prompt(`Parola 1:`);
const word2 = prompt(`Parola 2:`);

if (word1.length > word2.length) {
    alert(word1);
    alert(word2);
} else if (word1.length < word2.length) {
    alert(word2);
    alert(word1);
} else {
    alert(`Le due parole hanno la stessa lunghezza`)
}


/*
Snack 1.3

*/