document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "/SideCodeTeam/team-pages/Quaigraine/image/slide-1.png",
    "/SideCodeTeam/team-pages/Quaigraine/image/slide-2.png",
  ];
  let currentImageIndex = 0;

  function changeBackground(imagename) {
    var header = document.getElementById("header");
    var textbox = document.querySelector(".textbox");
    var navigation = document.querySelector(".navigation"); // Select the navigation element

    // Add a fade-out class before changing the background
    header.classList.add("fade-out");
    textbox.classList.add("fade-out");
    navigation.classList.add("fade-out"); // Add fade-out class to navigation

    // After the fade-out animation, change the background and fade back in
    setTimeout(function () {
      header.style.backgroundImage = "url(" + imagename + ")";
      header.classList.remove("fade-out");
      textbox.classList.remove("fade-out");
      navigation.classList.remove("fade-out"); // Remove fade-out class from navigation

      // Remove any existing slide-specific classes
      textbox.classList.remove("slide-1", "slide-2");
      navigation.classList.remove("slide-1", "slide-2");

      // Add class based on image name
      if (imagename.includes("slide-1.png")) {
        textbox.classList.add("slide-1");
        navigation.classList.add("slide-1");
      } else if (imagename.includes("slide-2.png")) {
        textbox.classList.add("slide-2");
        navigation.classList.add("slide-2");
      }
    }, 300); // Adjust the timeout to match your fade-out duration
  }

  function nextBackground() {
    // Increment the index, wrapping around if necessary
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Change background to the next image
    changeBackground(images[currentImageIndex]);
  }

  function prevBackground() {
    // Decrement the index, wrapping around if necessary
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // Change background to the previous image
    changeBackground(images[currentImageIndex]);
  }

  // Update button click handlers to use the navigation functions
  document.getElementById("next").addEventListener("click", nextBackground);
  document.getElementById("prev").addEventListener("click", prevBackground);

  // Initialize with the first background image
  changeBackground(images[currentImageIndex]);
});

let showMenu = false;

document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.getElementById("menuIcon");
  const menu = document.getElementById("navMenu");

  function toggleMenu(event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Prevent default action for both click and touch events
      showMenu = !showMenu;
      if (showMenu) {
        // Show menu and change icon to open state
        menu.style.display = "block";
        navIcon.innerHTML =
          '<i class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;"></i>';
        // Disable scrolling
        document.body.style.overflow = "hidden";
      } else {
        // Hide menu and change icon back to closed state
        menu.style.display = "none";
        navIcon.innerHTML = '<i class="fa-solid fa-bars fa-2xl"></i>';
        // Re-enable scrolling
        document.body.style.overflow = "";
      }
    }
  }

  // Attach event listeners only to the menu icon
  navIcon.addEventListener("click", toggleMenu);
  navIcon.addEventListener("touchmove", toggleMenu, { passive: false });

  // Ensure the menu only toggles on screens smaller than or equal to 1200px
  function checkScreenSize() {
    if (window.innerWidth > 1200) {
      menu.style.display = ""; // Reset menu display
      navIcon.innerHTML = '<i class="fa-solid fa-bars-staggered fa-2xl"></i>'; // Reset icon
      document.body.style.overflow = ""; // Re-enable scrolling
      showMenu = false; // Reset menu state
    }
  }

  // Check screen size on initial load and when the window is resized
  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});
