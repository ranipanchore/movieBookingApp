// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet = JSON.parse(localStorage.getItem("amount"));
console.log(wallet);

let amountShow = document.getElementById("wallet");
amountShow.innerHTML = wallet;