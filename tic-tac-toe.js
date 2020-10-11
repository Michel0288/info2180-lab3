onload=function(){
    const player1='X';
    const player2='O';
    var array=[];
    let currentplayer;
    var getsquares=document.getElementById('board').getElementsByTagName('div');
    var stat=document.getElementById('status')
    var len=getsquares.length;
    for(let i=0;i<len;i++){
        getsquares[i].className+=('square');
        getsquares[i].addEventListener('click',function(){
            // console.log('Clicked')

            getplayer()
            function getplayer(){
                if(currentplayer===player1){
                    currentplayer=player2;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
                }
                else{
                    currentplayer=player1;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
                }
                array.push(getsquares[i].innerHTML=currentplayer);
                // console.log(array)
                checkwinner();


                function checkwinner(){
                    let pos0=getsquares[0].innerHTML;
                    let pos1=getsquares[1].innerHTML;
                    let pos2=getsquares[2].innerHTML;
                    let pos3=getsquares[3].innerHTML;
                    let pos4=getsquares[4].innerHTML;
                    let pos5=getsquares[5].innerHTML;
                    let pos6=getsquares[6].innerHTML;
                    let pos7=getsquares[7].innerHTML;
                    let pos8=getsquares[8].innerHTML;
                    
                    if (pos0!=='' && pos0==pos1 && pos0==pos2){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos3==pos4 && pos3==pos5 && pos3!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos6==pos7 && pos6==pos8 && pos6!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos0==pos4 && pos0==pos8 && pos4!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos2==pos4 && pos2==pos6 && pos2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos0==pos3 && pos0==pos6 && pos0!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos1==pos4 && pos1==pos7 && pos7!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos2==pos5 && pos2==pos8 && pos2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    
                }
            }

        },{once:true});
        getsquares[i].addEventListener("mouseover", event => {
            getsquares[i].className+=(' hover');
        });
        getsquares[i].addEventListener("mouseleave", event => {
            getsquares[i].classList.remove('hover');
       });
    }  
    document.querySelector('button').addEventListener('click',function(){
        // for(let i=0;i<len;i++){
        //     stat.classList.remove('you-won');
        //     stat.textContent="Move your mouse over a square and click to play an X or an O.";
        //     getsquares[i].classList.remove('X');
        //     getsquares[i].classList.remove('O');
        //     getsquares[i].innerHTML='';
        //     array.splice(0,array.length);
        //     getsquares[i].className+=('square');
        //     getsquares[i].addEventListener('click',function(){   
        //     },{once:true});                        
        // }
        location.reload();
    })
}
