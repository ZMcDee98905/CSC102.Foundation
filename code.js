/* Function #1: Main game function
 * This runs when the user submits the form in game.html
 */
function runGame() {

    // Get the user's number from the input box
    let userNum = Number(document.getElementById("userNumber").value);

    // Generate a random number between 1 and 10
    let cpuNum = Math.floor(Math.random() * 10) + 1;

    // Call the second function to check if each number is even or odd
    let userType = checkEvenOdd(userNum);
    let cpuType = checkEvenOdd(cpuNum);

    // Build the message that will be printed to the screen
    let message = "You chose: " + userNum + " (" + userType + ")<br>";
    message += "Computer chose: " + cpuNum + " (" + cpuType + ")<br><br>";

    // Compare the results using conditionals
    if (userType === cpuType) {
        message += "You WIN! Your number type matches the computer!";
    } else {
        message += "You LOSE! Your number type does not match.";
    }

    // Print the results to the webpage using innerHTML
    document.getElementById("results").innerHTML = message;
}


/* Function #2: Parameter function
  This takes a number and returns "Even" or "Odd"
 */
function checkEvenOdd(num) { 

    // If the number divides evenly by 2, it's even
    if (num % 2 === 0) {
        return "Even";
    }

    // Otherwise, it's odd
    return "Odd";
}