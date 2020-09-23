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
var y = document.getElementById("errpassword");
var z = document.getElementById("erruser");
var userinput = document.getElementById("user");
var passwordinput = document.getElementById("password");

function loadform() {
    var x = document.getElementById("formlogin").style.display = "block";
}
window.onclick = function (event) {
    var y = document.getElementById("formlogin");
    if (event.target == y) {
        y.style.display = "none";
    }
}

var domainmail=document.getElementById("domainmail");
var passwordinput = document.getElementById("password");
var lower = document.getElementById("lower");
var uppers = document.getElementById("upper");
var number = document.getElementById("number");
var minlength = document.getElementById("minlength");

userinput.onfocus=function()
{
    z.style.display="block";
    document.getElementById("erruser1").style.display="none";
}
passwordinput.onfocus = function () {
    y.style.display = "block";
    document.getElementById("errpass1").style.display="none";

}
passwordinput.onblur = function () {
    y.style.display = "none";
    
}
userinput.onblur=function(){
    z.style.display="none";
    

}
userinput.onkeyup= function()
{
    var domancharacter=  /[a-z0-9_]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    if(userinput.value.match(domancharacter))
    {
        domainmail.classList.add("valid");
        domainmail.classList.remove("invalid");
    }
    else
    {
        domainmail.classList.remove("valid");
        domainmail.classList.add("invalid");
    }
}
passwordinput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (passwordinput.value.match(lowerCaseLetters)) {
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (passwordinput.value.match(upperCaseLetters)) {
        uppers.classList.remove("invalid");
        uppers.classList.add("valid");
    } else {
        uppers.classList.remove("valid");
        uppers.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (passwordinput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (passwordinput.value.length >= 8) {
        minlength.classList.remove("invalid");
        minlength.classList.add("valid");
    } else {
        minlength.classList.remove("valid");
        minlength.classList.add("invalid");
    }
}

function authen(data) {
    var y = document.getElementById("errpass1");
    var z = document.getElementById("erruser1");
    y.style.display="block";
    z.style.display="block";
    userinput.style.border = "none";
    passwordinput.style.border = "none";
    y.innerHTML="";
    z.innerHTML="";
    for (var i = 0; i < data.length; i++) {
        if (user == "") {
            z.innerHTML = "Enter your mail";
            userinput.style.border = "solid 2px red";
            userinput.style.backgroundColor = "#fceae9";
            if (password == "") {
                y.innerHTML = "Enter your password";
                passwordinput.style.border = "solid 2px red";
                passwordinput.style.backgroundColor = "#fceae9";
            }
            break;
        }
        if (user == data[i].username && password == data[i].password) {
            alert("thanhf coong");
            break;
        }
        if (user == data[i].username && password != data[i].password) {
            y.innerHTML = "Sai password";
            passwordinput.style.border = "solid 2px red";
            passwordinput.style.backgroundColor = "#fceae9";
            break;
        }
        if (user != data[i].username && password == data[i].password) {
            z.innerHTML = "Sai User";
            userinput.style.border = "solid 2px red";
            userinput.style.backgroundColor = "#fceae9";
            break;
        }
        if (user != data[i].username && password != data[i].password) {
            y.innerHTML = "Sai password";
            z.innerHTML = "Sai User";
            passwordinput.style.border = "solid 2px red";
            userinput.style.border = "solid 2px red";
            userinput.style.backgroundColor = "#fceae9";
            passwordinput.style.backgroundColor = "#fceae9";
            break;
        }


    }
}