const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("letter-title");
const cat = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// =====================
// Typing effect
// =====================
const message = "Will you be my Valentine?? (⸝⸝๑﹏๑⸝⸝)👉👈";
let index = 0;

function typeText() {
  if (index < message.length) {
    title.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 45);
  }
}

// =====================
// Open envelope
// =====================
envelope.onclick = () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
    title.textContent = "";
    index = 0;
    typeText();
  }, 100);
};

// =====================
// NO button smooth dodge (FOREVER)
let dodgeX = 0;
let dodgeY = 0;

noBtn.addEventListener("mouseenter", () => {
  dodgeX = Math.random() * 160 - 80;
  dodgeY = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${dodgeX}px, ${dodgeY}px)`;
});

// =====================
// YES clicked
// =====================
yesBtn.onclick = () => {
  title.style.display = "none";
  buttons.style.display = "none";

  cat.src = "cat_dance.gif";
  finalText.style.display = "block";

  startHearts();
};

// =====================
// Floating hearts
// =====================
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "%";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }, 300);
}