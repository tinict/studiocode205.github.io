function DisplayOff(){
    for(var i = 1; i <= 10; i++){
        var str = "item" + i;
        document.getElementById(str).style.display = "none";
    }
}