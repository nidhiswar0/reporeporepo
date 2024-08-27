let calc = localStorage.getItem('calc') || "";
storeCalc();

function updateCalc(value) {
  calc += value;
  localStorage.setItem('calc', calc);
  storeCalc();
}

function evaluateCalc() {
  calc = eval(calc);
  localStorage.setItem('calc', calc);
  storeCalc();
}

function clearCalc() {
  calc = "";
  localStorage.setItem('calc', calc);
  storeCalc();
}

function storeCalc(){
document.querySelector('.js-calculation').innerHTML = `${calc}`
}

console.log("Current calculation:", calc);
