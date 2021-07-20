const searchBtn = document.querySelector('.submit-input');
const mealList = document.querySelector('.search-results');
const mealDetaislContent = document.querySelector('.modal-content');
const mealContainer = document.querySelector('.recipes-cards-container')
searchBtn.addEventListener('click', getMealList);

// get least that mathes ingridients
function getMealList() {
  let searchInput = document.querySelector('#search-input').value.trim();
  console.log(searchInput);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
  .then(response => response.json())
  .then(data =>{

    if(data.meals){
        data.meals.forEach(meal => {
          console.log(mealContainer)
           
const recipeCard = document.createElement('div');
recipeCard.classList.add(`col-lg-3`,`col-md-5`,`col-sm-10`,`recipe-card`)
mealContainer.appendChild(recipeCard);

const recipeCardImage = document.createElement('img');
recipeCard.appendChild(recipeCardImage);

const cardDescriptionDiv = document.createElement('div');
cardDescriptionDiv.classList.add(`card-description`);
recipeCard.appendChild(cardDescriptionDiv);

const carddecriptionname= document.createElement('h4');
carddecriptionname.classList.add(`food-n`);
cardDescriptionDiv.appendChild(carddecriptionname);

const carddecriptionButton= document.createElement('button');
carddecriptionButton.setAttribute("id", "get-recipe-btn");
carddecriptionButton.setAttribute("data-bs-toggle", "modal");
carddecriptionButton.setAttribute("data-bs-target", "#staticBackdrop");
cardDescriptionDiv.appendChild(carddecriptionButton);



 
        });
    }
  })
};





















  // async function getdata(){
  //   let response= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
  //   let data= await response.json();
   
 
  //       console.log(data);

    
  // }

  // getdata();
 