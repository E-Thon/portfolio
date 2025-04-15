(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s=""+new URL("../logo.png",import.meta.url).href;function l(){let n=document.createElement("section");return n.className="mainSection",n.innerHTML=`
        <h1>
            Portfolio
        </h1>
        <a href="../../pages/projects.html" target="_blank">
            <img src="${s}" class="logo" alt="E-Thon logo" />
        </a>
        <h2>Emilie Thon</h2>
        <h4>Frontend-Focused Web Developer in Training</h4>
        <p>
            My name is Emilie, and I am currently in the main course of the Web Development program at Roskilde Technical School. I have a strong interest in frontend development and user experience, and I work purposefully with technologies such as HTML, CSS (Tailwind and SASS), JavaScript, React, Node.js, and Git (GitHub).
        </p>
        <p>
            My approach to development is characterized by curiosity, structured problem-solving, and a desire for continuous learning. With an academic background in chemistry from the University of Copenhagen and a hands-on approach to coding, I combine analytical thinking with creative work.
        </p>
        <p>
            I am continuously seeking new opportunities to gain practical experience, preferably in collaboration with experienced developers and in an environment where quality and professional development are highly valued.
        </p>

        <div>
            <article class="card">
                <h3>MyMovies</h3>
                <iframe href="thon-mymovies.netlify.app"></iframe>
            </article>
            <article class="card">
                <h3>Pokedex</h3>
                <iframe href="thon-pokedex.netlify.app"></iframe>
            </article>

            <a href="../../pages/work.html">See more</a>
        </div>
        
    `,n}function c(){const n=document.querySelector(".nav__links"),a=document.querySelector(".nav__burger"),r=document.querySelectorAll(".nav__burger span:nth-of-type(2), .nav__burger span:nth-of-type(3)");a.addEventListener("click",o);function o(){n.style.display==="none"||n.style.display===""?(n.style.display="flex",a.style.justifyContent="center",r.forEach(e=>{e.style.display="none"})):(n.style.display="none",a.style.justifyContent="space-between",r.forEach(e=>{e.style.display="block"}))}}function p(){let n=document.createElement("nav");return n.className="nav",n.innerHTML=`
        <div class="nav__logo">
            <a href="https://e-thon.dk" target="_blank">
                        <img src="${s}" class="logo" alt="E-Thon logo" />
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
                <li class="nav__link"><a href="../../pages/projects.html">Projects</a></li>
                <li class="nav__link"><a href="../../pages/about.html">About</a></li>
                <li class="nav__link"><a href="../../pages/contact.html">Contact</a></li>
            </ul>
        </div>    
    `,n}document.addEventListener("DOMContentLoaded",()=>{c()});function d(){let n=document.createElement("nav");return n.className="nav",n.innerHTML=`
        <figure class="footer__portait">
          <img src="${portait}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
        </figure>
        <div class="nav__menu">
            <div class="nav__burger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__links">
                <li class="nav__link"><a href="../../pages/projects.html">Projects</a></li>
                <li class="nav__link"><a href="../../pages/about.html">About</a></li>
                <li class="nav__link"><a href="../../pages/contact.html">Contact</a></li>
            </ul>
        </div>    
    `,n}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(p());document.querySelector("main").append(l());document.querySelector("footer").append(d());
