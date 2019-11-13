//定义节点box
var box = document.getElementsByClassName("box");

//定义一个函数，作用是可以随机生成三个颜色并返回这个颜色的rgb
function color_select() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ')';
}
//定义一个函数，作用是随机生成三个小于九宫格数量(box.length即数字9)的数字
//通过if函数判断这三个数字是否重复，如果重复，则继续执行这个函数直到生成三个不一样的数字
//如果不重复，则将这三个数字分别赋给box来选取三个盒子，从而给其上色
function num_select() {
    var num1 = Math.floor(Math.random() * box.length);
    var num2 = Math.floor(Math.random() * box.length);
    var num3 = Math.floor(Math.random() * box.length);
    if (num1 != num2 && num2 != num3 && num1 != num3) {
        box[num1].style.background = color_select();
        box[num2].style.background = color_select();
        box[num3].style.background = color_select();
    } else {
        num_select()
    }
}

//定义一个函数，作用是通过for循环恢复所有九宫格的颜色
function color_reset() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "#ffa600";
    }
}

//定义一个函数，作用是和html中的第一个button绑定
//点击第一个button后先进行颜色的重置，最后随机选取三个盒子上色，并循环此上色操作
//由于颜色变化是一瞬间完成，所以 color_reset();需要在 num_select();上面，若相反则颜色变化看不见，因为变化太快了
function color_start() {
    x = setInterval(function () {
        color_reset();
        num_select();
    }, 1000);
}

//定义一个函数，作用是和html中的第二个button绑定
//点击第二个button后清除setInterval方法，并且恢复九宫格默认颜色
function color_stop() {
    clearInterval(x);
    color_reset();
}