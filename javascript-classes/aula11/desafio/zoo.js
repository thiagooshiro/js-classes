const data = require('./data');

console.log(data);

//Atenção, as informçaões do Zoológico estão exportadas do arquivo "data.js" para esse arquivo.


//Para acessar as informações utilize a sintaxe "data." seguido da informação relevante que você busca.

console.log(data.employees) //A lista de funcionários do zoológico e suas informações;
console.log(data.species) // A lista de espécies do zoológico e suas informações;
console.log(data.hours) // A lista de horários de funcionamento e suas informações
console.log(data.prices) // A lista de valores do zoológico e suas informações;

function getSpeciesByIds(ids) {
  // seu código aqui
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}