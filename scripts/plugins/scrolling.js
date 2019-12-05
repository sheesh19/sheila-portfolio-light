export const initScrollingNavs = () => {
  return new ScrollingNavs();
};

class ScrollingNavs {
  constructor() {
    this.onScroll = this.onScroll.bind(this);
    this.init();
  }

  init() {
    
    window.addEventListener('scroll', this.onScroll);
  }
  
  onScroll() {
    let fromTop = window.scrollY;    
    let mainNavLinks = document.querySelectorAll(".nav-link a");
    let lastId;
    let cur = [];
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
  }
}