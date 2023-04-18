/* Consegna
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

// Add an array with names
const names = ['Vincenzo', 'Gianluca', 'Andrea', 'Irene', 'Davide', 'Luca'];

console.log (`Array of names: ${names}.`)

// Add an array with lastnames
const lastNames = ['Di Vita', 'Minardi', 'Lorenzi', 'Caiazzo', 'Farci', 'Casamassima'];

console.log (`Array of last names: ${lastNames}.`)

// Get random name 
const randomName = Math.floor(Math.random() * names.length);

// Get random last name
const randomLastName = Math.floor(Math.random() * lastNames.length);

//Complete random name
console.log(names[randomName] + ' ' + lastNames[randomLastName])