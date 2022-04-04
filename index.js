let screen= document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue='';
for(item of button){

    item.addEventListener('click' , (e)=>{

    buttonText=e.target.innerText;

    console.log('button text is ' , buttonText);
if(buttonText=='x'){

    buttonText='*';
    screenValue +=buttonText;
    screen.value =screenValue;
}
else if(buttonText=='c'){
screenValue='';
screen.value=screenValue;
}
else if(buttonText=='log'){
    screen.value=Math.log(screen.value);
    }
    else if(buttonText=='sin'){
        screen.value=Math.sin(screen.value);
        }
        else if(buttonText=='cos'){
            screen.value=Math.cos(screen.value);
            }
            else if(buttonText=='tan'){
                screen.value=Math.tan(screen.value);
                }
else if(buttonText=='='){
    screen.value= eval(screenValue);
    }
    else{
        screenValue +=buttonText;
    screen.value =screenValue ;
    }

    });
  
}