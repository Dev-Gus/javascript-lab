/**
 * Theme Management Module
 * Handles light/dark mode toggling with localStorage persistence
 */

/**
 * Initialize theme on page load
 * Checks localStorage, system preference, or defaults to light mode
 */
export function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  setupToggleButton();
}

/**
 * Set the theme (light or dark)
 * @param {string} theme - 'light' or 'dark'
 */
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
  updateToggleButton(theme);
}

/**
 * Get current theme
 * @returns {string} 'light' or 'dark'
 */
function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

/**
 * Setup dark mode toggle button click listener
 */
function setupToggleButton() {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }
}

/**
 * Update toggle button icon and text based on current theme
 * @param {string} theme - 'light' or 'dark'
 */
function updateToggleButton(theme) {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('.toggle-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      toggleBtn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }
}
