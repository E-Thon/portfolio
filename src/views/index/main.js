import logo from "/logo.png";

export default function main() {
    const baseUrl = import.meta.env.DEV ? '/src/pages/' : './';
    let sectionElm = document.createElement("section");
    sectionElm.className = "mainSection";

    sectionElm.innerHTML = `
        <h1>
            Portfolio
        </h1>
        <a href="./projects.html" target="_blank" class="logoLink">
            <img src="${logo}" class="logo" alt="E-Thon logo" />
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
                <a href="https://thon-mymovies.netlify.app/" target="_blank">
                    <img src="public/mymovies-screenshot543x543.png" alt="Screenshot of myMovies webpage">
                </a>
            </article>
            <article class="card">
                <h3>Pokedex</h3>
                <a href="https://thon-pokedex.netlify.app/" target="_blank">
                    <img src="public/pokedex-screenshot600x600.png" alt="Screenshot of Pokedex webpage">
                </a>
            </article>
            <article class="card">
                <h3>Newsify</h3>
                <a href="https://thon-newsify.netlify.app/" target="_blank">
                    <img src="public/newsify-screenshot538x538.png" alt="Screenshot of Newslify webpage">
                </a>
            </article>

            <a href="${baseUrl}projects.html" class="btn">See more</a>
        </div>
        
    `;

    return sectionElm;
}
