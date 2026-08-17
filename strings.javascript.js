// Comment: Zachary McDaniel Date: 7/28/2026

// Comment: Main validation function triggered by form submit

function validateForm() {

    // Comment: Get first  and last name
    let first = document.getElementById("firstName").value;
    
    let last = document.getElementById("lastName").value;

    // Check for missing names
    if (first.trim() === "" || last.trim() === "") {
        alert("Invalid Input! Please enter BOTH first and last name.");
        return false;
    }

    // Comment: Combine names with a space
    let fullName = first + " " + last;

     // Comment: Validate full name length
     if (fullName.length > 20) {
        alert("Invalid Input! Your full name is too long. Must be 20 characters or less.");

        return false; // Comment: Stop program
     }

    // Comment: Get zip code input
    let zip = document.getElementById("zipCode");
    let zipCodeString = zip.value.trim();

    // Comment: making sure input is only integers
    let zipCodeInt = parseInt(zipCodeString);
    let parsedZipString = "" + zipCodeInt;

      // Comment: Validate zip code is exactly 5 digits(no letters and no leading zeros
     if (zipCodeString.length !== 5 || 
         isNaN(zipCodeInt) ||
         (zipCodeString[0] !== "0" && parsedZipString.length !== 5)
         )

         {
         alert("Invalid Zip Code. Please enter exactly 5 digits.");
         return false; // Comment: Stop program
         }

         
     // Update header text   
    document.getElementById("headerText").innerHTML = "Ta-Da Here's The Big Secret!";    

    // Comment: Get message output area
    let msg = document.getElementById("message");

    // Comment: Clear previous messages
    msg.innerHTML = "";

  

  

    // Comment: If all inputs are valid, show secret message
    msg.innerHTML = "🎉 Welcome, " + fullName + "!<br><br>The secret message is:<br><br><i>“You have unlocked the hidden truth!”</i>";

    return false; // Comment: Prevent page reload
}