(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l="/logo.png";function s(){let n=document.createElement("section");return n.className="mainSection",n.innerHTML=`
        <h1>
            Portfolio
        </h1>
        <a href="https://e-thon.dk" target="_blank">
            <img src="${l}" class="logo" alt="E-Thon logo" />
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
        <p>
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
        
    `,n}function c(){let n=document.createElement("nav");return n.className="nav",n.innerHTML=`
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
    `,n}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(c());document.querySelector("main").append(s());
