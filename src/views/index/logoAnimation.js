export default function initLogoAnimation() {
    const logoTop = document.querySelector('.logo-top');
    const logoMiddle = document.querySelector('.logo-middle');
    const logoBottom = document.querySelector('.logo-bottom');

    startLogoAnimation(logoTop, logoMiddle, logoBottom);
}


function startLogoAnimation(topElement, middleElement, bottomElement) {
    topElement.classList.add('animate-from-right');

    setTimeout(() => {
        bottomElement.classList.add('animate-from-left');
    }, 1000);

    setTimeout(() => {
        middleElement.classList.add('animate-from-center');
    }, 2000);
}