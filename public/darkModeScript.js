// Determine theme of the app before content is loaded
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === undefined) {
	window.isDarkMode = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	localStorage.setItem("darkMode", String(window.isDarkMode));
} else {
	window.isDarkMode = savedDarkMode === "true";
}

// Set proper colors as css properties
let root = document.documentElement;
root.style.setProperty('--background-color', window.isDarkMode ? '#000000' : '#FFFFFF');
root.style.setProperty('--text-color', window.isDarkMode ? '#FFFFFF' : '#000000');
