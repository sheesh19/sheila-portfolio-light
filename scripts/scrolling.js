let mainNavLinks = document.querySelectorAll(".nav-link a");
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      (section.offsetTop) <= fromTop &&
      section.offsetTop + (section.offsetHeight * 1.2) > fromTop
    ) {
      link.parentNode.classList.add("active");
    } else {
      link.parentNode.classList.remove("active");
    }
  });
});