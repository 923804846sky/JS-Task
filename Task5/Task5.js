var a = document.getElementById("footer");
a.onclick = function () {
    var xhr = new XMLHttpRequest();
    var name = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;
    console.log(name, pwd);
    xhr.onreadystatechange = function () {
        console.log(xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            if (data.code === 0) {
                alert("登录成功！");
            } else {
                document.getElementById("addText").innerHTML = data.message;
            }
        }
    }
    xhr.open("post", "/carrots-admin-ajax/a/login", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&pwd=" + pwd);
}

$(document).ready(function () { //页面加载完才执行以下代码。这行代码使用后，html中不能写on事件，要在js中写
    $("button").click(function () {
        var name = $("#user").val();
        var pwd = $("#pwd").val();
        $.ajax({
            type: "post",
            url: "/carrots-admin-ajax/a/login",
            // data: "name=" + name + "&pwd=" + pwd,
            data: {
                name: name,
                pwd: pwd
            },
            success: function (result) {
                console.log(result)
                let data = JSON.parse(result);
                if (data.code === 0) {
                    alert("登录成功！");
                } else {
                    document.getElementById("addText").innerHTML = data.message;
                }
            }
        });
    });
});