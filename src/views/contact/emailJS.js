export default function email() {
    const emailJsScript = document.createElement('script');
    emailJsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    document.head.appendChild(emailJsScript);
    
    // Rate limiting værktøj
    const rateLimiter = {
        lastSubmission: 0,
        cooldownPeriod: 60000,
        isRateLimited: function() {
            const now = Date.now();
            const timeSinceLastSubmission = now - this.lastSubmission;
            
            if (timeSinceLastSubmission < this.cooldownPeriod) {
                return {
                    limited: true,
                    remainingTime: Math.ceil((this.cooldownPeriod - timeSinceLastSubmission) / 1000)
                };
            }
            
            this.lastSubmission = now;
            return { limited: false };
        }
    };
    
    // Initialiser EmailJS når scriptet er indlæst
    emailJsScript.onload = () => {
        emailjs.init("Y4XhddjIFhPfQnfXA");
    };
    
    // Import validering og tilføj EmailJS-funktionalitet
    import('./validator.js').then(module => {
        const validation = module.default;
        validation();
        
        // Tilføj EmailJS-funktionalitet
        const form = document.querySelector(".formula");
        const errorMessage = document.getElementById('errorMessage');
        const submitButton = document.getElementById('submitBtn');
        const honeypotField = document.getElementById('website');
        
        // Overskriv standard formular-håndtering for at tilføje EmailJS
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Tjek om honeypot-feltet er udfyldt (bot-check)
            if (honeypotField && honeypotField.value !== '') {
                console.log("Bot detected through honeypot field");
                // Silent failure - vi fortæller ikke botten, at vi har fanget den
                errorMessage.textContent = "Message sent successfully!"; // Falsk positiv besked
                return false;
            }
            
            // Tjek rate limiting
            const rateLimitStatus = rateLimiter.isRateLimited();
            if (rateLimitStatus.limited) {
                errorMessage.textContent = `Please wait ${rateLimitStatus.remainingTime} seconds before sending another message.`;
                errorMessage.style.color = "red";
                return false;
            }
            
            // Kør validering fra validation.js
            let isValid = true;
            try {
                // Simulér validering ved at udløse en submit event, som validation.js lytter efter
                const validationEvent = new Event('submit', { cancelable: true });
                const wasPrevented = !form.dispatchEvent(validationEvent);
                
                // Hvis event'en blev forhindret af validation.js, så er formen ikke valid
                if (wasPrevented) {
                    isValid = false;
                }
            } catch (err) {
                console.error('Error running validation:', err);
                isValid = false;
            }
            
            if (isValid) {
                // Vis loading state
                submitButton.disabled = true;
                errorMessage.textContent = "Sending...";
                errorMessage.style.color = "black";
                
                // Forbered data til EmailJS format
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    reply_to: document.getElementById('mail').value,
                    message: document.getElementById('text').value
                };
                
                // Send email via EmailJS
                emailjs.send('service_r94fdda', 'template_2c8nsm4', templateParams)
                    .then(() => {
                        errorMessage.textContent = "Message sent successfully!";
                        errorMessage.style.color = "green";
                        form.reset();
                        submitButton.disabled = false;
                    }, (error) => {
                        errorMessage.textContent = "Failed to send message. Please try again.";
                        errorMessage.style.color = "red";
                        console.error('EmailJS error:', error);
                        submitButton.disabled = false;
                    });
            }
        });
    }).catch(err => {
        console.error('Error loading validation module:', err);
    });
}