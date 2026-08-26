// ===== LUMA STUDIO =====

// Keep the footer year automatically updated
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}