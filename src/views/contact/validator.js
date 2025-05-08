export default function validation (){
    //! ALLOWED CHARACTERS:
    const regxp_email =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const infoForm = document.querySelector(".formula");
    
    if (!infoForm) {
        console.error("Validation: Form not found");
        return;
    }
    
    console.log("Validation setup initialized");
    //! VALIDATE FORM
    infoForm.addEventListener("submit", validateForm);
    
    //! VALIDATION FUNCTION
    function validateForm(e) {
      const messageField = document.querySelector("#errorMessage");
      let error;
      
      console.log("Validation running");
      
      //! TEST OF NAME
      let nameInput = e.target.name.value;
      if (nameInput == "") {
        e.preventDefault();
        error = "Please fill in your name!";
        messageField.textContent = error;
        messageField.style.color = "red";
        e.target.name.focus();
        console.log("Validation failed: name empty");
        return false;
      }
      //! TEST OF E-MAIL
      if (e.target.mail.value == "") {
        e.preventDefault();
        error = "Please fill in your e-mail adress!";
        messageField.textContent = error;
        messageField.style.color = "red";
        e.target.mail.focus();
        console.log("Validation failed: email empty");
        return false;
      }
      if (!regxp_email.test(e.target.mail.value)) {
        e.preventDefault();
        error = "You must enter a valid e-mail adress (fx navn@mail.com)!";
        messageField.textContent = error;
        messageField.style.color = "red";
        e.target.mail.focus();
        console.log("Validation failed: invalid email format");
        return false;
      }
      //! TEST OF TEXTAREA
      let textarea = e.target.text.value.trim();
      if (textarea == "") {
        e.preventDefault();
        error = "Please write your message!";
        messageField.textContent = error;
        messageField.style.color = "red";
        e.target.text.focus();
        console.log("Validation failed: message empty");
        return false;
      }
      
      // Hvis vi når hertil er validering OK - ryd error message
      messageField.textContent = "";
      console.log("Validation passed successfully");
      e.preventDefault(); // Stadig forhindre default submit
      return true;
    }
}