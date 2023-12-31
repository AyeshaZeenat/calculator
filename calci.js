let display = document.getElementById('display');
console.log(display);
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);  

buttons.map(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText ="";
                break;
            case '←':
                if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                display.innerText= eval(display.innerText);
                }
                catch{
                    display.innerText ='ERROR!';
                    break;
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});