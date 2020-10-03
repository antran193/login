var newdata=[];
var newdatajson="";
$.ajax({
    // url:"https://run.mocky.io/v3/cf411600-0159-4df5-80b9-273780655ff8",
    url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
    type: "get", // chọn phương thức gửi là get
    dateType: "application/json", // dữ liệu trả về dạng text
    success: function (result) {
        // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
        // authen(result);
        console.log(result);
        var data = [];
        for (var i = 0; i < result.length; i++) {
            var datafake = [result[i].id, result[i].username, result[i].password];
            data.push(datafake);
        }
        // debugger
        console.log(data);
        buidtable(data);
    }
});




function buidtable(data) {
    $('#example').DataTable({
        data: data,
        columns: [
            { title: "id" },
            { title: "name" },
            { title: "pass" }
        ]
    });
    var table = $('#example').DataTable();
    $('#example tbody').on('click', 'tr', function () {
        var data1 = table.row(this).data();
        // console.log(data1);
        document.getElementById("modalexam").style.display="block";
        document.getElementById("id").value = data1[0];
        document.getElementById("name").value = data1[1];
        document.getElementById("pass").value = data1[2];
        newdata=data1;     
        
    })

}
function close1()
{
    document.getElementById("modalexam").style.display="none";
}
function savechange1()
{
    newdata[0]=document.getElementById("id").value;
    newdata[1]=document.getElementById("name").value;
    newdata[2]=document.getElementById("pass").value;
    $.ajax({
        
        url: "https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable", // gửi ajax đến file result.php
        type: "post", // chọn phương thức gửi là get
        dateType: "application/json", // dữ liệu trả về dạng text
        data: {id:newdata[0],username:newdata[1],password:newdata[2]},
        // function(updatedata)
        // {
        //     for (var i = 0; i < result.length; i++) {
        //         if(result[i].id == newdata[0])
        //         {
        //             result[i].username=newdata[1];
        //             result[i].password=newdata[2];

        //         }
        //     }
        //     console.log(updatedata);
        // },
        
        success: function (result) {
            // Sau khi gửi và kết quả trả về thành công thì gán nội dung trả về
            // authen(result);
            console.log(result);
            // console.log(typeof(result));
            
        },

    });
    

}

