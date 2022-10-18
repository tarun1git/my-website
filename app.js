var display = document.getElementById("sideMenu");
var hidden = document.getElementById("closeMenu");
var list = document.getElementById("list");

display.onclick = function(){
    list.style.visibility = "visible";
    list.style.right = "0%";
}
hidden.onclick = function(){
    list.style.right = "-50%";
}

var scroll = new SmoothScroll('a[href*="#"]');