(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function l(){const t=document.querySelector(".nav__links"),s=document.querySelector(".nav__burger"),n=document.querySelectorAll(".nav__burger span:nth-of-type(2), .nav__burger span:nth-of-type(3)");s.addEventListener("click",i);function i(){t.style.display==="none"||t.style.display===""?(t.style.display="flex",s.style.justifyContent="center",n.forEach(e=>{e.style.display="none"})):(t.style.display="none",s.style.justifyContent="space-between",n.forEach(e=>{e.style.display="block"}))}}const o=""+new URL("../logo.png",import.meta.url).href;function d(){const t="./src/pages/";let s=document.createElement("nav");return s.className="nav",s.innerHTML=`
        <div class="nav__logo">
            <a href="./index.html">
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
                <li class="nav__link"><a href="${t}about.html">About</a></li>
                <li class="nav__link"><a href="${t}projects.html">Projects</a></li>
                <li class="nav__link"><a href="${t}contact.html">Contact</a></li>
            </ul>
        </div>    
    `,s}document.addEventListener("DOMContentLoaded",()=>{l()});const c=""+new URL("../portrait.jpg",import.meta.url).href;function f(){let t=document.createElement("div");return t.className="div",t.innerHTML=`
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
