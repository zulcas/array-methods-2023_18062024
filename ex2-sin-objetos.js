const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(persona => console.log(persona));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
console.log(students.findIndex(persona => persona == "Maria"));

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
console.log(students.some(persona => persona=="Katerina"));

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
console.log(students.find(persona => persona.length<=5));

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
console.log(students.every(persona => persona.length>4));

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
console.log(students.filter(persona => persona.includes("i")));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
console.log(students.map(persona => persona[0]));
