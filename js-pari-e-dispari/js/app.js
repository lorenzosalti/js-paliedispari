// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

const choice = prompt('Inserire "pari" oppure "dispari"');

const isChoiceValid = choice === 'pari' || choice === 'dispari';

const userNum = parseInt(prompt('Inserire un numero da 1 a 5'));

const isNumValid = userNum >= 1 && userNum <= 5;

const cpuNum = randomOneToFive();

const isChoiceEven = choice === 'pari';

const isSumEven = twoNumSumEven(userNum, cpuNum);

if (!(isChoiceValid && isNumValid)) {
  console.log('Input non validi')
} else if (isChoiceEven === isSumEven) {
  console.log(`
    L'utente ha scelto "${choice}" e ha inserito il numero ${userNum}.
    Il computer ha generato il numero ${cpuNum}.
    Il vincitore é l'utente!`);
} else {
  console.log(`
    L'utente ha scelto "${choice}" e ha inserito il numero ${userNum}.
    Il computer ha generato il numero ${cpuNum}.
    Il vincitore é il computer!`);
}



// Funzione per generare un numero randomico tra 1 e 5
function randomOneToFive() {
  const number = Math.ceil(Math.random() * 5);
  return number;
}

// Funzione per valutare se la somma di due numeri é pari
function twoNumSumEven(firstNum, secondNum) {
  const sum = firstNum + secondNum;
  const isEven = sum % 2 === 0;
  return isEven;
}