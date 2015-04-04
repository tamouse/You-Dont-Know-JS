// loops


// the for loop takes three clauses, or expressions, in the call:

console.log("for loop:");
for (
  var i = 0;    // initialization clause -- before loop is run
  i < 10;       // termination clause -- tested before loop is run
  i++           // update clause
) {
  console.log(i);
};

// doing the above as a while loop
console.log("regular while loop")
var i = 0;
while ( i < 10 ) {

  console.log(i);

  i++;
}

/*
;                               // all parts of the for expression are optional. e.g:
for (;;) { console.log("."); }  // will run forever
*/

// writing this as a dijkstra loop
console.log("dijkstra loop test at top");
var i = 0;
while (true) {
  // test at top
  if ( i >= 10 ) {
    break;
  };

  console.log(i);
  i = i + 1;

}
