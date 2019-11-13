//获取DOM节点
var killer = document.getElementById("killer");
var civilians = document.getElementById("civilians");
var reduce = document.getElementsByClassName("reduce");
var add = document.getElementsByClassName("add");
var input_range = document.getElementById("input_range");
var input_text = document.getElementById("input_text");

//以下是使用jquery实现页面跳转
$(".arrow").click(
    function () {
        window.location.href = "../CSS-13/Task13-1/Task13-1.html"
    }
)

//点击"-"号或者"+"号实现滑动条和输入框自减-1或者自+1
reduce[0].onclick = function () {
    input_range.value--;
    input_text.value--;
    people_number(); //调用人数分配方法
    if (input_text.value < 4) {
        input_text.value = 4;
        alert("玩家数量不能小于4！");
    }
}

add[0].onclick = function () {
    input_range.value++;
    input_text.value++;
    people_number();
    if (input_text.value > 18) {
        input_text.value = 18;
        alert("玩家数量不能大于18！");
    }
}

//滑动条监听，实现滑动条和输入框人数同步功能
input_range.oninput = function () {
    input_text.value = input_range.value;
    people_number(); //调用人数分配方法
}

input_text.oninput = function () {
    input_range.value = input_text.value;
    people_number();
}

//输入框人数超出范围时提示
input_text.onchange = function () {
    if (input_text.value < 4 || input_text.value > 18) {
        alert("玩家数量应为4-18，请重新输入玩家数量！")
    }
}

//杀手和平民人数分配
var killer_number;
var civilians_number;

function people_number() {
    if (input_text.value < 4 || input_text.value > 18) {
        killer.innerHTML = "";
        civilians.innerHTML = "";
    } else {
        killer_number = Math.floor(input_text.value / 3);
        civilians_number = input_text.value - killer_number;
        $("#killer").text(killer_number);
        $("#civilians").text(civilians_number);
    }
}

// 数组乱序
var killerArr;
var civiliansArr;

function arrRandom() {
    killerArr = new Array(killer_number).fill('杀手');
    civiliansArr = new Array(civilians_number).fill('平民');
    var allArr = killerArr.concat(civiliansArr);
    console.log(allArr);
    var newArr = [];
    console.log(newArr);
    for (i = 0, len = allArr.length; i < len; i++) {
        var a = Math.floor(Math.random() * (allArr.length - 1));
        newArr[i] = allArr[a];
        allArr.splice(a, 1);
    }
    return newArr;
}

// 页面跳转
$("#letGo").click(function () {
    people_number();
    arrRandom();
    sessionStorage.setItem("haha", JSON.stringify(arrRandom()));
    sessionStorage.setItem("killerArr", JSON.stringify(killerArr));
    sessionStorage.setItem("civiliansArr", JSON.stringify(civiliansArr));
    console.log(JSON.stringify(arrRandom()));
    console.log(JSON.stringify(killerArr));
    console.log(JSON.stringify(civiliansArr));
    window.location.href = "../../Task3/Task3/Task3.html";
});