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
// Device detection
// =====================
const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

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
// NO button — FINAL BOSS (DESKTOP + MOBILE)
// =====================

// make NO physically unclickable
noBtn.style.pointerEvents = "none";

function moveNoButtonFar() {
  const moveX = (Math.random() - 0.5) * 700;
  const moveY = (Math.random() - 0.5) * 450;

  noBtn.style.transition = "transform 0.06s linear"; // VERY FAST
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// DESKTOP: cursor proximity (frame-perfect)
if (!isMobile) {
  document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 180) {
      moveNoButtonFar();
    }
  });
}

// MOBILE: touch proximity
if (isMobile) {
  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    if (!touch) return;

    const rect = noBtn.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = touch.clientX - cx;
    const dy = touch.clientY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 140) {
      moveNoButtonFar();
    }
  });
}

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
  }, 280);
}
