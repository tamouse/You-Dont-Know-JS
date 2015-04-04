// "truthy" v. "falsy"
//
// Only values that are "falsy" -- will produce a boolean false:

Boolean(0); // => false
Boolean(-0); // => false
Boolean(NaN); // => false
Boolean(""); // => false
Boolean(false); // => false
Boolean(null); // => false
Boolean(undefined); // => false

// Everything else is "truthy"
Boolean(1); // => true
Boolean(" "); // => true
