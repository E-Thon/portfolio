(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function r(){const t=document.querySelector(".nav__links"),a=document.querySelector(".nav__burger"),s=document.querySelectorAll(".nav__burger span:nth-of-type(2), .nav__burger span:nth-of-type(3)");a.addEventListener("click",l);function l(){t.style.display==="none"||t.style.display===""?(t.style.display="flex",a.style.justifyContent="center",s.forEach(e=>{e.style.display="none"})):(t.style.display="none",a.style.justifyContent="space-between",s.forEach(e=>{e.style.display="block"}))}}const o=""+new URL("../logo.png",import.meta.url).href;function d(t){if(t){const a="/portfolio/src/pages/";let s=document.createElement("nav");return s.className="nav",s.innerHTML=`
        <div class="nav__logo">
            <a href="/portfolio">
                <img src="${o}" class="logo" alt="E-Thon logo" />
            </a>
        </div>
        <div class="nav__menu">
            <div class="nav__burger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__links">
                <li class="nav__link"><a href="${a}about.html">About</a></li>
                <li class="nav__link"><a href="${a}projects.html">Projects</a></li>
                <li class="nav__link"><a href="${a}contact.html">Contact</a></li>
            </ul>
        </div>    
    `,s}else{const a="/portfolio/src/pages/";let s=document.createElement("nav");return s.className="nav",s.innerHTML=`
        <div class="nav__logo">
            <a href="../../">
                <img src="${o}" class="logo" alt="E-Thon logo" />
            </a>
        </div>
        <div class="nav__menu">
            <div class="nav__burger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__links">
                <li class="nav__link"><a href="${a}about.html">About</a></li>
                <li class="nav__link"><a href="${a}projects.html">Projects</a></li>
                <li class="nav__link"><a href="${a}contact.html">Contact</a></li>
            </ul>
        </div>    
    `,s}}document.addEventListener("DOMContentLoaded",()=>{r()});const c=""+new URL("../portrait.jpg",import.meta.url).href;function f(){let t=document.createElement("div");return t.className="div",t.innerHTML=`
    <div class="div__contact">
        <figure class="div__portrait">
          <img src="${c}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
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
       
    `,t}export{f,d as h,o as l};
