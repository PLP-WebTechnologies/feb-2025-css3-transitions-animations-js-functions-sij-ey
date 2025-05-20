const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
}

// Toggle theme and save to localStorage
function toggleTheme() {
  body.classList.toggle("dark");
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  
  // Trigger animation effect
  themeBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    themeBtn.style.transform = "scale(1)";
  }, 200);
}

// Event listener
themeBtn.addEventListener("click", toggleTheme);

// Initialize on load
loadTheme();
