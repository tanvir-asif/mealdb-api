const searchResults = document.getElementById("search-results");

const mainBody = document.getElementById("primary");
const extra = document.getElementById("info");
const instruction = document.getElementById("making-recipe");


function search(){
    const search = document.getElementById("value");
    const value = search.value;
    searchResults.innerHTML= "";

    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    search.value = "";
    fetch(url)
    .then(res=> res.json())
    .then(data=> show(data.meals));
}

function show(data){
    for(let meal of data){
        // console.log(meal);
        const div = document.createElement("div");
div.classList.add("col");
        
        div.innerHTML=
        `<div class="card g-4 h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <p><h3 class="card-title">${meal.strMeal}</h3></p>
                <p class="card-text">Category: ${meal.strCategory}</p>
                <p class="card-text">Tags: ${meal.strTags}</p>
                <button type="button" class="btn btn-outline-warning" onclick="showDetails(${meal.idMeal})">Warning</button>
            </div>
            </div>
        `;

        searchResults.appendChild(div);


    }
}

function showDetails(id){

    const elementId= parseInt(id);
    const link= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${elementId}`;

    fetch(link)
    .then(res=> res.json())
    .then(data=>recipe(data.meals[0]));


}
function recipe(food){
    console.log(food);
    mainBody.style.display="none";
    extra.style.display="block";
    instruction.innerHTML=`
    <img src="${food.strMealThumb}">
    <div id=content><h1>${food.strMeal}</H1>
    <p><span>Instructions:</span> ${food.strInstructions}</p>
    <div id="buttons">
    <button class= "btn btn-outline-warning rounded-5"><a href=${food.strSource} target="_blank">Website</a></button>
    <button class= "btn btn-outline-warning rounded-5"><a href=${food.strYoutube}target="_blank">Youtube</a></button>
    </div></div>
    `;



}

function remove(){
    mainBody.style.display="block";
    extra.style.display="none";
}
// function recipe(food){
//     secondaryBody.style.display="flex";
//     console.log(food);

//     // secondaryBody.innerHTML=`
//     // <h1 class="text-center">${food.strMeal}</h1>
//     // ` ;    
//     mainBody.style.display = "none";

// }
// function hide(){
//     console.log("asfvdvfd");
//     secondaryBody.innerHTML= "";
//     mainBody.style.display= "block";
//     secondaryBody.style.display="none";

// }
// secondaryBody.addEventListener("click",hide());

























const input = document.getElementById("value");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});