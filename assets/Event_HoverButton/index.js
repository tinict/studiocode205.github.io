function DisplayOff(){
    for(var i = 1; i <= 10; i++){
        var str = "item" + i;
        document.getElementById(str).style.display = "none";
    }
}

function DisplayMenuMobile(){
    document.getElementById("mobile-menu-slidebar").style.display = "block";
}

function DisplayMenuOff(){
    document.getElementById("mobile-menu-slidebar").style.display = "none";
}