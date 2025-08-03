const finderBtn = document.getElementById("finderBtn");
const providerBtn = document.getElementById("providerBtn");
const roleImage = document.getElementById("roleImage");

// Button click handlers
finderBtn.addEventListener("click", () => {
  roleImage.src = "finder.jpg";
  finderBtn.classList.add("active");
  providerBtn.classList.remove("active");
});

providerBtn.addEventListener("click", () => {
  roleImage.src = "provider.jpg";
  providerBtn.classList.add("active");
  finderBtn.classList.remove("active");
});

// Set default image on page load
window.addEventListener("DOMContentLoaded", () => {
  roleImage.src = "default1.jpg";
  finderBtn.classList.remove("active");
  providerBtn.classList.remove("active");
});
