const clearBtn = document.querySelector("#clear");
const backBtn = document.querySelector("#back");
const powerBtn = document.querySelector("#power"); 
const divideBtn = document.querySelector("#divide");
const timesBtn = document.querySelector("#times");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const equalsBtn = document.querySelector("#equals");
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

const btn = document.querySelectorAll('.number');
const opBtn = document.querySelectorAll('.operate');

const output = document.querySelector("#display");
const errorDisplay = document.querySelector("#error");
const smallDisplay = document.querySelector("#smalldisplay");

let retValue = 0;
let retValue2 = 0;
let operator = "";
let display = "";
let contnue = 0;
let answer;
let isDecimal = false;
let DecCounter = 1;
let whatButtonDidIClick = "none";


//This checks which number has been pressed and assigns it to the screen.
btn.forEach(element => {
    let placeholder;

    element.addEventListener('click', () => {

        whatButtonDidIClick = "number";

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
            if(isDecimal == false){
                if(retValue == 0){
                    retValue = placeholder;
                    display = retValue.toString();
                    output.textContent = display;
                }else if(retValue < 100000000   ){
                    retValue = retValue*10 + placeholder;
                    display = retValue.toString();
                    output.textContent = display;
                }else{
                    errorDisplay.textContent = "datalimit reached!"
                };
            }else{
                

                if(retValue*10%1 != 0){
                    errorDisplay.textContent = "No more than 2 decimal places"
                }else{
                    retValue = retValue*10;
                    DecCounter = DecCounter*10;

                    while((retValue/10)%1 != 0 ){
                        retValue = retValue*10
                        DecCounter = DecCounter*10
                    }

                    retValue = ((retValue + placeholder)/DecCounter);
                    retValue = Math.round(retValue*100)/100;
                    DecCounter = 1;
                    display = retValue.toString();
                    output.textContent = display;
                };
                
            };
        }else{

            if(isDecimal == false){

                if(retValue2 == 0){
                    retValue2 = placeholder;
                    display = retValue2.toString();
                    output.textContent = display;
                }else if(retValue2 < 100000000){
                    retValue2 = retValue2*10 + placeholder;
                    display = retValue2.toString();
                    output.textContent = display;
                }else{
                    errorDisplay.textContent = "datalimit reached!"
                };
            }else{
                
                if(retValue2*10%1 != 0){
                    errorDisplay.textContent = "No more than 2 decimal places"
                }else{
                    retValue2 = retValue2*10;
                    DecCounter = DecCounter*10;

                    while((retValue2/10)%1 != 0 ){
                        retValue2 = retValue2*10
                        DecCounter = DecCounter*10
                    }

                    retValue2 = ((retValue2 + placeholder)/DecCounter);
                    retValue2 = Math.round(retValue2*100)/100;
                    DecCounter = 1;
                    display = retValue2.toString();
                    output.textContent = display;
                };

            };
        };


    });
});


//This checks which operator has been pressed, assigns it to the screen and does any calculations if necessary.
opBtn.forEach(element => {
    
    element.addEventListener('click',()=>{

        whatButtonDidIClick = "operator";
        isDecimal = false;

        if(contnue == 0){

            if(element.id == "plus"){
                operator = "+";
            }else if(element.id == "minus"){
                operator = "-";
            }else if(element.id == "divide"){
                operator = "/";
            }else if(element.id == "power"){
                operator = "^";
            }else{
                operator = "x";
            };
            contnue = 1;
            console.log(operator);
            display = retValue + " " + operator;
            smallDisplay.textContent = display;
        }else{
            console.log(operator);
            if(operator == "+"){
                answer = retValue + retValue2;
            }else if(operator == "-"){
                answer = retValue - retValue2;
            }else if(operator == "/"){
                answer = retValue/retValue2
            }else if(operator == "x"){
                answer=retValue*retValue2
            }else if(operator == "^"){
                answer = Math.pow(retValue, retValue2);
            };
            console.log(operator);
            if(element.id == "plus"){
                operator = "+";
            }else if(element.id == "minus"){
                operator = "-";
            }else if(element.id == "divide"){
                operator = "/";
            }else if(element.id == "power"){
                operator = "^";
            }else{
                operator = "x";
            };
            
            answer = Math.round((answer + Number.EPSILON)*1000 )/1000;
            retValue2 = 0;
            retValue = answer;
            display = "";
            output.textContent = display;
            smallDisplay.textContent = answer + " " + operator;
        };     
    });
});

