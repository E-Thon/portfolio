export default function validation (){
    //! ALLOWED CHARACTERS:
    const regxp_email =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const infoForm = document.querySelector(".formula");
    //! VALIDATE FORM
    infoForm.addEventListener("submit", validateForm);
    //! VALIDATION FUNCTION
    function validateForm(e) {
      const messageField = document.querySelector("#errorMessage");
      let error;
      
      //! TEST OF NAME
      let nameInput = e.target.name.value;
      if (nameInput == "") {
        e.preventDefault();
        error = "Please fill in your name!";
        messageField.textContent = error;
        e.target.name.focus();
        return false;
      }
      //! TEST OF E-MAIL
      if (e.target.mail.value == "") {
        e.preventDefault();
        error = "Please fill in your e-mail adress!";
        messageField.textContent = error;
        e.target.mail.focus();
        return false;
      }
      if (!regxp_email.test(e.target.mail.value)) {
        e.preventDefault();
        error = "You must enter a valid e-mail adress (fx navn@mail.com)!";
        messageField.textContent = error;
        e.target.mail.focus();
        return false;
      }
      //! TEST OF TEXTAREA
      let textarea = e.target.text.value.trim();
      if (textarea == "") {
        e.preventDefault();
        error = "Please write your message!";
        messageField.textContent = error;
        e.target.text.focus();
        return false;
      }
    }

}
