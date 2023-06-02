let cardList = document.getElementById("card-list");
let search = document.getElementById("search");
let form = document.getElementById("form");
search.onclick = function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=rice&diet=Gluten%20Free&apiKey=39a8e72180354f049246426883b030c8"
    )
      .then((res) => res.json())
      .then((data) => {
        let result = data.results;
        console.log(result);
        // for (var i = 0; i<result.length; i++) {
        //   fetch(
        //     `https://api.spoonacular.com/recipes/${result[i].id}/summary?apiKey=39a8e72180354f049246426883b030c8`
        //   )
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log(data);
        //       console.log(result)
        // //       cardList.innerHTML += `
        // //      <div class='card' id =${"image" + result[i].id}>
        // //         <img src=${result[i].image}>
        // //      <h2>${result[i].title}</h2>
        // //     </div>
        
        // // `;
        //     });
        // }
      });
  });
};
