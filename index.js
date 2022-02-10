var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector(".check-button");
var nextButton = document.querySelector(".next-button")
var errorCash = document.querySelector(".error-cash");
var showTable = document.querySelector(".show-table");
var show = document.querySelector(".show");
var errorBill = document.querySelector(".error-bill");
var notes = document.querySelectorAll(".notes");

var  denominations = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", checkButtonHandler);
nextButton.addEventListener("click", nextEventHandler);
show.style.display = "none";
showTable.style.display = "none"

function nextEventHandler(){
  errorBill.style.display = "none"
  
  if(billAmount.value <=0){
    show.style.display = "none";
    console.log("bill less than 0");
    errorBill.style.display = "block";
    errorBill.innerText = "Bill Amount Should be greater than 0"
  }
  else {
    show.style.display = "block";
    errorBill.style.display = "none";
  }
}

function checkButtonHandler(){
  showTable.style.display = "none"
  errorCash.style.display = "none";
  console.log("clicked");
  if(Number(billAmount.value) >0 && Number(cashGiven.value > 0)){
    if(Number(cashGiven.value) >= Number(billAmount.value)){
      var remainingCash = Number(cashGiven.value) - Number(billAmount.value);
      calculateCash (remainingCash);
      showTable.style.display = "block"
      errorCash.style.display = "none";
      if(remainingCash <1){
        showTable.style.display = "none"
        errorCash.style.display = "block";
        errorCash.innerText = "No Cash to be returned";
      }

    }else{
      showTable.style.display = "none"
      errorCash.style.display = "block";
      errorCash.innerText = "Cash given should be atleast equal to the bill amount";
    }

  }else{
    showTable.style.display = "none"
    errorCash.style.display = "block";
    errorCash.innerText = "Invalid Cash given";
  }
}

  
function calculateCash(remainingCash){
  for(var i=0;i<denominations.length;i++){
    var number = Math.trunc(remainingCash/denominations[i]);
    remainingCash = remainingCash % denominations[i];
    notes[i].innerText = number;
  }
}