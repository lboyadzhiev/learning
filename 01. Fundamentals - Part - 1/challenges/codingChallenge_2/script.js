/*
    Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

function solve() {
    function caclulateBMI(mass, height) {
        return mass / height ** 2;
    }

    let markHigherBMI = caclulateBMI(95, 1.88).toFixed(2);
    let johnHigherBMI = caclulateBMI(85, 1.76).toFixed(2);

    if (markHigherBMI > johnHigherBMI) {
        console.log(
            `Mark's BMI (${markHigherBMI}) is higher than John's (${johnHigherBMI})!`
        );
    } else if (johnHigherBMI > markHigherBMI) {
        console.log(
            `John's BMI (${johnHigherBMI}) is higher than Mark's (${markHigherBMI})`
        );
    }
}

solve();
