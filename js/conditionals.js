// "use strict";
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// /* ########################################################################## */
//
//
var enterNumber= confirm("would you like to enter a number?");

if (enterNumber=== true) {
    var whatNumber = Number(prompt("what is the number?"));

    if (isNaN(whatNumber)=== true) {
        alert("that is not a number")
    } else {

        if (whatNumber % 2 == 0) {
            alert(whatNumber + " is even")
        } else {
            alert(whatNumber + " is odd")
        }
        if (whatNumber >= 0) {
            alert(whatNumber + " is positive.")
        } else {
            alert(whatNumber + " is negative.")
        }
        alert(whatNumber + 100);
    }
}
//
// { alert((whatNumber %2===0)? "that number is even": "that number is odd");
//
//     alert(whatNumber + 100);
//  alert ((whatNumber <0)? "that number is negative": "that number is positive");


//
// make it function
// funciton isNegativ(num{

})
//
//
//
//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined above, if the color passed is not
//  * one of the ones defined above, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//

color=color.toLowerCase();
//
function analyzeColor(color) {
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red")
    {
        return "strawberries are red";
    } else  (color === "cyan")
    {
        return"I don't know anything about cyan";
    }
}

console.log(analyzeColor("cyan"));
//
//
//
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
//
console.log(analyzeColor(randomColor))
//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */




switch (randomColor) {
    case"blue":
        return "blue is the color of the sky";
        break;

    case"red":
        return"strawberries are red";
        break;

    case"cyan":
        return "I don't know anything about cyan";
        break;
        default:
            return"I don't know that color";
    break;
}


console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//
var chooseColor =prompt("Choose a color?");
//
alert (analyzeColor(chooseColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNum,initialTotal) {
    if (l === 0){
        return t;
    }
        else if (l=== 1){
            return  t - ( t* .10);
    }
        else if (l=== 2)  {
            return t - (t* .25);
    }

        else if (l=== 3) {
        return t - (t* .35);
    }
        else if (l=== 4){
         return t - (t* .50);
    }
        else  (l=== 5){
        return  "You get it for free!";
    }
}
//
console.log (calculateTotal(luckyNumber,200))


//
// can do switch
//
//     {
//         switch(luckyNumb)
//             case 0:
//                 return initialTotal:=;
//                 break;
//     case 1:
//         return  initialTotal * .9;
break;
//     case 2:
//         return inititalTotal * .75;
//
//         case3:
//         return initialTotal *65;
//     case 4:
//         return initialTotal *.6;
// default:
//     return 0;
//
//     }
// }
// console.log (calculateTotal(0,100))
//
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
//
//
// var userTotal= Number(prompt("what was your total today?"));
// alert("your total is " + userTotal+" your lucky number was " + luckyNumber + "meaning you pay" + calculateTotal(luckNumber, usertTotal))