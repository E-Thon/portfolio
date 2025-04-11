import logo from '/logo.png'

export default function main() {
    let sectionElm = document.createElement("section")
    sectionElm.className="mainSection"

    sectionElm.innerHTML = `
        <h1>
            Portfolio
        </h1>
        <a href="https://e-thon.dk" target="_blank">
            <img src="${logo}" class="logo" alt="E-Thon logo" />
        </a>
        <h2>Emilie Thon - Webdeveloper</h2>
        <caption>
            Frontend-fokuseret webudvikler under uddannelse
        </caption>
        <p>
            Mit navn er Emilie, og jeg er i gang med hovedforløbet som webudvikler på Roskilde Tekniske Skole. Jeg har en stor interesse for frontend-udvikling og brugeroplevelser, og arbejder målrettet med teknologier som HTML, CSS (Tailwind og SASS), JavaScript, React, Node.js og Git.
        </p>
        <p>
            Min tilgang til udvikling er præget af nysgerrighed, struktureret problemløsning og et ønske om kontinuerlig læring. Med en akademisk baggrund i kemi fra Københavns Universitet og en praktisk tilgang til kodning, kombinerer jeg analytisk tænkning med kreativt arbejde.
        </p>
            Jeg søger løbende nye muligheder for at opbygge erfaring gennem praksis, gerne i samarbejde med erfarne udviklere og i et miljø, hvor kvalitet og faglig udvikling prioriteres højt.
        </p>

        <div>
            <article class="card">
                <h3>MyMovies</h3>
                <iframe href="thon-mymovies.netlify.app">
            </article>
            <article class="card">
                <h3>Pokedex</h3>
                <iframe href="thon-pokedex.netlify.app">
            </article>

            <a href="../../pages/work.html">See more</a>
        </div>
        
    `

    return sectionElm
}
