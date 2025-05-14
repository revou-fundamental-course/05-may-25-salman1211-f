let currentIndex = 0;
const images = document.querySelectorAll(".contact-image img");

setInterval(() => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const interestSelect = document.getElementById("interest");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      isValid = false;
      alert("Please enter your name.");
    }

    if (emailInput.value.trim() === "") {
      isValid = false;
      alert("Please enter your email address.");
    } else if (!validateEmail(emailInput.value)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }

    if (interestSelect.value === "") {
      isValid = false;
      alert("Please select an interest.");
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
