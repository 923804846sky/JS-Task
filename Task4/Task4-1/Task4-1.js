var getArr = JSON.parse(sessionStorage.getItem("haha")); //获取js2中得到的玩家乱序数组
console.log(getArr);
console.log(getArr.length);

$(".header-left").on("click", function () {
    window.location.href = "../../Task3/Task3/Task3.html"
})

$(".header-right").on("click", function () {
    sessionStorage.clear(); //清除本地存储
    window.location.href = "../../Task2/Task2/Task2.html"
})

//使用for循环遍历玩家数组，根据其数量插入相应数量的盒子
//append内使用了模板字符串
for (i = 0; i < getArr.length; i++) {
    $(".main").append(`
<div class="box">
    <div class="message">
        <div class="name">${getArr[i]}</div>
        <div class="number">${i+1}号</div>
    </div>
    <div class="opition">
        <img src="4.png" class="icon">
    </div>
</div>
`)

    //以下是不使用模板字符换的写法，即使用连字符"+"
    // $(".main").append(
    //     '<div class="box">' +
    //     '<div class="message">' +
    //     '<div class="name">' + getArr[i] + '</div>' +
    //     '<div class="number">' + (i + 1) + '号</div>' +
    //     '</div>' +
    //     '<div class="opition">' +
    //     '<img src="4.png" class="icon">' +
    //     '</div>' +
    //     '</div>'
    // )
}


//以下玩家身份状态数组为后面页面需要使用的
$(".footer").on("click", function () {
    var life = [];
    for (let i = 0; i < getArr.length; i++) {
        if (getArr[i] == "平民") {
            life.push({
                name: "平民",
                death: false,
                number: i + 1
            })
        } else {
            life.push({
                name: "杀手",
                death: false,
                number: i + 1
            })
        }
    }
    console.log(life);
    sessionStorage.setItem("life", JSON.stringify(life));
    window.location.href = "../Task4-2/Task4-2.html"
})