import img from "/portrait.jpg";

export default function footer() {
    let divElm = document.createElement("div")
    divElm.className="div"

    divElm.innerHTML = `
    <div class="div__contact">
        <figure class="div__portrait">
          <img src="${img}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
        </figure>
        <address>
                <p>Nørrebro, Copenhagen</p>
                <p>Mobil: <a href="callto:004512345678">+45 60 61 52 18</a></p>
                <p>Mail: <a href="mailto:emilie.m.thon@gmail.dk">emilie.m.thon@gmail.dk</a></p>
        </address>
        </div>
        <ul class="div__somes">
            <li class="div__some"><a href="https://www.facebook.com/emi.m.thon"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li class="div__some"><a href="https://www.instagram.com/emi.thon/"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="div__some"><a href="https://www.linkedin.com/in/emilie-thon-257943325/"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="div__some"><a href="https://github.com/E-Thon"><i class="fa-brands fa-github"></i></a></li>
        </ul>
       
    `
    return divElm;
}
  