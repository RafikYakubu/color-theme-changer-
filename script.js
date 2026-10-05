const themeSelect = document.getElementById("theme-select");
themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;

document.body.className = selectedTheme;
});