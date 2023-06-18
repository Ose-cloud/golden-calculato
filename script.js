let runnigTotal = 0;
let buffer = "0";
let previuosOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}
 function handleSymbol(Symbol){
    switch (Symbol) {
        case 'C':
            buffer = '0';
            runnigTotal = 0;
            break;
        case '=':
            if (previuosOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previuosOperator = null;
            buffer = runnigTotal;
            runnigTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = 0;
            }else{
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
            handleMath(Symbol)
            break;
            
        case '−':
            handleMath(Symbol)
            break;
            
        case '×':
            handleMath(Symbol)
            break;
            
        case '÷':
            handleMath(Symbol)
            break;
            
            
        default:
            break;
    }
 }

  function handleMath(Symbol){
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);
    if (runnigTotal === 0) {
        runnigTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previuosOperator = Symbol;
    buffer = '0';
}
 function flushOperation(intBuffer){
    if (previuosOperator === '+') {
        runnigTotal += intBuffer;
    }else if(previuosOperator === '−'){
        runnigTotal -= intBuffer;
    }else if(previuosOperator === '×'){
        runnigTotal *= intBuffer;
    }else if(previuosOperator === '÷'){
        runnigTotal /= intBuffer;
    }
 }
 function handleNumber(numberString){
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
 }
 function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
 }
 init()

