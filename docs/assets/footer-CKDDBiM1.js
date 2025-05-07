(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function o(){const t=document.querySelector(".nav__links"),n=document.querySelector(".nav__burger"),a=document.querySelectorAll(".nav__burger span:nth-of-type(2), .nav__burger span:nth-of-type(3)");n.addEventListener("click",r);function r(){t.style.display==="none"||t.style.display===""?(t.style.display="flex",n.style.justifyContent="center",a.forEach(e=>{e.style.display="none"})):(t.style.display="none",n.style.justifyContent="space-between",a.forEach(e=>{e.style.display="block"}))}}const l=""+new URL("../logo.png",import.meta.url).href;function d(){let t=document.createElement("nav");return t.className="nav",t.innerHTML=`
        <div class="nav__logo">
            <a href="https://e-thon.dk" target="_blank">
                        <img src="${l}" class="logo" alt="E-Thon logo" />
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
                <li class="nav__link"><a href="./projects.html">Projects</a></li>
                <li class="nav__link"><a href="./about.html">About</a></li>
                <li class="nav__link"><a href="./contact.html">Contact</a></li>
            </ul>
        </div>    
    `,t}document.addEventListener("DOMContentLoaded",()=>{o()});const c=""+new URL("../portrait.jpg",import.meta.url).href;function u(){let t=document.createElement("div");return t.className="div",t.innerHTML=`
        <figure class="div__portrait">
          <img src="${c}" class="portrait" alt="Portrait of Emilie Malene Thon" />  
        </figure>
        <ul class="div__somes">
            <li class="div__some"><a href="https://www.facebook.com/emi.m.thon"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li class="div__some"><a href="https://www.instagram.com/emi.thon/"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="div__some"><a href="https://www.linkedin.com/in/emilie-thon-257943325/"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li class="div__some"><a href="https://github.com/E-Thon"><i class="fa-brands fa-github"></i></a></li>
        </ul>
       
    `,t}export{u as f,d as h,l};
