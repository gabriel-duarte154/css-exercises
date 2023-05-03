function setTheme (e) {
    let root = document.documentElement;
    let newTheme = root.className == "light" ? "dark" : "light";
    root.className = newTheme;

    if (e) {
        e.target.textContent = newTheme == "light" ? "Dark Theme" : "Light Theme"
    }
}

let toggleBtn = document.querySelector(".toggle-button");
toggleBtn.addEventListener("click", setTheme);
setTheme();