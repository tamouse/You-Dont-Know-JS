// functions
//
// Enacts the "Don't Repeat Yourself" (DRY)

var amount;

function printAmount() {
  console.log( amount.toFixed(2) );
}

function toMoney(n) {
  return "$" + n.toFixed(2);
}

function printAmountMoney() {
  console.log( toMoney(amount) );
}

amount = 99.99;
printAmount();
printAmountMoney();

amount = amount * 2;
printAmount();
printAmountMoney();



// Note that while a function may be a first-class object in JS,
// i.e. you can pass it as an argument to a function. HOWEVER, the
// value/object assigned to the function is NOT the same as the value
// of the function when it is evaluated.

var a = 10;

function foo(b) {
  // this is accessing the variable 'a' in the *outer* scope
  a = a * 2;
  a = a + b;
}

function bar() {
  return 0;
}

foo(bar);
console.log(a);

a = 10;                         // have to reset a because it's been changed in foo()
;                               // (Why you should NOT set globals inside functions.)

foo(bar());
console.log(a);
