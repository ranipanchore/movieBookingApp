// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let searchMovie = document.getElementById("search");
// console.log(searchMovie.value);

let walletAmount = JSON.parse(localStorage.getItem("amount"));
console.log(walletAmount);
localStorage.setItem(JSON.localStorage("amount",walletAmount));

let wallet = document.getElementById("wallet");
wallet.innerHTML = walletAmount;

let moviesDisplay = document.getElementById("movies"); 


let key = 52098758
// let api = "http://www.omdbapi.com/?i=tt3896198&apikey=b45a8f04"
let api = `http://www.omdbapi.com/?apikey=${key}&s=movies&page=10`

apiData();


let movieDetails;

async function apiData(){
    let res = await fetch(api);
   let data = await res.json();
   console.log(data);
   movieDetails = await data.Search;
   console.log(movieDetails);
    display(movieDetails)
    
}

function display(dataNew){
    dataNew.forEach((el) => {
        // console.log(el);
        let {Title, Poster} = el;
    
        let div = document.createElement("div");
    
        let image = document.createElement("img");
        image.src = Poster;
        // console.log(image);
    
        let title = document.createElement("h1");
        title.innerHTML = Title;
    
        let bookNowBtn = document.createElement("button");
        bookNowBtn.innerText = "Book Now"
        bookNowBtn.setAttribute("class","book_now");
    
        div.append(image,title,bookNowBtn);
        moviesDisplay.append(div);

        bookNowBtn.addEventListener("click",goPageCheckout)
    });
}


// searchMovie.addEventListener("input",search)

setTimeout(search,1500);

async function search(){
    console.log(searchMovie.value);
    let res = await fetch(`${api}&s=${searchMovie.value}`);
    let data = await res.json();
    console.log(data);
    display(data);
  
}

function goPageCheckout(){
    window.location.href = "../checkout.html"
}



