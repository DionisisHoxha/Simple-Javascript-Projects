const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  console.log(bottomContainerEl.offsetTop);
  console.log(navbarEl.offsetHeight);

  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});