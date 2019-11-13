var index = JSON.parse(sessionStorage.getItem("index"));
var getArr = JSON.parse(sessionStorage.getItem("haha"));
var killerArr = JSON.parse(sessionStorage.getItem("killerArr"));
var civiliansArr = JSON.parse(sessionStorage.getItem("civiliansArr"));
var life = JSON.parse(sessionStorage.getItem("life"));
var killerDeath = JSON.parse(sessionStorage.getItem("killerDeath")) || [];
var civiliansDeath = JSON.parse(sessionStorage.getItem("civiliansDeath")) || [];
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || [];
var day = sessionStorage.getItem("day") || 1;
var step = sessionStorage.getItem("step") || 1;
console.log(index);
console.log(getArr);
console.log(killerArr);
console.log(civiliansArr);
console.log(life);
console.log(killerDeath);
console.log(civiliansDeath);
console.log(allDeath);
var a;

$(".header-left").on("click", function () {
    window.location.href = "../Task4-2/Task4-2.html"
})

$(".header-right").on("click", function () {
    sessionStorage.clear();
    window.location.href = "../../Task2/Task2/Task2.html"
})

//根据玩家人数插入相应数量的盒子
for (i = 0; i < getArr.length; i++) {
    $(".main").append(`
<div class="box" data-index = "${i}">
    <div class="message">
        <div class="name">${getArr[i]}</div>
        <div class="number">${i+1}号</div>
    </div>
    <div class="opition">
        <img src="4.png" class="icon">
    </div>
</div>
`)
}

//判断时杀人还是投票页面，仅改变文字，不改变任何功能
if (index % 2 == 0) {
    $(".header-center").text("全民投票")
    $(".footText").text("点击投票")
} else {
    $(".header-center").text("开始杀人！")
    $(".footText").text("点击杀人！")
    $(".leftText").text("天黑请闭眼！")
}

$(".opition").hide();  //刀默认都是显示的，这里将它们都隐藏
$(".box").on("click", function () {
    a = $(this).data("index");  //获取点击盒子的索引值,省略写法，完整是a = $(this).attr("data-index"); 和上面33行代码相对应
    sessionStorage.setItem("a", a);  
    console.log(a)
    console.log(life[a].death)
    //for循环遍历，若盒子点击后重新选择，则之前盒子颜色恢复，新点击盒子颜色改变
    for (i = 0; i < life.length; i++) {
        if (life[i].death == false) {
            $(".name").eq(i).css("background", "#f5c97b");
            $(".opition").eq(i).hide();
        } else {
            $(".name").eq(i).css("background", "red");
        }
    }
    //判断是杀人还是投票
    if (index % 2 == 0) {
        // 投票页面
        if (life[a].death == false) {
            $(".name").eq(a).css("background", "red");
            $(".opition").eq(a).show();
        } else {
            alert("他已经死了！")
        }
    } else {
        // 杀人页面
        if (life[a].name == "平民" && life[a].death == false) {
            $(".name").eq(a).css("background", "red");
            $(".opition").eq(a).show();
        } else if (life[a].name == "杀手") {
            alert("杀手不能自杀！")
        } else {
            alert("他已经死了！")
        }
    }
})

//for循环遍历，改变所有死亡玩家的背景色
for (i = 0; i < life.length; i++) {
    if (life[i].death == true) {
        $(".name").eq(i).css("background", "red");
    }
}

function lifeChange() {
    life[a].death = true;
    life[a].day = day;//插入day，在杀人流程第一步和第四步页面跳转后传参需要用到
    life[a].step = step;//插入step，在杀人流程第一步和第四步页面跳转后传参需要用到
    allDeath.push(life[a]);//玩家死亡数组push死亡玩家
    console.log(allDeath)
    // if判断是杀手死亡数组push还是玩家死亡数组push
    if (life[a].name == "杀手") {
        killerDeath.push(life[a])
    } else {
        civiliansDeath.push(life[a])
    }
}

//数据保存函数
function dataSave() {
    sessionStorage.setItem("life", JSON.stringify(life));
    sessionStorage.setItem("killerDeath", JSON.stringify(killerDeath));
    sessionStorage.setItem("civiliansDeath", JSON.stringify(civiliansDeath));
    sessionStorage.setItem("allDeath", JSON.stringify(allDeath));
}

//玩家胜利函数
function win() {
    if (killerDeath.length == killerArr.length) {
        window.location.href = "../Task4-5/Task4-5.html"
    } else if (civiliansDeath.length == civiliansArr.length) {
        window.location.href = "../Task4-5/Task4-5.html"
    } else {
        window.location.href = "../Task4-2/Task4-2.html" 
    }
}

$(".footer").on("click", function () {
    lifeChange();
    dataSave();
    win();
})