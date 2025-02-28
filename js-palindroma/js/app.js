// Chiedere all’utente di inserire una parola. 
// Creare una funzione per capire se la parola inserita è palindroma.

// Parola scelta dall'utente
const word = prompt('Digitare una sola parola di almeno tre lettere');

// Verifica se la parola é un numero
const isWordANumber = !isNaN(parseInt(word));

// Verifica se la parola é corta
const isWordShort = word.length < 3;

// Verifica se la parola é una frase
const isWordASentence = sentence(word);

// Inversione delle lettere della parola inserita
const revWord = stringReverse(word);

if (isWordANumber || isWordShort || isWordASentence) {
  console.log('La parola inserita non é valida');
} else if (word === revWord) {
  console.log(`La parola "${word}" é palindroma`);
} else {
  console.log(`La parola "${word}" non é palindroma`)
}




// Funzione per calcolare se una stringa é composta da piú di una parola
function sentence(word) {
  const wordsNumber = word.split(" ");
  const sentence = wordsNumber.length > 1;
  return sentence;
}

// Funzione per invertire i caratteri di una stringa
function stringReverse(word) {
  const characters = word.split("");
  const revCharacters = characters.reverse();
  let revString = '';
  for (let i = 0; i < revCharacters.length; i++) {
    const currentCharacter = revCharacters[i];
    revString += currentCharacter;
  }
  return revString;
}