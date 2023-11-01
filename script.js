// script.ts
document.getElementById("open-modal")?.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("newton-modal"));
    modal.show();
    // Add custom TypeScript logic here, e.g., handling form submissions, making AJAX requests, etc.
});
