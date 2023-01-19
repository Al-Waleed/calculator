function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}


function operate(a, b, c){
    if(c === "+"){
        return add(a, b);
    }else if (c === "-"){
        return subtract(a, b);
    }else if (c === "x"){
        return multiply(a, b);
    }else if (c === "/"){
        return divide(a, b);
    }
}

let displayValue;
let chosenOperator;
let firstValue;
let secondValue;
const screen = document.querySelector(".screen")

const numbers = document.querySelectorAll(".numbers");
let sum = "";
Array.from(numbers).forEach(number => {// make an array from the number buttons
    number.addEventListener("click", () => {//add a click event to all the buttons from the array
        if(screen.textContent === "0"){ 
            screen.textContent = "";//to remove the zero from the screen 
            screen.textContent += number.value//then concatenate the numbers together
            displayValue = screen.textContent;
        }else{
            screen.textContent += number.value;
            displayValue = screen.textContent;
        }
    });
});

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    screen.textContent = 0;
    displayValue = screen.textContent;
    displayValue = undefined;
    chosenOperator = undefined;
    firstValue = undefined;
    secondValue = undefined;
    })
const negative = document.querySelector(".negative")
negative.addEventListener("click", () => {
    screen.textContent = screen.textContent * -1;
    displayValue = screen.textContent;
        }
    );

const percentage = document.querySelector(".percentage")
percentage.addEventListener("click", () => {
    screen.textContent = screen.textContent / 100;
    displayValue = screen.textContent;
        }
    );

const decimalPoint = document.querySelector(".decimalPoint")
decimalPoint.addEventListener("click", () => {
    const nums = Array.from(screen.textContent);
    if(!nums.includes(".")){
        screen.textContent += ".";
        displayValue = screen.textContent;
    }
});

const operators = document.querySelectorAll(".operators");
Array.from(operators).forEach(operation =>{
    operation.addEventListener("click", ()=> {
        if(firstValue === undefined){
            firstValue = displayValue;
            chosenOperator = operation.textContent;
            screen.textContent = 0;
            displayValue = "";
        }

    })
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    secondValue = displayValue;
    screen.textContent = operate(firstValue,secondValue,chosenOperator);
})