export default function main() {
    let sectionElm = document.createElement("section")
    sectionElm.className="sectionMain"

    sectionElm.innerHTML = `
        <h1>
            projects
        </h1>
        <div class="projects">
            <p>Projects N/A</p>
            <span >... under construction</span>
        </div>

        
    `

    return sectionElm
}
