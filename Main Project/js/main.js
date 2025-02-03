var projekte = document.getElementById("projekte")
var tooltip = document.getElementsByClassName("tooltip")
tooltip[0].style.display = "none"

projekte.onclick = function(){
    if(tooltip[0].style.display == "none"){
        tooltip[0].style.display = "block"
    }
    else {
        tooltip[0].style.display = "none"
    }
}