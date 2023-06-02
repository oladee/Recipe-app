let cardList = document.getElementById("card-list");
let search = document.getElementById("search");
let form = document.getElementById("form");
search.onclick = function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(
      "https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&rapidapi-key=d464b6cbaamsh3b3e3fd111ef555p14b10fjsnd04463426571"
    )
      .then((res) => res.json())
      .then((data) => {
        let result = data.hits;
        console.log(result);
        for(var i = 0; i < result.length; i++){
          cardList.innerHTML += `
          <div class='card' >
          <img class='card-image' src=${result[i].recipe.image}>
           <h1>${result[i].recipe.label}</h1>
           <p id='summary'>Summary: ${result[i].recipe.healthLabels[0]}, ${result[i].recipe.healthLabels[1]}</p>
           
         </div>
     `;
     
        }
      });
  });
};
