import logo from '/logo.png'

export default function index() {
    let sectionElm = document.createElement("section")
    sectionElm.className="sectionMain"

    sectionElm.innerHTML = `
        <a href="https://e-thon.dk" target="_blank">
            <img src="${logo}" class="logo" alt="E-Thon logo" />
        </a>
        
    `

    return sectionElm
}
