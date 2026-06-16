// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const expCards = document.querySelectorAll(".exp-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });

  expCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < windowHeight - revealPoint) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// TYPING EFFECT
const typingText = document.getElementById("typing");

const words = [
  "Web Developer",
  "AI Enthusiast",
  "Full Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });

});
