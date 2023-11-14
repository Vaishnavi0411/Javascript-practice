/*
    Practice 3 - Fibonacci Series for First 10 numbers
*/
// Declare and initialize variable to store count value.
// Declare and initialize variables to store the first two values of the fibonacci series.
// Display the first two values of the fibonacci series.
// Write `for` loop to generate rest of the values in the fibonacci series.

{
    let num1 = 0;
    let num2 = 1;
    let num3;
    console.log(num1);
    console.log(num2);
    for (let i = 2; i < 10; i++) {
        num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}
