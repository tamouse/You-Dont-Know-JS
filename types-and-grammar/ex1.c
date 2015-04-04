/**
 * Example to see how C treats the logical opertor ||
 **/


#include <stdlib.h>
#include <stdio.h>

int main (int argc, char *argv[]) {

  int x;

  x = 7 || 9;

  printf("x = 7 || 9 returns %d \n", x); // => 1

  x = 0 || 1;

  printf("x = 0 || 1 returns %d \n", x); // => 1

  x = 0 || 0;

  printf("x = 0 || 0 returns %d \n", x); // => 1


  // in C, the logical operator || returns 1, i.e. "true", or 0, i.e. "false"

}
