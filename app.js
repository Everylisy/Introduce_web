// let yOffset = 0;

// function checkMenu() {
//     if (yOffset > 44) {
//         document.body.classList.add('local-nav-sticky');
//     } else {
//         document.body.classList.remove('local-nav-sticky');
//     }
// }

// window.addEventListener('scroll', () => {
//     yOffset = window.pageYOffset;
//       checkMenu();
//   });

var textWrapper = document.querySelector(".title1");

anime.timeline().add({
    targets: ".title1",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1900,
    delay: 500,
});