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

// const arrInvited = [`Name`, `Name1`, `Name2`, `Name3`, `Name4`, `Name5`, `Name6`, `Name7`, `Name8`, `Name9`];

// const userName = prompt(`Dimmi il tuo nome:`);

// let present = false;

// for (let i = 0; i < arrInvited.length; i++) {

//     if (arrInvited[i].toLowerCase() == userName.toLowerCase()) {
//         present = true;
//     }
// }

// if (present) {                
//     alert(`Benvenuto`);
// } else {
//     alert(`Il tuo nome non è nella lista`);
// }


/*
Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// const arrOddNums = [];

// for (let index = 0; index < 6; index++) {

//     let userNum = parseInt(prompt(`Dammi un numero:`));

//     if (userNum % 2 === 1)  {
//         arrOddNums.push(userNum); 
//     }
    
// }

// alert(arrOddNums);


/*
Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/


// const strUserNum = prompt(`Dammi un numero di quattro cifre:`);

// let sum = 0;

// for (let i = 0; i < strUserNum.length; i++) {

//     sum += parseInt(strUserNum[i]);
    
// }

// alert(sum);



/*
Snack 1.9
Calcola la somma e la media dei primi 10 numeri (da 1 a 10 inclusi).
*/

// let sum = 0;

// for (let num = 1; num <= 10; num++) {
//     sum += num;
//     console.log(num);
// }
  
// console.log(sum);

// const avarage = sum / 10;

// console.log(avarage);


/*
Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// FOR:
// let sum = 0;

// for (let index = 0; index < 5; index++) {
//     let userNum = parseInt(prompt(`Dammi un numero:`));
//     console.log(userNum);
//     sum += userNum;
// }

// console.log(sum);

// WHILE:
let sum = 0;

let index = 1;

while (index <= 5) {

    let userNum = parseInt(prompt(`Dammi un numero (${index++}):`));

    sum += userNum;

    console.log(userNum);
}

console.log(sum);


/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

// let userNum = parseInt(prompt(`Inserisci un numero:`));

// if (userNum % 2 === 0) {
//     console.log(userNum);
// } else {
//     console.log(userNum + 1);
// }



/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

// const arrNames = [`Name1`, `Name2`, `Name3`, `Name4`, `Name5`, `Name6`, `Name7`, `Name8`];
// const arrSurnames = [`Surname1`, `Surname2`, `Surname3`, `Surname4`, `Surname5`, `Surname6`, `Surname7`, `Surname8`];

// const newInvitedList = [];

// for (let index = 0; index < 3; index++) {
//     let randomName = arrNames[Math.floor(Math.random() * arrNames.length)];
//     let randomSurname = arrSurnames[Math.floor(Math.random() * arrSurnames.length)];

//     let newInvited = randomName.concat(" ", randomSurname);

//     console.log(newInvited);

//     newInvitedList.push(newInvited);
// }

// console.log(newInvitedList);


