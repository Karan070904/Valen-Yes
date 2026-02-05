// =====================
// Elements
// =====================
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
// NO button — FINAL BOSS MODE
// =====================

// make it literally unclickable
noBtn.style.pointerEvents = "none";

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const dx = e.clientX - btnCenterX;
  const dy = e.clientY - btnCenterY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  // if cursor gets ANYWHERE close
  if (distance < 160) {
    const moveX = (Math.random() - 0.5) * 600; // HUGE jump
    const moveY = (Math.random() - 0.5) * 400;

    noBtn.style.transition = "transform 0.08s linear"; // INSTANT
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
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
  }, 250);
}