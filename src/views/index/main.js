import logo from "/logo.png";

export default function main() {
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
                <a href="https://thon-mymovies.netlify.app/">
                    <img src="https://placecats.com/g/300/200" alt="Image of the news article">
                </a>
            </article>
            <article class="card">
                <h3>Pokedex</h3>
                <a href="https://thon-pokedex.netlify.app/">
                    <img src="https://placecats.com/g/300/200" alt="Image of the news article">
                </a>
            </article>

            <a href="./projects.html" class="btn">See more</a>
        </div>
        
    `;

  return sectionElm;
}
