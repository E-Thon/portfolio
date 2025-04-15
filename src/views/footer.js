import img from "/portrait.jpg";

export default function footer() {
    let divElm = document.createElement("div")
    divElm.className="div"

    divElm.innerHTML = `
        <figure class="div__portrait">
          <img src="${img}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
        </figure>
        <ul class="div__somes">
            <li class="div__some"><a href="https://www.facebook.com/emi.m.thon"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li class="div__some"><a href="https://www.instagram.com/emi.thon/"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="div__some"><a href="https://www.linkedin.com/in/emilie-thon-257943325/"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="div__some"><a href="https://github.com/E-Thon"><i class="fa-brands fa-github"></i></a></li>
        </ul>
       
    `
    return divElm;
}
  