let firstNumber = "0";
let secondNumber = "0";
let currentOperator = null

const calculatorDisplay = document.querySelector("#calculator-display");

const zeroButton = document.querySelector("#button-zero");
zeroButton.textContent = "0";

const oneButton = document.querySelector("#button-one");
oneButton.textContent = "1";

const twoButton = document.querySelector("#button-two");
twoButton.textContent = "2";

const threeButton = document.querySelector("#button-three");
threeButton.textContent = "3";

const fourButton = document.querySelector("#button-four");
fourButton.textContent = "4";

const fiveButton = document.querySelector("#button-five");
fiveButton.textContent = "5";

const sixButton = document.querySelector("#button-six");
sixButton.textContent = "6";

const sevenButton = document.querySelector("#button-seven");
sevenButton.textContent = "7";

const eightButton = document.querySelector("#button-eight");
eightButton.textContent = "8";

const nineButton = document.querySelector("#button-nine");
nineButton.textContent = "9";

const acButton = document.querySelector("#ac-button");
acButton.textContent = "AC";
acButton.addEventListener("click", fullReset);

const signButton = document.querySelector("#operator-sign");
signButton.textContent = "+/-";

const percentButton = document.querySelector("#operator-percent");
percentButton.textContent = "%";

const divideButton = document.querySelector("#operator-divide");
divideButton.textContent = "/";

const multButton = document.querySelector("#operator-multiply");
multButton.textContent = "x";

const subButton = document.querySelector("#operator-subtract");
subButton.textContent = "-";

const addButton = document.querySelector("#operator-add");
addButton.textContent = "+";

const equalButton = document.querySelector("#equals-button");
equalButton.textContent = "=";
equalButton.addEventListener("click", () => {
    operate();
});

const decimalButton = document.querySelector("#decimal-button");
decimalButton.textContent = ".";
decimalButton.addEventListener("click", decimalAppend);


const numberButtons = document.querySelectorAll('button[id^=button]');
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll('button[id^=operator]')
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        setOperator(button.textContent);
        if (button.textContent == "%" || button.textContent == "+/-") {
            operate();
        }
    });
});


function setOperator(operator) {
    if (currentOperator != null) {
        operate();
    }
    firstNumber = calculatorDisplay.textContent;
    currentOperator = operator;
    clear();
    console.log(firstNumber);
    console.log(currentOperator);
}


function operate() { 
    if (currentOperator == null) {
        return;
    }
    else if (currentOperator == "/" && calculatorDisplay.textContent == "0") {
        calculatorDisplay.textContent = "lmao";
        reset();
        return;
    }
    else {
        secondNumber = calculatorDisplay.textContent;
        calculatorDisplay.textContent = roundMath(doMath(currentOperator, firstNumber, secondNumber));
        currentOperator = null;
        console.log(secondNumber);
    }
}

//checks which math opertion to complete
function doMath(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "/":
            if (b == 0) {
                return null;
            }
            else {
                return divide(a, b)
            }
        case "x":
            return multiply(a, b)
        case "+/-":
            b = -1;
            return multiply(a, b)
        case "%":
            b = 100;
            return divide(a, b)
    }
}


//math functions
function multiply(a, b) {
    return a*b;
}
function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function divide(a, b) {
    return a/b;
}


//add number to display
function appendNumber(number) {
    calculatorDisplay.textContent += number
}

//round to not overflow display
function roundMath(number) { 
    return Math.round(number *1000) /1000
}

//if there is already decimal, do not add another
function decimalAppend() {
    if(calculatorDisplay.textContent.includes(".")) { 
        return;
    }
    calculatorDisplay.textContent += ".";
}

//just clear display
function clear() { 
    calculatorDisplay.innerHTML = "";
}

//just clear values
function reset() { 
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
}

//clear everything
function fullReset() { 
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    calculatorDisplay.innerHTML = "";

}

