import{h as d,f}from"./footer-SM1yP1WF.js";function p(){let n=document.createElement("section");return n.className="contact",n.innerHTML=`
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
                    If you are more of a texter, please, send an e-mail to <a href="mailto:emilie.m.thon@gmail.com?subject=Mail%20from%20portfolio&body=Direct%20contact%20"
                        target="_blank">emilie.m.thon@gmail.com</a>, or fill out the formula below.
                </p>
            </section>
            <form id="formula" class="formula" action="#" method="post">
                <label for="name" title="Type your name for the contact formula">Name</label>
                <input type="text" name="name" id="name" value="">
                <label for="mail" title="Type your e-mail adress for the contact formula">E-mail</label>
                <input type="text" name="mail" id="mail" value="">
                <label for="text" title="Type your message for the contact formula">Message</label>
                <textarea name="text" id="text" cols="50" rows="4">
                </textarea>
                <!-- Honeypot felt - usynligt for mennesker, men synligt for bots -->
                <div class="hp-field" aria-hidden="true">
                    <label for="website">Website (Don't fill out)</label>
                    <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
                </div>
                <div id="recaptcha" class="g-recaptcha"></div>
                <input type="submit" value="Send!" id="submitBtn">
                <p id="errorMessage"></p>
            </form>      
    `,n}function g(){//! ALLOWED CHARACTERS:
const n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,a=document.querySelector(".formula");if(!a){console.error("Validation: Form not found");return}console.log("Validation setup initialized");//! VALIDATE FORM
a.addEventListener("submit",i);//! VALIDATION FUNCTION
function i(t){const e=document.querySelector("#errorMessage");let o;console.log("Validation running");//! TEST OF NAME
if(t.target.name.value=="")return t.preventDefault(),o="Please fill in your name!",e.textContent=o,e.style.color="red",t.target.name.focus(),console.log("Validation failed: name empty"),!1;//! TEST OF E-MAIL
if(t.target.mail.value=="")return t.preventDefault(),o="Please fill in your e-mail adress!",e.textContent=o,e.style.color="red",t.target.mail.focus(),console.log("Validation failed: email empty"),!1;if(!n.test(t.target.mail.value))return t.preventDefault(),o="You must enter a valid e-mail adress (fx navn@mail.com)!",e.textContent=o,e.style.color="red",t.target.mail.focus(),console.log("Validation failed: invalid email format"),!1;//! TEST OF TEXTAREA
return t.target.text.value.trim()==""?(t.preventDefault(),o="Please write your message!",e.textContent=o,e.style.color="red",t.target.text.focus(),console.log("Validation failed: message empty"),!1):(e.textContent="",console.log("Validation passed successfully"),t.preventDefault(),!0)}}function y(){document.querySelector("textarea").addEventListener("click",function(a){a.preventDefault(),this.setSelectionRange(0,0),this.focus()})}function h(){const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",document.head.appendChild(n);const a={lastSubmission:0,cooldownPeriod:6e4,isRateLimited:function(){const t=Date.now(),e=t-this.lastSubmission;return e<this.cooldownPeriod?{limited:!0,remainingTime:Math.ceil((this.cooldownPeriod-e)/1e3)}:(this.lastSubmission=t,{limited:!1})}};n.onload=()=>{emailjs.init("Y4XhddjIFhPfQnfXA"),i()};function i(){const t=document.querySelector(".formula"),e=document.getElementById("errorMessage"),o=document.getElementById("submitBtn"),r=document.getElementById("website");if(!t){console.error("Form element not found");return}console.log("EmailJS setup initialized"),o.addEventListener("click",function(s){console.log("Submit button clicked"),setTimeout(function(){const l=e.textContent;if(console.log("Current error state:",l),r&&r.value!==""){console.log("Bot detected through honeypot field"),e.textContent="Message sent successfully!";return}if(l&&l!=="Sending..."&&!l.includes("successfully")&&!l.includes("wait")){console.log("Validation error detected, stopping EmailJS send");return}console.log("Validation passed, proceeding with EmailJS");const m=a.isRateLimited();if(m.limited){e.textContent=`Please wait ${m.remainingTime} seconds before sending another message.`,e.style.color="red";return}o.disabled=!0,e.textContent="Sending...",e.style.color="black";const u={from_name:document.getElementById("name").value,reply_to:document.getElementById("mail").value,message:document.getElementById("text").value.trim()};console.log("Sending email with params:",u),emailjs.send("service_r94fdda","template_2c8nsm4",u).then(c=>{console.log("EmailJS success response:",c),e.textContent="Message sent successfully!",e.style.color="green",t.reset(),o.disabled=!1},c=>{console.error("EmailJS error:",c),e.textContent="Failed to send message. Please try again.",e.style.color="red",o.disabled=!1})},100)}),t.addEventListener("submit",function(s){return s.preventDefault(),!1})}}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(d(!1));document.querySelector("main").append(p());document.querySelector("footer").append(f());g();h();y();
