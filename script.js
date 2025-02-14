const words = ["Software", "Game", "DevOps", "Network"];
let index = 0;
const textElement = document.querySelector(".changing-text");

function changeText() {
    textElement.style.opacity = 0; // Fade out

    setTimeout(() => {
        index = (index + 1) % words.length;
        textElement.textContent = words[index];
        textElement.style.opacity = 1; // Fade in
    }, 500);
}

setInterval(changeText, 3000); // Change every 2 seconds