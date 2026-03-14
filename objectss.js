const car = {
  make: "Tesla",
  model: "Model 3",
  year: 2024,
  start: function() {
    console.log("Vroom... or rather, silence.");
  }
};

car.start()


//accessing object using .dot notation

console.log(car);
console.log(car.make);

//accessing object using bracket notation notation

console.log(car["year"]);
// console.log(car.start);



car.color = "Midnight Silver"; // Adding a property
// delete car.year;               // Removing a property
console.log(car.color);


// console.log(Object.isFrozen(car)); //Prevents adding, deleting, or changing properties. (Returns true if you can't add properties)
// console.log(Object.seal(car));      // prevents adding / delete but alllows existing properties
