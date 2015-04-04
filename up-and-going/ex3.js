/*
 * Types and Coersion
 *
 * Variables are typeless, but the object they point to has a
 * type. Variables may point to various different objects through the
 * life of the program.
 *
 * Coersion (not *Con*version) can allow mixed object types to work
 * together.
 */

// "Declare" variables *before* they are used. (It's not *really* a
// declaration, but it is some form of definition.)
var a, b, c, d, bNum;

// number
a = 42;

// string
b = "42";

// assigns a number to c
c = a / 2;

// *also* assigns a number to d. the contents of b was
// *coerced* into a Number
d = b / 2;

// Explicit Coersion
bNum = Number(b);
