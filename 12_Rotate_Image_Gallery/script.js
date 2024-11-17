const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

function startAutoRotate() {
  timer = setInterval(() => {
    x -= 45;
    updateGallery();
  }, 2000);
}

function stopAutoRotate() {
  clearInterval(timer);
}

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

prevEl.addEventListener("click", () => {
  x += 45;
  stopAutoRotate();
  updateGallery();
  startAutoRotate();
});

nextEl.addEventListener("click", () => {
  x -= 45;
  stopAutoRotate();
  updateGallery();
  startAutoRotate();
});

// Ακρόαση για αλλαγές στο ορατότητα του εγγράφου
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    startAutoRotate();
  } else {
    stopAutoRotate();
  }
});

// Εκκίνηση της αυτόματης περιστροφής στην αρχή
startAutoRotate();
