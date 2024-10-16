// Get the dropdown button and content elements
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Add an event listener to the dropdown button
dropdownBtn.addEventListener('click', () => {
  // Toggle the display of the dropdown content
  dropdownContent.classList.toggle('show');
});