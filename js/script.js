// Displays the student ID dynamically when the page loads
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("student-info").textContent = "Student ID: 200590277 | Name: Tumhang Limbu";
});

// Defines a Pizza class to store order details
class Pizza {
  constructor(name, size, sauce, toppings, crust, drink, spice, dessert, instructions) {
      this.name = name;
      this.size = size;
      this.sauce = sauce;
      this.toppings = toppings;
      this.crust = crust;
      this.drink = drink;
      this.spice = spice;
      this.dessert = dessert;
      this.instructions = instructions;
  }

  // Generates a description of the pizza order
  getDescription() {
      return `
          <h2>Order Summary</h2>
          <p><strong>Name:</strong> ${this.name}</p>
          <p><strong>Size:</strong> ${this.size}</p>
          <p><strong>Sauce:</strong> ${this.sauce}</p>
          <p><strong>Crust:</strong> ${this.crust}</p>
          <p><strong>Toppings:</strong> ${this.toppings.length > 0 ? this.toppings.join(", ") : "None"}</p>
          <p><strong>Drink:</strong> ${this.drink}</p>
          <p><strong>Spice Level:</strong> ${this.spice}</p>
          <p><strong>Dessert:</strong> ${this.dessert}</p>
          <p><strong>Special Instructions:</strong> ${this.instructions || "None"}</p>
      `;
  }
}

// Adds an event listener for the form submission
document.getElementById("pizza-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from reloading the page

  // Retrieves user inputs
  let name = document.getElementById("customer-name").value;
  let size = document.getElementById("size").value;
  let sauce = document.getElementById("sauce").value;
  let crust = document.querySelector('input[name="crust"]:checked');
  let drink = document.getElementById("drink").value;
  let spice = document.getElementById("spice").value;
  let dessert = document.getElementById("dessert").value;
  let instructions = document.getElementById("instructions").value;
  
  let toppings = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(topping => {
      toppings.push(topping.value);
  });

  // Ensures the user selects a crust type
  if (!crust) {
      alert("Please select a crust type.");
      return;
  }

  // Creates a new Pizza object with all selected values
  let pizza = new Pizza(name, size, sauce, toppings, crust.value, drink, spice, dessert, instructions);

  // Displays the order summary on the page
  document.getElementById("order-summary").innerHTML = pizza.getDescription();
});
