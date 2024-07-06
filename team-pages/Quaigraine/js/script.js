function changeBackground(imagename) {
  var header = document.getElementById("header");
  header.style.backgroundImage = "url(" + imagename + ")";

  var textbox = document.querySelector(".textbox");

  // Remove any existing slide-specific classes
  textbox.classList.remove("slide-1", "slide-2");

  // Add class based on image name
  if (imagename.includes("slide-1.png")) {
    // Default styles for slide 1
    textbox.classList.add("slide-1");
  } else if (imagename.includes("slide-2.png")) {
    // Styles specific to slide 2
    textbox.classList.add("slide-2");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const navMenu = document.getElementById("navMenu");

  menuIcon.addEventListener("click", () => {
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  });
});
