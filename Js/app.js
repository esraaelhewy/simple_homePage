let toggleButton = document.getElementById('theme-toggle');
let toggleIcon = document.getElementById('toggle-icon');
let body = document.body;

// Event listener for the button
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleIcon.src = 'images/Moon_fill.svg'; // Switch to moon icon
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleIcon.src = 'images/Sun_fill.svg'; // Switch to moon icon
  }
});