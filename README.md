CSC102.Foundation
A multi‑page interactive website built for CSC102 — Foundations of Computer Science
This project demonstrates my foundational skills in HTML, CSS, and JavaScript by building a fully interactive multi‑page website. It includes navigation, animation, audio playback, styled tables, and dynamic user interaction.

🚀 Project Overview
The goal of this project was to “put it all together” — combining structure, styling, and scripting into a cohesive web presence. The site includes:

A left‑side navigation panel

Multiple linked pages (Home, Boards, Meme, Game, Strings, Palindrome, Table)

A bouncing animated meme

Start/Stop controls

Audio playback

A double‑click Easter‑egg message

A styled table with alternating rows and hover effects

Clean layout using Flexbox and z‑index layering

This project represents the core skills required for front‑end development.

🧩 File Structure
HTML Pages
Each page follows a consistent structure:

Navigation panel

Main content area

Footer

External CSS + JS links

The Meme page includes:

A movable meme image

Audio element

Start/Stop buttons

A bottom message area

The Table page includes:

A custom table

Alternating row colors

Hover highlight

Clean formatting

CSS (main.css)
The stylesheet controls:

Page layout using Flexbox

Navigation styling

Shadows and borders

Table formatting

Hover effects

Footer positioning

Z‑index stacking

Meme image styling

It also defines a custom color theme using CSS variables.

JavaScript (script.js)
The JavaScript file powers all interactive behavior:

Animation
Uses requestAnimationFrame() for smooth movement

Bounces the meme off screen edges

Tracks direction and speed

Applies color flash on bounce

Audio
Plays looping guitar audio

Starts with animation

Stops when navigating or pressing Stop

User Interaction
Start button → begins movement + audio

Stop button → halts movement + audio

Single click on meme → starts animation

Double click → displays a bottom message

DOM Manipulation
Updates messageBox using innerHTML

Controls button states

Moves the meme using CSS left and top

🎨 Key Features
✔ Animated Meme
A bouncing meme image that moves across the screen and reacts to edges.

✔ Audio Integration
Looping guitar audio that syncs with animation.

✔ Navigation Panel
A clean left‑side nav linking all project pages.

✔ Styled Table
A professional table with:

Alternating row colors

Hover highlight

Rounded corners

Drop shadow

✔ Responsive Layout
Flexbox keeps the nav and main content aligned.

🛠 Challenges & Solutions
Z‑Index Layering
Ensured the meme stays behind text but remains clickable.

Flexbox Layout
Kept nav and main content aligned without interfering with animation.

Animation Accuracy
Fixed boundary detection and movement clipping.

CSS Errors
Resolved missing semicolons and invalid selectors that broke table styling.

📚 What I Learned
This project taught me how to:

Structure multi‑page websites

Use Flexbox for layout

Animate elements with JavaScript

Handle user events

Manage audio playback

Debug CSS and JS issues

Build a cohesive front‑end experience

🧭 Future Improvements
Possible upgrades include:

Speed slider for meme animation

Pause/resume button

Custom themes

Meme selector

More animations

Better mobile responsiveness
