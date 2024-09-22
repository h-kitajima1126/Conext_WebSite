// 背景画面をスクロールで変える
const Background = document.querySelector(".style");
const bg = [
    "images/conextimage-background1.jpg",
    "images/conextimage-background2.jpg"
];

window.addEventListener("scroll",()=>{
    //スクロール量
    let scroll = window.scrollY;
    //画面の高さ
    let view = window.innerHeight;

    let image = Math.floor((scroll / view) % bg.length);
    Background.style.backgroundImage = `url(${bg[image]})`;
    console.log(Background);
    
});