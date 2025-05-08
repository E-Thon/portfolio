import email from "./emailJS"

export default function main() {
    let sectionElm = document.createElement("section")
    sectionElm.className="contact"
    sectionElm.innerHTML = `
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
    `
    email();

    return sectionElm;
}