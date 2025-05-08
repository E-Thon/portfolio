import{h as v,f as b}from"./footer-nKAi0SeU.js";const E="modulepreload",w=function(o,m){return new URL(o,m).href},y={},x=function(m,a,t){let i=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),f=n?.nonce||n?.getAttribute("nonce");i=Promise.allSettled(a.map(l=>{if(l=w(l,t),l in y)return;y[l]=!0;const s=l.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!t)for(let d=r.length-1;d>=0;d--){const p=r[d];if(p.href===l&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":E,s||(c.as="script"),c.crossOrigin="",c.href=l,f&&c.setAttribute("nonce",f),document.head.appendChild(c),s)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function e(r){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r}return i.then(r=>{for(const n of r||[])n.status==="rejected"&&e(n.reason);return m().catch(e)})};function S(){const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",document.head.appendChild(o);const m={lastSubmission:0,cooldownPeriod:6e4,isRateLimited:function(){const a=Date.now(),t=a-this.lastSubmission;return t<this.cooldownPeriod?{limited:!0,remainingTime:Math.ceil((this.cooldownPeriod-t)/1e3)}:(this.lastSubmission=a,{limited:!1})}};o.onload=()=>{emailjs.init("Y4XhddjIFhPfQnfXA")},x(()=>Promise.resolve().then(()=>P),void 0,import.meta.url).then(a=>{const t=a.default;t();const i=document.querySelector(".formula"),e=document.getElementById("errorMessage"),r=document.getElementById("submitBtn"),n=document.getElementById("website");i.addEventListener("submit",function(f){if(f.preventDefault(),n&&n.value!=="")return console.log("Bot detected through honeypot field"),e.textContent="Message sent successfully!",!1;const l=m.isRateLimited();if(l.limited)return e.textContent=`Please wait ${l.remainingTime} seconds before sending another message.`,e.style.color="red",!1;let s=!0;try{const u=new Event("submit",{cancelable:!0});!i.dispatchEvent(u)&&(s=!1)}catch(u){console.error("Error running validation:",u),s=!1}if(s){r.disabled=!0,e.textContent="Sending...",e.style.color="black";const u={from_name:document.getElementById("name").value,reply_to:document.getElementById("mail").value,message:document.getElementById("text").value};emailjs.send("service_r94fdda","template_2c8nsm4",u).then(()=>{e.textContent="Message sent successfully!",e.style.color="green",i.reset(),r.disabled=!1},h=>{e.textContent="Failed to send message. Please try again.",e.style.color="red",console.error("EmailJS error:",h),r.disabled=!1})}})}).catch(a=>{console.error("Error loading validation module:",a)})}function _(){let o=document.createElement("section");return o.className="contact",o.innerHTML=`
        <h1>
            contact
        </h1>
            <section>
                <h2>
                    Hello, thank you for your interest!
                </h2>
                <p>
                    I am currently placed in Nørrebro, Copenhagen where I live.
                </p>
                <p>
                    Get in contact by phone on <a href="tel:+4560615218"
                        class="section__content__text__link">+45 60 61 52 18</a>. If I am unavailable, please leave a message and I will get back to you as soon as possible.
                </p>
                <p>
                    Please, send an e-mail to <a href="mailto:emilie.m.thon@gmail.com?subject=Mail%20from%20portfolio&body=Direct%20contact%20"
                        target="_blank">emilie.m.thon@gmail.com</a>, or fill out the formula below.
                </p>
            </section>
            <form id="formula" class="formula" action="#" method="post">
                <label for="name" title="Type your name for the contact formula">Name</label>
                <input type="text" name="name" id="name" value="">
                <label for="mail" title="Type your e-mail adress for the contact formula">Email</label>
                <input type="text" name="mail" id="mail" value="">
                <label for="text" title="Type your message for the contact formula">Message</label>
                <textarea name="text" id="text" cols="50" rows="4">
                </textarea>
                <!-- Honeypot felt - usynligt for mennesker, men synligt for bots -->
                <div class="hp-field" aria-hidden="true">
                    <label for="website">Website (Udfyld ikke dette felt)</label>
                    <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
                </div>
                <div id="recaptcha" class="g-recaptcha"></div>
                <input type="submit" value="Send!" id="submitBtn">
                <p id="errorMessage"></p>
            </form>      
    `,S(),o}function g(){//! ALLOWED CHARACTERS:
const o=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,m=document.querySelector(".formula");//! VALIDATE FORM
m.addEventListener("submit",a);//! VALIDATION FUNCTION
function a(t){const i=document.querySelector("#errorMessage");let e;//! TEST OF NAME
if(t.target.name.value=="")return t.preventDefault(),e="Please fill in your name!",i.textContent=e,t.target.name.focus(),!1;//! TEST OF E-MAIL
if(t.target.mail.value=="")return t.preventDefault(),e="Please fill in your e-mail adress!",i.textContent=e,t.target.mail.focus(),!1;if(!o.test(t.target.mail.value))return t.preventDefault(),e="You must enter a valid e-mail adress (fx navn@mail.com)!",i.textContent=e,t.target.mail.focus(),!1;//! TEST OF TEXTAREA
if(t.target.text.value.trim()=="")return t.preventDefault(),e="Please write your message!",i.textContent=e,t.target.text.focus(),!1}}const P=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(v());document.querySelector("main").append(_());document.querySelector("footer").append(b());g();
