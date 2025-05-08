export default function main() {
    const baseUrl = import.meta.env.DEV ? '/src/pages/' : './';
    // Stien til billeder bør også være forskellig i udviklings- og produktionsmiljø
    const imgPath = import.meta.env.DEV ? '/public/' : '../public/';
    
    let sectionElm = document.createElement("section")
    sectionElm.className = "sectionMain"
    sectionElm.innerHTML = `
        <h1>
            projects
        </h1>
        
        <div class="projects__cards">
        <article>
                <h3>MyMovies</h3>
                <a href="https://thon-mymovies.netlify.app/" target="_blank">
                    <img src="${imgPath}mymovies-screenshot543x543.png" alt="Screenshot of myMovies webpage">
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
                    <img src="${imgPath}pokedex-screenshot600x600.png" alt="Screenshot of Pokedex webpage">
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
                    <img src="${imgPath}newsify-screenshot538x538.png" alt="Screenshot of Newslify webpage">
                </a>
                <ul>
                    <li>Technologies used</li>
                    <ul>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                    </ul>
                </ul>
            </article>
            <a href="${baseUrl}projects.html" class="btn">See more</a>
        </div>
        <div class="projects">
            <p>Projects</p>
            <span >... under construction</span>
        </div>
       
    `
    return sectionElm
}