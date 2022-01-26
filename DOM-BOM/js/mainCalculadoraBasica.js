
//variables
let screen = document.getElementById("pantalla");
let pointBtn = document.getElementById("pointBtn");

let n1;
let op;
let n2;


function addNumb(n){

    let number = screen.innerText;

    number = number + n;

    screen.innerText = number;
}

function deleteScreen(){

    screen.innerText = "";
    pointBtn.disabled = false;
    n1 = "";
    n2 = "";

}

function operation(sign){

    n1 = screen.innerText;
    op = sign;
    deleteScreen();

}

function result(){

    let result;

    n2 = screen.innerText;

    switch(op){
        case'+':
            result = parseFloat(n1) + parseFloat(n2);
            break;
        case'-':
            result = parseFloat(n1) - parseFloat(n2);
            break;
        case'*':
            result = parseFloat(n1) * parseFloat(n2);
            break;
    }

    screen.innerText = result.toString();
    deleteScreen();
}

function blockPoint(){

    pointBtn.disabled = true;
}