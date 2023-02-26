//your code here
const displayAns= document.getElementById('input');

const clear = document.getElementById('clr');
const clear1 = document.getElementById('clear');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const plus = document.getElementById('plus');
const substract = document.getElementById('minus');
const dot = document.getElementById('dot');
const result = document.getElementById('ans');
const bracS = document.getElementById('bracS');
const bracE = document.getElementById('bracE');

const num0 = document.getElementById('block0');
const num1 = document.getElementById('block1');
const num2 = document.getElementById('block2');
const num3 = document.getElementById('block3');
const num4 = document.getElementById('block4');
const num5 = document.getElementById('block5');
const num6 = document.getElementById('block6');
const num7 = document.getElementById('block7');
const num8 = document.getElementById('block8');
const num9 = document.getElementById('block9');

let ansString="";


function displayFunc(){
    displayAns.value=ansString;
}

function func0(){
    ansString= ansString + num0.textContent;
    displayFunc();
}
num0.addEventListener('click',func0)

function func1(){
    ansString= ansString + num1.textContent;
    displayFunc();
}
num1.addEventListener('click',func1)

function func2(){
    ansString= ansString + num2.textContent;
    displayFunc();
}
num2.addEventListener('click',func2)

function func3(){
    ansString= ansString + num3.textContent;
    displayFunc();
}
num3.addEventListener('click',func3)

function func4(){
    ansString= ansString + num4.textContent;
    displayFunc();
}
num4.addEventListener('click',func4)

function func5(){
    ansString= ansString + num5.textContent;
    displayFunc();
}
num5.addEventListener('click',func5)

function func6(){
    ansString= ansString + num6.textContent;
    displayFunc();
}
num6.addEventListener('click',func6)

function func7(){
    ansString= ansString + num7.textContent;
    displayFunc();
}
num7.addEventListener('click',func7)

function func8(){
    ansString= ansString + num8.textContent;
    displayFunc();
}
num8.addEventListener('click',func8)

function func9(){
    ansString= ansString + num9.textContent;
    displayFunc();
}
num9.addEventListener('click',func9)

function funcFullClear(){
    ansString= "";
    displayFunc();
}
clear.addEventListener('click',funcFullClear)

function funcClear(){
    ansString= ansString.slice(0,-1);
    displayFunc();
}
clear1.addEventListener('click',funcClear);

function funcPlus(){
    ansString= ansString + '+';
    displayFunc();
}
plus.addEventListener('click',funcPlus)

function funcMinus(){
    ansString= ansString + '-';
    displayFunc();
}
substract.addEventListener('click',funcMinus)

function funcDivide(){
    ansString= ansString + '/';
    displayFunc();
}
divide.addEventListener('click',funcDivide)

function funcMultiply(){
    ansString= ansString + '*';
    displayFunc();
}
multiply.addEventListener('click',funcMultiply)

function funcDot(){
    ansString= ansString + '.';
    displayFunc();
}
dot.addEventListener('click',funcDot)

function funcBracS(){
    ansString= ansString + '(';
    displayFunc();
}
bracS.addEventListener('click',funcBracS)

function funcBracE(){
    ansString= ansString + ')';
    displayFunc();
}
bracE.addEventListener('click',funcBracE)

function funcResult(){
    let finalStr=eval(ansString);
    ansString=finalStr;
   displayFunc();
  }
  result.addEventListener("click" ,funcResult);












