const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const operate = function(array) {
    let answer = 0;
    let holder = 0;

    let symbols = ["*", "/", "+", "-"];
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 1 == 0) && (array[i+1] in nums)) {
            array[i] = array[i]+array[i+1];
            array[i+1] = "delete";
            array.splice(array.indexOf("delete"), 1);
        }
        if ((array[i] % 1 == 0) && (array[i+1] in nums)) {
            i-= 1;
        }
    }

    if (array.includes(".")) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == ".") {
                array[i-1] = array[i-1] + array[i];
                array[i] = "delete";
                array.splice(array.indexOf("delete"), 1);
                i--;
                while (true) {
                    if (array[i] == '*' || array[i] == '+'|| array[i] == '/'
                    || array[i == "-"]) {
                        break;
                    }
                    array[i] = array[i] + array[i+1];
                    array[i+1] = "delete";
                    array.splice(array.indexOf("delete"), 1);
                    i++;
                }
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        while (array.includes("*") || array.includes("/")){
            if (array[i] == "*" || array[i] == "/") {
                if (array[i] == "*") {
                    holder = array[i-1] * array[i+1];
                    array.splice([array.indexOf("*")+1], 1); 
                    array.splice([array.indexOf("*")-1], 1); 
                    array[array.indexOf("*")] = holder;
                    answer = holder;
                }
                if (array[i] == "/") {
                    if (array[i+1] == 0) {
                        return "Divide by 0 error";
                    }
                    holder = parseFloat(array[i-1] / array[i+1]).toFixed(1);
                    array.splice([array.indexOf("/")+1], 1); 
                    array.splice([array.indexOf("/")-1], 1); 
                    array[array.indexOf("/")] = holder;
                    answer = holder;
                }
            }
                else {
                    i++;
                }
            
        }
        if (array.includes("+") || array.includes("-")){
            i = 0;
                while (array.includes("+") || array.includes("-")){
                    if (array[i] == "+" || array[i] == "-") {
                        if (array[i] == "+") {
                            holder = +array[i-1] + +array[i+1];
                            array.splice([array.indexOf("+")+1], 1); 
                            array.splice([array.indexOf("+")-1], 1);
                            array[array.indexOf("+")] = holder;
                            answer = holder; 
                        }
                        if (array[i] == "-") {
                            holder = array[i-1] - array[i+1];
                            array.splice([array.indexOf("-")+1], 1); 
                            array.splice([array.indexOf("-")-1], 1);
                            array[array.indexOf("-")] = holder;
                            answer = holder; 
                        }
                    }
                        else {
                            i++;
                        }
                }
        }
    }
    return Number(answer);
}

let display = document.querySelector(".display")
let toBeCalculated = ""

const one = document.querySelector("#one");
one.addEventListener("click", function(event){
   display.innerText =  display.value + "1";
   toBeCalculated = run(); 
});

const two = document.querySelector("#two");
two.addEventListener("click", function(event){
   display.innerText =  display.value + "2";
   toBeCalculated = run();
});

const three = document.querySelector("#three");
three.addEventListener("click", function(event){
   display.innerText =  display.value + "3";
   toBeCalculated = run();
});

const four = document.querySelector("#four");
four.addEventListener("click", function(event){
   display.innerText =  display.value + "4";
   toBeCalculated = run();
});

const five = document.querySelector("#five");
five.addEventListener("click", function(event){
   display.innerText =  display.value + "5";
   toBeCalculated = run();
});

const six = document.querySelector("#six");
six.addEventListener("click", function(event){
   display.innerText =  display.value + "6";
   toBeCalculated = run();
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", function(event){
   display.innerText =  display.value + "7";
   toBeCalculated = run();
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", function(event){
   display.innerText =  display.value + "8";
   toBeCalculated = run();
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", function(event){
   display.innerText =  display.value + "9";
   toBeCalculated = run();
});

const zero = document.querySelector("#zero");
zero.addEventListener("click", function(event){
   display.innerText =  display.value + "0";
   toBeCalculated = run();
});

const point = document.querySelector("#point");
point.addEventListener("click", function(event){
   if (!(toBeCalculated.includes("."))) {
    display.innerText =  display.value + ".";
    toBeCalculated = run();
   }
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", function(event){
   display.innerText =  display.value + "+";
   toBeCalculated = run();
});

const minus = document.querySelector("#minus");
minus.addEventListener("click", function(event){
   display.innerText =  display.value + "-";
   toBeCalculated = run();
});

const times = document.querySelector("#times");
times.addEventListener("click", function(event){
   display.innerText =  display.value + "*";
   toBeCalculated = run();
});

const over = document.querySelector("#over");
over.addEventListener("click", function(event){
   display.innerText =  display.value + "/";
   toBeCalculated = run();
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", function(event) {
    display.innerText = operate(Array.from(run()));
});

const clear = document.querySelector('#clear');
clear.addEventListener("click", function(event) {
    display.innerText = clearBox();
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", function(event) {
    let current = Array.from(display.value);
    current.pop();
    display.innerText = current.join('');
});

function run(){
    var txt =  display.value;
    return txt;
}

function clearBox() {
    var text = "";
    return text;
}
    