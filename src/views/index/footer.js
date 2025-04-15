import img from "/portrait.jpg";

export default function footer() {
    let divElm = document.createElement("div")
    divElm.className="div"

    divElm.innerHTML = `
        <figure class="div__portrait">
          <img src="${img}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
        </figure>
        <ul class="div__somes">
            <li class="div__some"><a href="#">Facebook</a></li>
            <li class="div__some"><a href="#">Instagram</a></li>
            <li class="div__some"><a href="#">LinkedIn</a></li>
            <li class="div__some"><a href="#">Github</a></li>
        </ul>
       
    `
    return divElm;
}
  