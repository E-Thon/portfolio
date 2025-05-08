export default function textarea() {
    const textarea = document.querySelector("textarea");
  
    textarea.addEventListener("click", function (event) {
      event.preventDefault();
      this.setSelectionRange(0, 0);
      this.focus();
    });
  }
  