document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    const notice = document.getElementById("maintenance-notice");
    if (notice) {
      notice.style.display = "none"; // This will hide the notice from the page
    }
  }, 5000);
});
