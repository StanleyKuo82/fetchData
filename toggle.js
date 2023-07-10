const button = document.getElementById("toggle");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");

let changeImg = false;




button.onclick = function(){
    button.classList.toggle("dark");
    body.classList.toggle("dark");
    h2.classList.toggle("dark");

    // 切換圖片
    if (changeImg) {
        img.src = "悟空1.png";
        changeImg = false;
    }
    else
    {
        img.src = "悟空2.png";
        changeImg = true;
    }
}
