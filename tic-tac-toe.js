onload=function(){ 
    var c = document.getElementById("board").children.length; 
    var i; 
    for (i = 0; i <= (c-1); i++) 
    { 
        document.getElementById('board').getElementsByTagName('div')[i].setAttribute('class', 'square'); 
    }
}