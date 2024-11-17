const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl.offsetLeft; //offset means inside the button
    const y = event.pageY - btnEl.offsetTop;
    console.log(event.pageX);
    console.log(btnEl.offsetLeft);
  
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
  });