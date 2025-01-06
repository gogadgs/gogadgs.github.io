const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

const changeTheme = () => {
    const currenTheme = rootHtml.getAttribute("data-theme");
    currenTheme === "dark" ? rootHtml.setAttribute("data-theme", "light")
     : rootHtml.setAttribute("data-theme", "dark");
    toggleTheme.classList.toggle("bi-brightness-high");
    toggleTheme.classList.toggle("bi-moon-stars");

};
toggleTheme.addEventListener("click",changeTheme);



