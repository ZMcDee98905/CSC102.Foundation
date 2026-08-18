// Zachary McDaniel Date: 8/17/2026

// Strings: Main validation function triggered by form submit

function validateForm() {

    // Get first  and last name
    let first = document.getElementById("firstName").value;
    
    let last = document.getElementById("lastName").value;

    // Check for missing names
    if (first.trim() === "" || last.trim() === "") {
        // If not input will give alert in innerHTML 
        document.getElementById("message").innerHTML = 
           "First name and Last name are required";

        return false;
    }

    // Combine names with a space
    let fullName = first + " " + last;

     // Validate full name length
     if (fullName.length > 20) {
        // If name is too long it will give alert in innerHTML
        document.getElementById("message").innerHTML =
           "Invalid Input! Your full name is too long. Must be 20 characters or less.";

        return false; // Comment: Stop program
     }

    // Get zip code input
    let zip = document.getElementById("zipCode");
    let zipCodeString = zip.value.trim();

    // Making sure input is only integers
    let zipCodeInt = parseInt(zipCodeString);
    let parsedZipString = "" + zipCodeInt;

      // Validate zip code is exactly 5 digits(no letters and no leading zeros
     if (zipCodeString.length !== 5 || 
         isNaN(zipCodeInt) ||
         (zipCodeString[0] !== "0" && parsedZipString.length !== 5)
         )

         // Message for if the Zip code is invalid will give alert in innerHTML that need integers only
         {
          document.getElementById("message").innerHTML = 
             "Invalid Zip Code. Please enter exactly 5 digits.";

         return false; // Comment: Stop program
         }

         
     // Update header text   
    document.getElementById("headerText").innerHTML = "Ta-Da Here's The Big Secret!";    

    // Get message output area
    let msg = document.getElementById("message");

    // Clear previous messages
    msg.innerHTML = "";

  

  

    // Comment: If all inputs are valid, show secret message
    msg.innerHTML = "🎉 Welcome, " + fullName + "!<br><br>The secret message is:<br><br><i>“You have unlocked the hidden truth!”</i>";

    return false; // Comment: Prevent page reload
}