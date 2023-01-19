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
    }else if (c === "*"){
        return multiply(a, b);
    }else if (c === "/"){
        return divide(a, b);
    }
}

const screen = document.querySelector(".screen")

const numbers = document.querySelectorAll(".numbers");
let sum = "";
Array.from(numbers).forEach(number => {// make an array from the number buttons
    number.addEventListener("click", () => {//add a click event to all the buttons from the array
        if(screen.textContent === "0"){ 
            screen.textContent = "";//to remove the zero from the screen 
            screen.textContent += number.value//then concatenate the numbers together
        }else{
            screen.textContent += number.value
        }
    });
});

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => screen.textContent = 0);

const negative = document.querySelector(".negative")
negative.addEventListener("click", () => screen.textContent = screen.textContent * -1);

const percentage = document.querySelector(".percentage")
percentage.addEventListener("click", () => screen.textContent = screen.textContent / 100);
