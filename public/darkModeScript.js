// Determine theme of the app before content is loaded
if (localStorage && localStorage.getItem && localStorage.setItem) {
	const savedDarkMode = localStorage.getItem("darkMode");
	if (savedDarkMode === undefined) {
		if (window.matchMedia) {
			window.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			localStorage.setItem("darkMode", String(window.isDarkMode));
		}
	} else {
		window.isDarkMode = savedDarkMode === "true";
	}
}

// Set proper colors as css properties
let root = document.documentElement;
root.style.setProperty('--background-color', window.isDarkMode ? '#000000' : '#FFFFFF');
root.style.setProperty('--text-color', window.isDarkMode ? '#FFFFFF' : '#000000');
