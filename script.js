// Function to toggle dark mode for accessibility
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add keyboard accessibility for dark mode button
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.querySelector('button');
    darkModeButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleDarkMode();
        }
    });
});

// Ensure all links are keyboard accessible with visible focus
document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #007BFF';
    });
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});
