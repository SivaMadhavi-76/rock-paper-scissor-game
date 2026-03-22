function playgame( playermove){
    let computermove=pickcomputermove();
    let result='';
    if(playermove==='rock'){
        if(computermove==='rock'){
            result='Tie';
        }
        else if(computermove==='paper'){
            result='you Win';
        }
        else if(computermove==='scissors'){
            result='you Lose';
        }
    }
    else if(playermove==='paper'){
       if(computermove==='rock'){
            result='you Win';
        }
        else if(computermove==='paper'){
            result='Tie';
        }
        else if(computermove==='scissors'){
            result='you Lose';
        }
    }
    else if(playermove==='scissors')
    {
         if(computermove==='rock'){
            result='you lose';
        }
        else if(computermove==='paper'){
            result='you Win';
        }
        else if(computermove==='scissors'){
            result='Tie';
        }

    }
    alert(`you picked "${playermove}" and computer picked "${computermove}".result:"${result}"`)
  document.querySelector('.display-result').innerHTML=`you picked:${playermove}<br> computer picked:${computermove}<br>result:${result}`;
}
    function pickcomputermove(){
    let randomnumber=Math.random()
    let computermove='';
    if(randomnumber>=0 &&randomnumber<1/3){
        computermove='rock';
    }
    else if(randomnumber>=1/3&&randomnumber<2/3){
        computermove='paper'; 
    }
    else if(randomnumber>=2/3&&randomnumber<1){
        computermove='scissors';
    }
    return computermove;
}
