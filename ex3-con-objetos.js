const flightReservations = [
  {
    flightNumber: "AA456",
    airline: "American Airlines",
    departure: {
      airport: "LAX Airport",
      date: "2023-11-02",
      time: "10:15 AM",
    },
    arrival: {
      airport: "JFK Airport",
      date: "2023-11-02",
      time: "03:30 PM",
    },
    passenger: {
      firstName: "Alice",
      lastName: "Smith",
      passport: "CD789012",
      contactInfo: {
        email: "alice.smith@example.com",
        phone: "+1 (234) 567-8901",
      },
    },
    seat: "15C",
    ticketClass: "Business",
    specialMeals: ["Vegetarian", "Kosher"],
    baggage: {
      checked: {
        quantity: 2,
        totalWeight: "35 kg",
      },
      carryOn: {
        quantity: 1,
        totalWeight: "8 kg",
      },
    },
    inFlightServices: ["Entertainment", "Wi-Fi"],
    loyaltyProgram: {
      name: "Frequent Flyer",
      points: 1800,
    },
    specialRequests: "None",
    totalPrice: "$650.00",
    paymentMethod: "Credit Card",
    bookingReference: "ABC123",
    isConfirmed: true,
    isCancelled: false,
    flightStatus: "On time",
    gate: "A7",
  },
  // ... Otros objetos de vuelo
];

// 1. Usa el método forEach para iterar por cada uno de los vuelos y mostrarlos por consola:
flightReservations.forEach((flight) =>
  console.log(`Ejercicio 1: Vuelo Siguiente`, flight)
);

// 2. Usa el método forEach para mostrar UNICAMENTE el pasajero de cada uno de los vuelos:
flightReservations.forEach((flight) =>
  console.log(`Ejercicio 2: Pasajero del vuelo siguiente:`, flight.passenger)
);

// 3. Usa el método find para encontrar el vuelo número 'AA456':
const flightAA456 = flightReservations.find(
  (flight) => flight.flightNumber === "AA456"
);
console.log("Ejercicio 3: Vuelo AA456:", flightAA456);

// 4. Usa el método find para encontrar el vuelo que ha reservado el señor bob.johnson@example.com:
const flightByEmailAddress = flightReservations.find(
  (flight) => flight.passenger.contactInfo.email === "bob.johnson@example.com"
);
console.log(
  "Ejercicio 4: Vuelo reservado por bob.johnson@example.com:",
  flightByEmailAddress
);

// 5. Usa el método some para averiguar si algún vuelo tiene como destino el aeropuerto de LPA GRAN CANARIA:
const hasDestinationLPA = flightReservations.some(
  (flight) => flight.arrival.airport === "LPA GRAN CANARIA"
);
console.log(
  "Ejercicio 5: ¿Algun vuelo tiene destino a LPA GRAN CANARIA?",
  hasDestinationLPA
);

// 6. Usa el método every para comprobar si todos los vuelos están confirmados (isConfirmed):
const allFlightsConfirmed = flightReservations.every(
  (flight) => flight.isConfirmed
);
console.log(
  "Ejercicio 6: ¿Están todos los vuelos confirmados?",
  allFlightsConfirmed
);

// 7. Usa el método filter para obtener todos los vuelos que tienen la puerta de embarque 'D5':
const flightsWithGateD5 = flightReservations.filter(
  (flight) => flight.gate === "D5"
);
console.log(
  "Ejercicio 7: Vuelos con puerta de embarque 'D5':",
  flightsWithGateD5
);

// 8. Usa el método filter para obtener todos los vuelos que incluyen menús con comida Vegan:
const flightsWithVeganMeals = flightReservations.filter((flight) =>
  flight.specialMeals.includes("Vegan")
);
console.log("Ejercicio 8: Vuelos con menús Vegan:", flightsWithVeganMeals);

// 9. Usa el método map para convertir cada objeto en un string con el formato 'numero de vuelo'-'compañía aérea':
const flightNumbersAndAirlines = flightReservations.map(
  (flight) => `${flight.flightNumber}-${flight.airline}`
);
console.log(
  "Ejercicio 9: Número de vuelo y compañía aérea:",
  flightNumbersAndAirlines
);

// 10. Usa el método reduce para sumar el conjunto total de puntos obtenidos del programa de lealtad (loyaltyProgram) de todos los billetes:
const totalLoyaltyPoints = flightReservations.reduce(
  (total, flight) => total + flight.loyaltyProgram.points,
  0
);
