// =======================
// Elements
// =======================
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// =======================
// Typing Effect
// =======================
const message = "Will you be my Valentine?? (⸝⸝๑﹏๑⸝⸝)👉👈";
let textIndex = 0;

function typeText() {
  if (textIndex < message.length) {
    title.textContent += message.charAt(textIndex);
    textIndex++;
    setTimeout(typeText, 45);
  }
}

// =======================
// Click Envelope
// =======================
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
    typeText(); // ⌨️ start typing after open
  }, 80);
});

// =======================
// NO button dodge logic
// =======================
noBtn.addEventListener("mouseenter", () => {
  const distance = 180;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.2s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// =======================
// YES button clicked
// =======================
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! 💖";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";

  spawnSparkles();
});

// =======================
// Sparkle Effect
// =======================
function spawnSparkles() {
  for (let i = 0; i < 16; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "✨";

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
  }
}
