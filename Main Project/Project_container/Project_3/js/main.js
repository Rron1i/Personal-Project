var div = document.getElementById('div')
var imgFirst = document.getElementById('img1')
var imgSecond = document.getElementById('img2')

div.onmouseenter = function(){
    div.setAttribute('class', 'divHover')
    img2.setAttribute('class', 'forwardAnimation')
}
div.onmouseleave = function(){
    div.removeAttribute('class', 'divHover')
    div.setAttribute('class' , 'divHoverLeave')
    img2.removeAttribute('class' , 'forwardAnimations')
    img2.setAttribute('class', 'leaveAnimation')
}