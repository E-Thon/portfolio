export default function header() {
    let divElm = document.createElement("div")
    divElm.className="header"

    divElm.innerHTML = `
        <div class="header__menu">
        <div class="header__burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="header__links">
            <li class="header__link"><img class="nav__img--movieicon" src="./img/movieicon-dark.svg" alt="Movie icon"></li>
            <li class="header__link"><i class="fa-solid fa-ticket-simple"></i></li>
            <li class="header__link"><a href="../favorites.html"><i class="fa-solid fa-bookmark"></i>
            </a></li>
        </ul>
    </div>

        
    `
    return divElm
}
