var div = document.getElementById('div')
var imgFirst = document.getElementById('img1')
var imgSecond = document.getElementById('img2')

var wait = true

div.onmouseenter = function(){
    if (wait === true){
    div.setAttribute('class', 'divHover')
    img2.setAttribute('class', 'forwardAnimation')
    wait = false
    } else {
        div.onanimationend = function(){
            setTimeout(() => {
            div.removeAttribute('class', 'divHover')
            div.setAttribute('class' , 'divHoverLeave')
            img2.removeAttribute('class' , 'forwardAnimations')
            img2.setAttribute('class', 'leaveAnimation')
            setTimeout(() => {
                wait = true;
            }, 2000)
            }, 1000);
        }
    }

}

//div.onanimationend = function(){
//    setTimeout(() => {
//    div.removeAttribute('class', 'divHover')
//    div.setAttribute('class' , 'divHoverLeave')
//    img2.removeAttribute('class' , 'forwardAnimations')
//    img2.setAttribute('class', 'leaveAnimation')
//    setTimeout(() => {
//        wait = true;
//    }, 2000)
//    }, 1000);
//}

