// AOS（アニメーションライブラリ）の初期化
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// スムーススクロール
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         }
//     });
// });
