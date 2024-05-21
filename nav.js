window.addEventListener("DOMContentLoaded", function () {
  // Run when DOM is loaded
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Select all navbar links efficiently

  function removeActiveClass() {
    navbarLinks.forEach((link) => link.classList.remove("active")); // Remove 'active' class from all links
  }

  function addActiveClass(link) {
    removeActiveClass(); // Ensure only one link is active at a time
    link.classList.add("active");
  }

  const sections = document.querySelectorAll("[id]"); // Select all elements with IDs

  window.addEventListener("scroll", function () {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowTop = window.pageYOffset;
      const windowBottom = window.pageYOffset + window.innerHeight;

      if (sectionTop <= windowBottom && sectionTop + sectionHeight >= windowTop) {
        const matchingLink = document.querySelector(`a[href="#${section.id}"]`); // Efficiently find the matching link
        if (matchingLink) {
          addActiveClass(matchingLink);
          return; // Exit the loop once a match is found
        }
      }
    });
  });
});
