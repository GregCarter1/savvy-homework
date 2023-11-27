// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["ham", "olives", "pineApple", "onion"];
for (let toppings of pizzaToppings) {
  console.log(toppings);
}

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9
const greetCustomer = () =>
  "Welcome to Pizza House, we have the following toppings:";
{
  console.log(greetCustomer + pizzaToppings);
}
// Create a getPizzaOrder function that
//  has the parameters size, crust, and an indefinite amount of toppings as inputs
//  prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//  outputs a list with the size, crust, and toppings

const prop = {
  size: "large",
  crust: "thick",
  toppings: ["ham", "olives", "pineApple", "onion"]
};
for (let ing in prop) {
  let output = prop;
}

const getPizzaOrder = ing => "one large thick crust pizza with";
console.log(getPizzaOrder + pizzaToppings);

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
const pizza = ["large", "thick crust", "toppings:"];

const combined = pizza + pizzaToppings;

const preparePizza = () => "Pizza is cooking, your order is in the oven";
console.log(preparePizza + combined);

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
for (let finished of pizza) {
  console.log(finished);
}
const servePizza = pizza => "Order up! Here is your:";
console.log(servePizza + combined + "Enjoy!");

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
console.log(preparePizza + servePizza + combined);

console.log(getPizzaOrder);
console.log(preparePizza);
console.log(servePizza + combined);

// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
