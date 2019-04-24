const change = document.querySelector(".change");
const checkbox = document.querySelector(".toggler");

change.addEventListener("click", () => (checkbox.checked = false));
