// Zac McDaniel, 8/6/2026
// Assignment 6.2 - Putting it all together
// This script controls the Start/Stop buttons and moves the meme img around the page.

// Global variable to hold the interval ID for movement
//Records when animation starts
let startTime;

//Controls animation loop
let animationRunning = false;

// Direction multipliers for bouncing
let dirX =1;
let dirY =1;

// Actual position of the meme image
let posX = 400;
let posY = 200;

//Function runs when the Start button is clicked
function startMove() {

    // Disable Start button so it cannot be clicked again
    document.getElementById("startBtn").disabled = true;

    // Enable Stop button
    document.getElementById("stopBtn").disabled = false;

    // Update message using innerHTML (required by assignment)
    document.getElementById("messageBox").innerHTML =
     "Meme is moving! To stop music, hit Stop.";

    // Mark animation as running
    animationRunning = true;

    // Reset start time so timestamp works correctly
    startTime = undefined;

    // Begin animation loop using requestAnimationFrame
    requestAnimationFrame(moveMeme);

}

//Function runs when the Stop button is clicked
function stopMove() {

    // Disable Stop button
    document.getElementById("stopBtn").disabled = true;
    
    // Enable Start button
    document.getElementById("startBtn").disabled = false;

    // Stop the animation loop
    animationRunning = false;

    //Stop the audio
    stopAudio();

    // Update message using innerHTML 
    document.getElementById("messageBox").innerHTML = "Meme stopped.";

}
function flashColor() {
    const meme = document.getElementById("memeImage");

    // Flash color
    meme.style.filter = "brightness(300%) saturate(200%)";

    // Remove flash after 150ms
    setTimeout(() => {
        meme.style.filter = "none";
    }, 150);
}


// Function that moves the meme image and bounces it off the edges of the window
function moveMeme(timestamp) {

    // First frame, record the start time
    if (startTime === undefined) {
        startTime = timestamp;
    }

    // Compute elapsed time in milliseconds
    let elapsed = timestamp - startTime;

    // Get the meme image element
    const meme = document.getElementById("memeImage");

    // horizontal movement
    let speedX = 3 * dirX;
    // vertical movement
    let speedY = 2 * dirY;

    // Update actual position
    posX += speedX;
    posY += speedY;
    
    // Bounce off left edge
    if (posX <= 0) {
    posX = 10;          // push away from wall
    dirX *= -1;
    flashColor();
    }

    // Bounce off right edge
    if (posX + meme.width >= window.innerWidth) {
    posX = window.innerWidth - meme.width - 10;  // push away
    dirX *= -1;
    flashColor();
    }

    // Bounce off top/bottom edges
    if (posY <= 0 || posY + meme.height >= window.innerHeight) {
        dirY *= -1; // Reverse vertical direction
        flashColor(); // Flash color on bounce
    }

    // Apply movement using CSS transform
    meme.style.transform = `translate(${posX}px, ${posY}px)`;

    // Continue the animation loop if still running
    if (animationRunning) {
        requestAnimationFrame(moveMeme);
    }
}

// Function to stop audio when navigating to another page
function stopAudio() {
    let audio = document.getElementById("guitarAudio");
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset to start
    }
}

function restartAudio() {
    let audio = document.getElementById("guitarAudio");
    audio.muted = false; // Unmute the audio
    audio.play(); // Play the audio
}  

// Start button
document.getElementById("startBtn").onclick = function() {
    restartAudio();
    startMove();
};

// Stop button
document.getElementById("stopBtn").onclick = function() {
    stopMove();
};

//Meme image click
document.getElementById("memeImage").onclick = function() {
    restartAudio();
    startMove();
};

// Boards link stops audio before navigating
document.getElementById("boardsLink").onclick = function() {
    stopAudio();
};

// Home link blur to remove highlight
document.getElementById("homeLink").onclick = function() {
    this.blur(); // Remove focus from the link
}