// Animate elements when scrolled into view
const faders = document.querySelectorAll(".fade-in, .fade-in-up, .fade-in-down, .slide-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("animate-visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Optional greeting
window.addEventListener("load", () => {
  console.log("Portfolio Loaded Successfully!");
});
