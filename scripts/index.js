// Store the wallet amount to your local storage with key "amount"

let walletAmount = document.getElementById("inputAmount");
let add_to_wallet = document.getElementById("add_to_wallet");
let wallet = document.getElementById("wallet");
// console.log(wallet);

let book_movies = document.getElementById("book_movies");



add_to_wallet.addEventListener("click", addAmount)


function addAmount(){
    wallet.innerText= walletAmount.value;
    console.log(wallet.innerText);
    let amount = wallet.innerText
    console.log(amount);
    
    localStorage.setItem("amount",JSON.stringify(amount));
}


book_movies.addEventListener("click", moviesPage);

function moviesPage(){
    window.location.href = "../movies.html"
}
