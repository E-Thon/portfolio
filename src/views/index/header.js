export default function header() {
    let navElm = document.createElement("nav")
    navElm.className="nav"

    navElm.innerHTML = `
        <div class="nav__menu">
            <div class="nav__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__links">
                <li class="nav__link"><a href="../../pages/projects.html">Projects</a></li>
                <li class="nav__link"><a href="../../pages/about.html">About</a></li>
                <li class="nav__link"><a href="../../pages/contact.html">Contack</a></li>
            </ul>
        </div>    
    `
    return navElm;
}
