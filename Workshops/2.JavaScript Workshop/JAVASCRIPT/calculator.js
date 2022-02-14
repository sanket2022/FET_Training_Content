function insert(num){
    document.getElementById("result").value += num;
}
function clr(){
    document.getElementById("result").value= "";
}

function equals(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function backspace(){
    let exp = document.getElementById("result").value;
    document.getElementById("result").value = exp.substring(0,exp.length-1);
}

function square(num){
   let x = document.getElementById("result").value;
   let sqr = eval(x*x);
   document.getElementById("result").value = sqr;
}

function cube(num){
   let x = document.getElementById("result").value;
   let cube = eval(x*x*x);
   document.getElementById("result").value = cube;
}

function squareroot(num){
    let srr = document.getElementById("result").value;
    let sr = eval(Math.sqrt(rrr));
    document.getElementById("result").value = sr;
}

function cuberoot(num){
    let crr = document.getElementById("result").value;
    let cr = eval(Math.cbrt(crr));
    document.getElementById("result").value = cr;
}