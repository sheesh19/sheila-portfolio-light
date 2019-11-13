let mainNavLinks = document.querySelectorAll(".nav-link a");

console.log(mainNavLinks)
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.parentNode.classList.add("active");
    } else {
      link.parentNode.classList.remove("active");
    }
  });
});