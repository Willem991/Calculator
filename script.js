const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const powerBtn = document.querySelector("#power"); 
const divideBtn = document.querySelector("#divide");
const timesBtn = document.querySelector("#times");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const equalsBtn = document.querySelector("equals");
const negBtn = document.querySelector("#negative");
const decimalBtn = document.querySelector("#decimal");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

const btn = document.querySelectorAll('.number')

const output = document.querySelector("#display");
const errorDisplay = document.querySelector("#error");

let retValue = 0;
let retValue2 = 0;
let operator = "";
let display = "";

btn.forEach(element => {
    let placeholder;

    element.addEventListener('click', () => {
        switch(element.textContent){
            case "1":
                placeholder = 1

            break;
            case "2":
                placeholder = 2

            break;
            case "3":
                placeholder = 3

            break;
            case "4":
                placeholder = 4

            break;
            case "5":
                placeholder = 5

            break;
            case "6":
                placeholder = 6

            break;
            case "7":
                placeholder = 7

            break;
            case "8":
                placeholder = 8

            break;
            case "9":
                placeholder = 9

            break;
            case "0":
                placeholder = 0

            break;
        }
        if(operator == ""){
            if(retValue == 0){
                retValue = placeholder;
                output.textContent = retValue;
            }else if(retValue < 100000000   ){
                retValue = retValue*10 + placeholder;
                output.textContent = retValue;
            }else{
                errorDisplay.textContent = "datalimit reached!"
            };
        }else{
            if(retValue2 == 0){
                retValue2 = placeholder;
                output.textContent = retValue2;
            }else if(retValue < 100000000){
                retValue2 = retValue*10 + placeholder;
                output.textContent = retValue2;
            }else{
                errorDisplay.textContent = "datalimit reached!"
            };
        };

        console.log(retValue);
    });
});


