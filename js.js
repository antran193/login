var user = "";
var password = "";

function getvalue() {
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    console.log(user, password);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "f59cd8a6-b76c-b1d5-5f5f-d35df7c2a84a"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}
// function authen(data) {
//     for (var i = 0; i < data.length; i++) {
//         if (user == data[i].username && password == data[i].password) {
//             alert("thanhf coong");
//             break;
//         }
//         if (user == data[i].username && password != data[i].password) {
//             alert("sai pass");
//             break;
//         }
//         if (user != data[i].username && password == data[i].password) {
//             alert("sai user");
//             break;
//         }

//     }
// }
