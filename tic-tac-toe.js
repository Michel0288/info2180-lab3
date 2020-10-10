onload=function(){
    const player1='X';
    const player2='O';
    var array=[];
    let currentplayer;
    var getsquares=document.getElementById('board').getElementsByTagName('div');
    var len=getsquares.length;
    for(let i=0;i<len;i++){
        getsquares[i].className+=('square');
        getsquares[i].addEventListener('click',function(){
            // console.log('Clicked')

            getplayer()
            function getplayer(){
                
                if(currentplayer===player1){
                    currentplayer=player2;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
                }
                else{
                    currentplayer=player1;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
                }
                array.push(getsquares[i].innerHTML=currentplayer);

                // console.log(array)
            }
          
        },{once:true});
    }  
}
