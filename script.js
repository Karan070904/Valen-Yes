const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("letter-title");
const cat = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// typing
const message = "Will you be my Valentine?? (⸝⸝๑﹏๑⸝⸝)👉👈";
let i = 0;

function typeText() {
  if (i < message.length) {
    title.textContent += message.charAt(i);
    i++;
    setTimeout(typeText, 45);
  }
}

// open envelope
envelope.onclick = () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
    title.textContent = "";
    i = 0;
    typeText();
  }, 100);
};

// NO dodge
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES click (NOW GUARANTEED)
yesBtn.onclick = () => {
  title.textContent = "YIPPPPEEEE!! 💖";
  cat.src = "cat_dance.gif";
  buttons.style.display = "none";
  finalText.style.display = "block";
  spawnSparkles();
};

// sparkles
function spawnSparkles() {
  for (let i = 0; i < 20; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✨";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}
