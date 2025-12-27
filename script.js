// Dark mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
};

// Load theme
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

// Modal
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

const projectDetails = {
  p1: "Designed pneumatic layout & fixtures for Gen1 & Gen2 regulators.",
  p2: "Motor test bench: 18,000 RPM, 60 Nm torque, noise booth.",
  p3: "Manual & motorized conveyor-based controller assembly line.",
  p4: "Automatic performance & flashing tester with changeover parts."
};

function openModal(id) {
  modalText.textContent = projectDetails[id];
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
