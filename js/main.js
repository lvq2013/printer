


let essay = {
    ipt: document.getElementById("ipt"),
    btn: document.getElementById("btn"),
    article: document.getElementById("article"),
    div : document.getElementById("div"),
};

let iptVal = essay.ipt.value;

essay.btn.onclick = function () {
    essay.article.innerHTML = ``;
    iptVal = essay.ipt.value;

    let i = 0;
    let timer = setInterval(function () {//定时器自动执行，不需要调用。
        if (i < iptVal.length) {
            let span = document.createElement("span");
            essay.article.appendChild(span);
            span.innerHTML += iptVal[i];
            span.style.color = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
            span.style.fontSize = randomFontSize();
            span.style.fontFamily = randomFontFamily();
            span.classList.add("fl");
            i++;

        }else{//i == iptVal.length   当把全部字都输出时，清除定时器。内部可以调用外部的函数
            clearInterval(timer);
        }
    }, Math.round(Math.random() * 160 + 80));


};

function randomFontSize() {
    let size = ["12px","13px","14px","15px","16px","17px","18px","19px","20px",];
    let idx = Math.floor(Math.random() * size.length); //取得随机数的索引
    return size[idx];
}
function randomFontFamily() {
    let family = ["黑体","楷体","华文隶书","华文琥珀","仿宋","方正舒体","隶书","华文楷体","微软雅黑",];
    let idx = Math.floor(Math.random() * family.length); //取得随机数的索引
    return family[idx];
}




