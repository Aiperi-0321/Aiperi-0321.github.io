const url = "http://solar-poised-salad.glitch.me/products";

async function getProducts() {
    try {
        const response = await axios(url);
        console.log(response, data);
        }
         catch (error) {
        console.log(error);
    }
}
getProducts();

const apiKey = "03343139cc71a45be5036e40f80b9e03";
const newurl = `https://api.themoviedb.org/3/movie/now_playing?api_key=`;

async function getMovies() {
    loader.style.display = "block";
    try {
        const{
        data: {result}, 
    } = await axios(newurl + apiKey);
    const moviesContainer = document.querySelector(".movies");
    result.forEach((movie) => {
        const movieCard = `
        <div class="movie">
        <img src="${imagePrefix + movie.poster_path}"/>
        <div>
        <button class="movie=btn" id="${movie.id}">${movie.title}</button>
        <button class="favorite=btn" data-movie-id"${movie.id}">Add to favorites</button>
        </div>
        </div>`;
        moviesContainer.insertAdjacentHTML("beforeend", movieCard);
    });
    const btns = document.querySelectorAll(".movie-btn");
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            location.href = `movie.html?movieId=${this.id}`;
        });
    });
    
////////////
    const favBtns = document.querySelectorAll(".favorite-btn");
    favBtns.forEach((btn) => {
        btn.addEventListener("click", function () {

        })

    })
    }
}

////////
document.querySelector("#test").addEventListener("click", function (e) {
    localStorage.setItem("test", 10);
    localStorage.clear();
    const currentItem = JSON.parse(localStorage.getItem("test"));
});




