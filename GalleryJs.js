function viewImg(x)
{
    console.log(x.src);
    let path = x.src.split("/");
    path=path[4];
    document.getElementById("viewImg").src=path;
    console.log(document.getElementById("viewImg"));
    document.getElementById("overLay").style.display="block";
    
}
function exit(){
    document.getElementById("overLay").style.display = "none";
}

