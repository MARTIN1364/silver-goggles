/* ==========================================
   ZADOR GROUPS LIMITED — MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Auto-update the year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Smooth scroll for “Learn More” button
  const learnMoreBtn = document.getElementById("learnMore");
  const aboutSection = document.getElementById("about");

  if (learnMoreBtn && aboutSection) {
    learnMoreBtn.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 3. Scroll reveal animation for elements with .reveal or .service
  const reveals = document.querySelectorAll(".reveal, .service");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100; // adjust for trigger distance

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  };

  // Listen to scroll and trigger once on load
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
