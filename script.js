// Import the Bootstrap JavaScript components
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the button and modal
  const openModalButton = document.getElementById('open-modal');
  const newtonModal = document.getElementById('newton-modal');

  // Add a click event listener to open the modal
  openModalButton?.addEventListener('click', () => {
    if (newtonModal) {
      const modal = new bootstrap.Modal(newtonModal);
      modal.show();
    }
  });

  // Add an event listener to close the modal when the close button is clicked
  newtonModal?.addEventListener('hidden.bs.modal', () => {
    // Do something when the modal is closed (if needed)
  });
});
