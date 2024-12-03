// Mock credentials
const validEmail = "johndoe@gmail.com";
const validPassword = "1234";

// Login form handling
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === validEmail && password === validPassword) {
        // Redirect to dashboard
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error-message").textContent =
          "Invalid email or password. Please try again.";
      }
    });
  }

  // Logout functionality
  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});
