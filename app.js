const accessKey = "6ZrLa49MaaubO4-gfCsQn2uxfq9aM_q9aQYqnAZ7s7s";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("searchMoreBtn");
const searchButton = document.getElementById("searchButton")

// access api link = 6ZrLa49MaaubO4-gfCsQn2uxfq9aM_q9aQYqnAZ7s7s

let keyword = "";
let page = 1

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = ""
    }

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}


searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchImages();

});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();

});

searchButton.addEventListener("click", () => {
    searchImages();
})