export default function main() {
    let sectionElm = document.createElement("section")
    sectionElm.className="sectionMain"

    sectionElm.innerHTML = `
        <h1>
            About
        </h1>
        <div class="about">
            <p>About N/A</p>
            <span >... under construction</span>
        </div>

        
    `

    return sectionElm
}
