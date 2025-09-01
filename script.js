// 🎨 Light/Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔢 Counter
let count = 0;
const countBtn = document.getElementById("count-btn");
const countDisplay = document.getElementById("count");
countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ❓ Collapsible FAQ
const faqButtons = document.querySelectorAll(".faq-btn");
faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ✅ Form Validation
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Email validation with regex
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("form-success").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
