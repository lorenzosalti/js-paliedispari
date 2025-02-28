// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

const choice = prompt('Inserire "pari" oppure "dispari"');

const isChoiceValid = choice === 'pari' || choice === 'dispari';

const userNum = parseInt(prompt('Inserire un numero da 1 a 5'));

const isNumValid = userNum >= 1 && userNum <= 5;

const cpuNum = randomOneToFive();

const sum = userNum + cpuNum;

const isChoiceEven = choice === 'pari';

const isSumEven = sum % 2 === 0;






console.log(choice);
console.log(userNum);
console.log(cpuNum);




function randomOneToFive() {
  const number = Math.ceil(Math.random() * 5);
  return number;
}