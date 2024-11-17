
const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;
let cursor = '|';
let containerHTML = '';
let isDeleting = false; // Flag to indicate if we're deleting

updateText();

function updateText() {
    if (isDeleting) {
        characterIndex--;
      } else {
        characterIndex++;
      }
 
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}<span></span></h1>
    `;

    if (!isDeleting && characterIndex === careers[careerIndex].length) {
        isDeleting = true;
        setTimeout(updateText, 1000); // Pause before starting to delete
        return;
      }

      if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        careerIndex = (careerIndex + 1) % careers.length;
      }
  setTimeout(updateText, 800);
}

