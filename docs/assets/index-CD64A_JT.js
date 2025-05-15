import{l as r,h as s,f as l}from"./footer-wxPfvB1K.js";const c=""+new URL("../logo-top.png",import.meta.url).href,d=""+new URL("../logo-middle.png",import.meta.url).href,m=""+new URL("../logo-bottom.png",import.meta.url).href;function p(){const o="/portfolio/src/pages/";let e=document.createElement("section");return e.className="mainSection",e.innerHTML=`
        <h1>
            Portfolio
        </h1>
        <div class="intro"> 
            <div class="logo">
                <img src="${c}" class="logo__part top" alt="E-Thon logo top part" />
                <img src="${d}" class="logo__part middle" alt="E-Thon logo middle part" />
                <img src="${m}" class="logo__part bottom" alt="E-Thon logo bottom part" />
            </div>
        </div>
        <a href="${o}projects.html" class="logoLink">
            <img src="${r}" alt="E-Thon full logo" />
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

        <div class="projects">
            <article class="projects__card">
                <a href="https://thon-mymovies.netlify.app/" target="_blank">
                    <img src="mymovies-screenshot564x399.png" alt="Screenshot of myMovies webpage">
                </a>
            </article>
            <article class="projects__card">
                <a href="https://thon-pokedex.netlify.app/" target="_blank">
                    <img src="pokedex-screenshot536x378.png" alt="Screenshot of Pokedex webpage">
                </a>
            </article>
            <article class="projects__card">
                <a href="https://thon-newsify.netlify.app/" target="_blank">
                    <img src="newsify-screenshot454x333.png" alt="Screenshot of Newslify webpage">
                </a>
            </article>

            <a href="${o}projects.html" class="btn">See more</a>
        </div>
        
    `,e}function h(){const o=document.querySelector(".intro"),e=document.querySelector(".top"),t=document.querySelector(".bottom"),a=document.querySelector(".middle");window.addEventListener("DOMContentLoaded",()=>{e.classList.add("animate-top"),setTimeout(()=>{t.classList.add("animate-bottom")},700),setTimeout(()=>{a.classList.add("animate-middle")},1400),setTimeout(()=>{setTimeout(()=>{o.classList.add("hide")},100),[e,t,a].forEach((n,i)=>{setTimeout(()=>{n.classList.remove("animate-top","animate-bottom","animate-middle"),n.style.opacity="0"},i*50)})},2500)})}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(s(!0));document.querySelector("main").append(p());document.querySelector("footer").append(l());h();
