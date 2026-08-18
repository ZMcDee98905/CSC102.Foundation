// Zac McDaniel, 8/17/2026
// Boards Page Javascript

// Lower the volume of the boards page audio
window.onload = function() {
    let audio = document.getElementById("introAudio")
    if (audio) {
        audio.volume = .2 // 20% audio
    }
}