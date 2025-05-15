export default function initLogoAnimation() {
    const intro = document.querySelector(".intro");
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");
    const middle = document.querySelector(".middle");

    window.addEventListener("DOMContentLoaded", () => {
        //TOP:
        top.classList.add("animate-top");

        // BOTTOM:
        setTimeout(() => {
            bottom.classList.add("animate-bottom");
        }, 700);

        // MIDDLE:
        setTimeout(() => {
            middle.classList.add("animate-middle");
        }, 1400);

        // fade out
        setTimeout(() => {
            setTimeout(() => {
                intro.classList.add("hide");
            }, 100);
            [top, bottom, middle].forEach((part, index) => {
                setTimeout(() => {
                    part.classList.remove("animate-top", "animate-bottom", "animate-middle");
                    part.style.opacity = "0";
                }, index * 50);
            });
        }, 2500);

    });
}
