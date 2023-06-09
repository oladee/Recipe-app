let cardList = document.getElementById("card-list");
let search = document.getElementById("search");
let form = document.getElementById("form");
let prefer = document.getElementById('Preferences')
let usein =document.getElementById('usein')
let token = config.apiKey

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let useins = usein.value
  let selected = prefer.value

      search.onclick = function(){
        cardList.innerHTML = ""
        fetch(
          `https://edamam-recipe-search.p.rapidapi.com/search?q=${selected} ${useins}&rapidapi-key=${token}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            let result = data.hits;
            console.log(result);
            if(result.length < 1){
              cardList.innerHTML = `
              <div class='error'>
              <p>Looks like your entry is new to us!🤔🤔</p>
              <p>please check your entry and try again!</p>
              </div>
              `
            }else{
              for(var i = 0; i < result.length; i++){
                cardList.innerHTML += `
                <div class='card' >
                <img class='card-image' src=${result[i].recipe.image}>
                 <h1>${result[i].recipe.label}</h1>
                 <p id='summary'>Summary: ${result[i].recipe.healthLabels[0]}, ${result[i].recipe.healthLabels[1]}</p>
                 <div id='more-info' class='more-info'>
                 <p>${result[i].recipe.mealType}</p>
                  <p>${result[i].recipe.dishType}</p>
                  <p> ${result[i].recipe.ingredientLines.map(x => x)}</p>
                 </div>
               </div>
           `;
           
              }
              let details = document.getElementsByClassName('more-info')
              document.querySelectorAll('.card').forEach((x,index) => {
                x.addEventListener('click', ()=>{
                  if(details[index].style.display == 'block'){
                    details[index].style.display = 'none'
                  }else{
                    details[index].style.display = 'block'
                  }
                })
              })
            }
          })
      }
      
  ;
})
;
