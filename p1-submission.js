/*
    Practice 1 - Find the Largest Number​
*/
// Declare and initialize variables
// Declare a variable to store the resultant largest number
// Write logic to find the largest number using nested-if
// Display the largest number
// Write logic to find the largest number using ternary operator
// Display the largest number

{
var num1 = 10;
var num2 = 20;
var num3 = 15;
var largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}
console.log(`The largest number using nested if is: ${largest}`);

largest = num1 >= num2 ? (num1 >= num3 ? num1 : num3) : (num2 >= num3 ? num2 : num3);
console.log(`The largest number using the ternary operator is: ${largest}`);
}