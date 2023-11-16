/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
/* Function Expression - Subtract Numbers */
function substract (number1, number2){
    return number1 - number2;
}
function substractNumbers() {
    let substractNumber1 = Number(document.querySelector("#substract1").value);
    let substractNumber2 = Number(document.querySelector("#substract2").value);
    document.querySelector("#difference").value = substract(substractNumber1, substractNumber2);
}
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}
    
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

/* Decision Structure */
document.querySelector("#getTotalDue").addEventListener("click", calculateTotal);

function calculateTotal(){
    let subTotal = Number(document.querySelector("#subtotal").value);
    let applyDiscount = document.querySelector("#membership").checked;

    if (applyDiscount){
        subtotal *=0.85;
    }
    document.querySelector("#total").textContent = "Total due: $${subtotal.toFixed(2)}";
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray;S

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").textContent = oddNumbers;
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;}

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number*2);
document.querySelector("#multiplied").textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;