//Clears the calculator and resets everything
clearBtn.addEventListener('click',() => {
     retValue = 0;
     retValue2 = 0;
     operator = "";
     display = "0";
     contnue = 0;
     answer;
     isDecimal = false;
     smallDisplay.textContent = "";
     output.textContent = display;
     errorDisplay.textContent = "info"
     whatButtonDidIClick = "clear";

});

//Changes the current screen value to a negative
negBtn.addEventListener('click', () =>{

    if(contnue == 0){
        retValue = retValue*-1;
        display = retValue.toString();
        output.textContent = display;
    }else{
        retValue2 = retValue2*-1;
        display = retValue2.toString();
        output.textContent = display;
    }
});

//Allows the input of decimal places
decimalBtn.addEventListener('click', () => {
    if(contnue == 0){
        let decimalChecker = display.split("");
        
        let dcmlchecker = decimalChecker.find(function(decimal){
            if(decimal == "."){
                return true;
            };
        });

        console.log(dcmlchecker);



        if(dcmlchecker == "."){
            alert("You already have a decimal included");
        }else{
            isDecimal = true;
            display = retValue + "."
            output.textContent = display;
        };
    }else{
        let decimalChecker = display.split("");
        
        let dcmlchecker = decimalChecker.find(function(decimal){
            if(decimal == "."){
                return true;
            };
        });

        console.log(dcmlchecker);



        if(dcmlchecker == "."){
            alert("You already have a decimal included");
        }else{
            isDecimal = true;
            display = retValue2 + "."
            output.textContent = display;
        };
    }
});

//Calculates all dat math!
equalsBtn.addEventListener('click', () =>{

    whatButtonDidIClick = "equals";
    isDecimal = false;

    console.log(contnue);

    if(contnue == 0){

            display = retValue;
            smallDisplay.textContent = display;

    }else{

    if(operator == "+"){
            answer = retValue + retValue2;
    }else if(operator == "-"){
                answer = retValue - retValue2;
    }else if(operator == "/"){
                answer = retValue/retValue2
    }else if(operator == "x"){
                answer=retValue*retValue2
    }else if(operator == "^"){
                answer = Math.pow(retValue, retValue2);
    };
            
    answer = Math.round((answer + Number.EPSILON)*1000 )/1000;
    display = answer;
    output.textContent = display;
    smallDisplay.textContent = retValue + " " + operator + " " + retValue2;
    operator = "";
    retValue2 = 0;
    retValue = answer;
    contnue = 0;    
    };     
});

backBtn.addEventListener('click', () => {
    
    if(whatButtonDidIClick = "number" && contnue == false){
        if(retValue%1 == 0){
            if(retValue > 0 && retValue < 10){
                retValue = 0;
                display = retValue.toString();
                output.textContent = display;
            }else{
                retValue = Math.floor(retValue/10);
                display = retValue.toString();
                output.textContent = display;
            };
        }else if((retValue*10)%1 == 0){
            retValue = Math.floor(retValue);
            display = retValue.toString();
            output.textContent = display;
            isDecimal = false;
        }else{
            retValue = Math.floor(retValue*10)/10;
            display = retValue.toString();
            output.textContent = display;
        };
    }else if(whatButtonDidIClick = "number" && contnue == true){
        if(retValue2%1 == 0){
            if(retValue2 > 0 && retValue2 < 10){
                retValue2 = 0;
                display = retValue2.toString();
                output.textContent = display;
            }else{
                retValue2 = Math.floor(retValue2/10);
                display = retValue2.toString();
                output.textContent = display;
            };
        }else if((retValue2*10)%1 == 0){
            retValue2 = Math.floor(retValue2);
            display = retValue2.toString();
            output.textContent = display;
            isDecimal = false;
        }else{
            retValue2 = Math.floor(retValue2*10)/10;
            display = retValue2.toString();
            output.textContent = display;
        };
    };
});

