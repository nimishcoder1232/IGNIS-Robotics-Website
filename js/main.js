// Simple JS to keep the footer year current and show a small console message

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // You can add more JavaScript here later (e.g., for interactivity)
  console.log("IGNIS Robotics site loaded");
});
