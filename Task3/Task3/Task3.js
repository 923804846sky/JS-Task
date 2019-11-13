$(".arrows").on("click", function () {
    window.location.href = "../../Task2/Task2/Task2.html"
})

$(".cross").on("click", function () {
    sessionStorage.clear();
    window.location.href = "../../Task2/CSS-13/Task13-1/Task13-1.html"
})

var getArr = JSON.parse(sessionStorage.getItem("haha")); //获取js2中得到的玩家乱序数组
console.log(getArr);
//两个图片页面切换函数，此处的imgOne本身为show可省略不写
function change() {
    $(".imgTwo").hide();
    $(".identify").hide();
}

change();

var x = 0;
var y = 1;
$(".footer").click(
    function () {
        x++;
        y++;
        // 通过奇偶数改变下方按钮中文字说明
        if (x == getArr.length * 2) {
            window.location.href = "../../Task4/Task4-1/Task4-1.html"
        } else {
            if (x % 2 == 0) {
                $(".circle").text(x / 2 + 1); // 传递序号
                $(".footer").text("点击查看" + (x / 2 + 1) + "号");
            } else {
                $(".footer").text("隐藏并传递给" + (x / 2 + 1.5) + "号");
            }
        }

        // 传递玩家身份 
        $(".identify").text("当前身份是:" + getArr[(y / 2 - 1)]);
        // 最后一个页面单独设置文字说明
        if (x == getArr.length * 2 - 1) {
            $(".footer").text("法官查看身份");
        }

        // 点击一次两个图片页面切换一次
        $(".imgOne").toggle();
        $(".imgTwo").toggle();
        $(".identify").toggle();
    }
)