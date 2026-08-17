// Loop control variable (assignment requirment)
let keepGoing = true;

//main loop
while (keepGoing) {

    // Get form element
    const form = document.getElementById("palForm");

    // Required: use onsubmit instead of event listener
    form.onsubmit = function () {

        // Get user input
        let text = document.getElementById("userInput").value;

        // Remove spaces and convert to lowercase
        let cleaned = text.replace(/\s+/g, "").toLowerCase();

        // Reverse the cleaned string
        let reversed = cleaned.split("").reverse().join("");

        // Compare forward vs backward
        if (cleaned === reversed) {
            document.getElementById("resultBox").innerHTML =
            `"${text}" <br><br> IS a palindrome!`;

        } else {
            document.getElementById("resultBox").innerHTML = 
            `"${text}" <br><br>❌ is not a palindrome.`;
        }

        // Show "check another" button
        document.getElementById("againBtn").style.display = 
        "inline-block";

        // Prevent page reload
        return false;
    };

    // Handle "check another" button 
    document.getElementById("againBtn").onclick = function () {
        // Clear input and result
        document.getElementById("userInput").value = "";
        document.getElementById("resultBox").innerHTML = "";
        // Hide "check another" button
        document.getElementById("againBtn").style.display = "none";
    };

    // End the loop after one iteration (assignment requirement)
    keepGoing = false;
}