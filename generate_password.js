// generate_password.js
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

// define generatePassword function
function generatePassword(options) {
  // define things user might want

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }

  // create a collection to store things user picked up
  let collection = [];

  // collection = collection.concat(lowerCaseLetters.split(''));
  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters);
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters);
  }

  if (options.numbers === 'on') {
    collection = collection.concat(...numbers);
  }

  if (options.symbols === 'on') {
    collection = collection.concat(...symbols);
  }

  //remove exclude characters
  if (options.excludeCharacters) {
    console.log(`exclude characters', ${options.excludeCharacters}`);
    collection = collection.filter(character => {
      // console.log('character', character);
      if (options.excludeCharacters.includes(character) === true) {
        return false;
      }
      else {
        return true;
      }
    })
    // console.log(collection);
  }

  //error message
  if (collection.length == 0) {
    return 'There is no valid characters in your selections';
  }

  // start generating password

  let p = '';
  for (let i = 0; i < options.length; i++) {
    p = p + sample(collection);
  }

  // return the generated password
  return p;
}
// invoke generatePassword function

// generatePassword();

module.exports = generatePassword;
