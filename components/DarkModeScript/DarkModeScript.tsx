const script = `
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
root.style.setProperty('--background-color', window.isDarkMode ? '#191919' : '#FFFFFF');
root.style.setProperty('--text-color', window.isDarkMode ? 'rgba(255, 255, 255, 0.81)' : 'rgb(55, 53, 47)');
`

const DarkModeScript = () => {
  return <script
    dangerouslySetInnerHTML={{
      __html: script
    }}
  />
}

export default DarkModeScript;
