// Toggle mobile menu
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("active");
}

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.textContent = "✅ Thank you! Your message has been sent.";
        form.reset();
      } else {
        formMessage.textContent = "⚠️ Please fill in all fields correctly.";
      }
    });
  }
});
