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

// let arrNum = []

// for (i = 1; i < 11; i++) {
//     let userNum = parseInt(prompt(`Inserisci un numero (${i}):`));
//     arrNum.push(userNum);
// }

// const sum = arrNum.reduce((partialSum, a) => partialSum + a, 0);
// alert(sum);


// Senza array:
// let sum = 0;

// for (i = 1; i < 11; i++) {
//     let userNum = parseInt(prompt(`Inserisci un numero (${i}):`));

//     sum += userNum;
// }

// alert(sum);


/*
Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

/*
- chiedi all'utente un nome
- memorizza questo nome in una variabile

- controlla se il nome è presente nella lista:
    - prendi la lista
    - scorri nome per nome
    - controlla se il nome a cui sei arrivato è uguale al nome inserito dall'utente
        - se è presente segnatelo in una variabile "presente"

    - se la variabile presente è stata dichiarata vera 
        - scrivo in console log "benvenuto"
*/    

const arrInvited = ["Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Myrtle Wilson", "George Wilson", "Meyer Wolfsheim", "Catherine", "Owl Eyes", "Dan Cody" ];

let userName = prompt(`Dimmi il tuo nome:`)

let present = false;

for (let i = 0; i < arrInvited.length; i++) {

    if (arrInvited[i] === userName) {
        present = true;
    }
}

if (present) {
    alert("Benvenuto");
} else {
    alert("Il tuo nome non è nella lista")
}



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