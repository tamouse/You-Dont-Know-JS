// Practice on Chapter One:
//
// “Write a program to calculate the total price of your phone
// purchase. You will keep purchasing phones (hint: loop!) until you
// run out of money in your bank account. You’ll also buy accessories
// for each phone as long as your purchase amount is below your mental
// spending threshold” -- Excerpt From: Kyle Simpson. “You Don’t Know JS:
// Up & Going.” iBooks.

// Constants

var BEGINNING_BANK_BALANCE = 330;
var BEGINNING_SPENDING_THRESHOLD = 105;
var BEGINNING_PHONE_PRICE = 99;
var BEGINNING_ACCESSORY_PRICE = 9;
var TAX_RATE = 0.15;

// Initialize

var bankBalance = BEGINNING_BANK_BALANCE;
var spendingThreshold = BEGINNING_SPENDING_THRESHOLD;
var phonePrice = BEGINNING_PHONE_PRICE;
var accessoryPrice = BEGINNING_ACCESSORY_PRICE;
var totalCost = 0;
var phones = 0;

// Need a function to calculate tax

function calculateTax(amount) {
  return amount * TAX_RATE;
}

// formatting money

function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

// purchasing a phone

function purchasePhone() {
  var itemCost = 0;

  itemCost += (phonePrice + calculateTax(phonePrice));

  if (accessoryPrice < spendingThreshold) {
    itemCost += (accessoryPrice + calculateTax(accessoryPrice));
  }

  return itemCost;
}

while (true) {
  phoneCost = purchasePhone();
  if ((totalCost + phoneCost) < bankBalance) {
    totalCost += phoneCost;
    phones += 1;
    console.log("Congrats! You bought a phone!");
  } else {
    console.log("You can't afford to buy any more");
    break;
  }
}

bankBalance -= totalCost;

console.log("You bought " + phones + " phones.");
console.log("Total cost: " + formatMoney(totalCost));
console.log("Bank Balance: " + formatMoney(bankBalance));
