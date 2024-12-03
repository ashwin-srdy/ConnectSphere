// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Language Toggle
const languageToggle = document.getElementById("language-toggle");
languageToggle.addEventListener("click", () => {
  alert("Language switching is under development!");
});

// Reset Settings
const resetSettings = document.getElementById("reset-settings");
resetSettings.addEventListener("click", () => {
  alert("Settings reset to default!");
});

// Switch Account
const switchAccount = document.getElementById("switch-account");
switchAccount.addEventListener("click", () => {
  window.location.href = "login.html";
});

// Function to apply dark mode
function applyDarkMode(isDarkMode) {
  const body = document.body;
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (isDarkMode) {
    body.classList.add("dark-mode");
    if (darkModeToggle) darkModeToggle.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark-mode");
    if (darkModeToggle) darkModeToggle.textContent = "Switch to Dark Mode";
  }
}

// Toggle dark mode and save preference
function toggleDarkMode() {
  const isDarkMode = !document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  applyDarkMode(isDarkMode);
}

// Initialize dark mode based on saved preference
function initializeDarkMode() {
  const savedPreference = localStorage.getItem("darkMode");
  const isDarkMode = savedPreference === "enabled";
  applyDarkMode(isDarkMode);
}

// Event listener for the dark mode toggle button
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    initializeDarkMode();
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }
});

