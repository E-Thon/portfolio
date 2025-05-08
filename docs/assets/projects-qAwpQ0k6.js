import{h as t,f as a}from"./footer-CC3EfLBS.js";function o(){const l="./",e="../public/";let i=document.createElement("section");return i.className="sectionMain",i.innerHTML=`
        <h1>
            projects
        </h1>
        
        <div class="projects__cards">
        <article>
                <h3>MyMovies</h3>
                <a href="https://thon-mymovies.netlify.app/" target="_blank">
                    <img src="${e}mymovies-screenshot543x543.png" alt="Screenshot of myMovies webpage">
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </ul>
            </article>
            <article>
                <h3>Pokedex</h3>
                <a href="https://thon-pokedex.netlify.app/" target="_blank">
                    <img src="${e}pokedex-screenshot588x588.png" alt="Screenshot of Pokedex webpage">
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </ul>
            </article>
            <article>
                <h3>Newsify</h3>
                <a href="https://thon-newsify.netlify.app/" target="_blank">
                    <img src="${e}newsify-screenshot538x538.png" alt="Screenshot of Newslify webpage">
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                        <li>Vite</li>
                        <li>Vitest</li>
                        <li>Node</li>
                        <li>webpack</li>
                    </ul>
                </ul>
            </article>
            <a href="${l}projects.html" class="btn">See more</a>
        </div>
       
    `,i}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(t());document.querySelector("main").append(o());document.querySelector("footer").append(a());
