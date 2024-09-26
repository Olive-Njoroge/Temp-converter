const textBox = document.querySelector("#textBox");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelcius = document.querySelector("#toCelcius");
const result = document.querySelector("#result");
let temp;



function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.innerHTML = temp.toFixed(1) + "<sup>o</sup>F";

    }else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.innerHTML = temp.toFixed(1) + "<sup>o</sup>C";


    }else{
        result.innerHTML = "Select units";

    }
}

let button = document.querySelector("button");
button.addEventListener("click", convert);

const theme = document.querySelector(".theme");
theme.onclick = function(){
    let body = document.querySelector("body");
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
    }else{
       body.classList.add("dark");
    }
}