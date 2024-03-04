const submit=document.getElementById("submit");
function sub(){
    var cofirmResult=confirm("xác nhận nộp bài ?")
    if(cofirmResult)
    {
        window.location.href="./Ketqua.html";
    }
}