import logo from "/logo.png";
import logoTop from "/logo-top.png";
import logoMiddle from "/logo-middle.png";
import logoBottom from "/logo-bottom.png";

export default function main() {
    const baseUrl = import.meta.env.DEV ? '/src/pages/' : './src/pages/';
    let sectionElm = document.createElement("section");
    sectionElm.className = "mainSection";

    sectionElm.innerHTML = `
        <h1>
            Portfolio
        </h1>
        <div class="intro"> 
            <div class="logo">
                <img src="${logoTop}" class="logo__part top" alt="E-Thon logo top part" />
                <img src="${logoMiddle}" class="logo__part middle" alt="E-Thon logo middle part" />
                <img src="${logoBottom}" class="logo__part bottom" alt="E-Thon logo bottom part" />
            </div>
        </div>
        <a href="${baseUrl}projects.html" class="logoLink">
            <img src="${logo}" alt="E-Thon full logo" />
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

            <a href="${baseUrl}projects.html" class="btn">See more</a>
        </div>
        
    `;

    return sectionElm;
}
