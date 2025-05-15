export default function burger() {
  const menu = document.querySelector(".nav__links");
  const burger = document.querySelector(".nav__burger");
  const middleBars = document.querySelectorAll(
    ".nav__burger span:nth-of-type(2), .nav__burger span:nth-of-type(3)"
  );

  burger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      burger.style.justifyContent = "center";
      
      middleBars.forEach((bar) => {
        bar.style.display = "none";
      })
    } else {
      menu.style.display = "none";
      burger.style.justifyContent = "space-between";
      middleBars.forEach((bar) => {
        bar.style.display = "block";
      })      
    }
  }
}
