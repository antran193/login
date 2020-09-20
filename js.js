var user = "";
var password = "";

function getvalue() {
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    console.log(user, password);
    $.ajax({
        url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
        type: "get", // chọn phương thức gửi là get
        dateType: "json", // dữ liệu trả về dạng text
        success: function (result) {
            // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
            authen(result);
            console.log(result);
        }
    });

}

function authen(data) {
    var x = document.getElementById("alerterr");
    var y = document.getElementById("errtype");
    var z=document.getElementById("loginbutton");
    for (var i = 0; i < data.length; i++) {
        if (user == data[i].username && password == data[i].password) {
            alert("thanhf coong");
            break;
        }
        if (user == data[i].username && password != data[i].password) {
            x.style.display = "block";
            y.innerHTML = "Sai password";
            z.style.marginTop="3px";
            // alert("sai pass");
            break;
        }
        if (user != data[i].username && password == data[i].password) {
            // alert("sai user");
            x.style.display = "block";
            y.innerHTML = "Sai User";
            z.style.marginTop="3px";
            break;
        }
        if (user != data[i].username && password != data[i].password) {
            // alert("sai user , password");
            x.style.display = "block";
            y.innerHTML= "Sai password, User";
            z.style.marginTop="3px";
            break;
        }

    }
}
function loadform() {
    var x = document.getElementById("formlogin").style.display = "block";
}
window.onclick = function (event) {
    var y = document.getElementById("formlogin");
    if (event.target == y) {
        y.style.display = "none";
    }
}