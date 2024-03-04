const username=document.getElementById("username");
const born=document.getElementById("born");
const cccd=document.getElementById("cccd");
const where=document.getElementById("where");
function xacnhan(){
    var giatriten=document.getElementById("username").value.trim();
    var giatringay=document.getElementById("born").value.trim();
    var giatricccd=document.getElementById("cccd").value.trim();
    var giatrio=document.getElementById("where").value.trim();
    if(giatriten =="" || giatringay=="" || giatricccd==""||giatrio=="")
    {
        alert("Vui lòng điền đầy đủ thông tin!")
        document.getElementById("username").value="";
        document.getElementById("born").value="";
        document.getElementById("cccd").value="";
        document.getElementById("where").value="";
    }
    else{
        alert("Hãy thực hiện bài kiểm tra của bạn!")
        window.location.href="./baikiemtra.html";
    }
}