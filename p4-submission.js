/*
    Practice 4 - Sum the Digits of a Number
*/
// Declare and initialize variable to store the value whose digits need to be added up.
// Declare and initialize variable to store the sum value.
// Write `while` loop to calculate sum of digits.
// Display the value of sum.
{
    var number = 1234;
    var sum = 0;
    while (number > 0) {
        sum = sum + number % 10;
        number = Math.floor(number / 10);
    }
    console.log(`The sum of the digits is: ${sum}`);
}    