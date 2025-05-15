import burger from './burger.js';
import logo from "/logo.png";

export default function header() {
    const baseUrl = import.meta.env.DEV ? '/src/pages/' : '/portfolio/src/pages/';
    // const baseUrl = import.meta.env.DEV ? '/src/pages/' : './';
   
    let navElm = document.createElement("nav")
    navElm.className="nav"
    navElm.innerHTML = `
        <div class="nav__logo">
            <a href="${import.meta.env.DEV ? '/' : './index.html'}">
                <img src="${logo}" class="logo" alt="E-Thon logo" />
            </a>
        </div>
        <div class="nav__menu">
            <div class="nav__burger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__links">
                <li class="nav__link"><a href="${baseUrl}about.html">About</a></li>
                <li class="nav__link"><a href="${baseUrl}projects.html">Projects</a></li>
                <li class="nav__link"><a href="${baseUrl}contact.html">Contact</a></li>
            </ul>
        </div>    
    `
    return navElm;
}
document.addEventListener("DOMContentLoaded", () => {
    burger();
});