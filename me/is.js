const html = document.documentElement;
const toggle = document.getElementById("toggleMode");
const icon = toggle.querySelector("i");

// cek localStorage
if (localStorage.getItem("theme") === "dark") {
    html.classList.remove("theme-light");
    html.classList.add("theme-dark");
    icon.classList.replace("fa-sun", "fa-moon");
}

toggle.addEventListener("click", () => {
    if (html.classList.contains("theme-light")) {
        html.classList.replace("theme-light", "theme-dark");
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.replace("theme-dark", "theme-light");
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    }
});
