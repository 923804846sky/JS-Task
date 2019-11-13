var life = JSON.parse(sessionStorage.getItem("life"));
console.log(life);

$(".header-left").on("click", function () {
    window.location.href = "../Task4-2/Task4-2.html"
})

$(".header-right").on("click", function () {
    window.location.href = "../../Task2/Task2/Task2.html"
})

for (i = 0; i < life.length; i++) {
    $(".main").append(`
<div class="box" data-index = "${i}">
    <div class="message">
        <div class="name">${life[i].name}</div>
        <div class="number">${i+1}号</div>
    </div>
</div>
`)
    if (life[i].death == true) {
        $(".name").eq(i).css("background", "red");
    }
}