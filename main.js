let imagesItems = [...document.querySelectorAll(".image-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");



//監視対象になった瞬間、activeを負荷する関数
let setItemActive = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.7,
};

//どこにいるのか監視する。そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive,options);

observer.observe(titleMessage);

//image-wrapは偶数と奇数で出現場所が違う。
imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./images/conextimage${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "25%") : (title.style.left = "45%");
    observer.observe(title);
});