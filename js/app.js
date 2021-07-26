const searchBtn = document.querySelector('.submit-input');
const mealList = document.querySelector('.search-results');
const mealDetaislContent = document.querySelector('.modal-content');
const mealContainer = document.querySelector('.recipes-cards-container');


getMealList();

// get least that mathes ingridients
function getMealList() {
  let searchInput = document.querySelector('#search-input').value.trim();
  console.log(searchInput);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=onions`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.meals) {
        data.meals.forEach(meal => {


          document.querySelector('.feedback-title').innerHTML = ("Food found");
          document.querySelector('.feedback-title').classList.add("text-success");

          const recipeCard = document.createElement('div');
          recipeCard.classList.add(`col-lg-4`, `col-md-4`, `col-sm-10`, `recipe-card`)
          mealContainer.appendChild(recipeCard);


          const recipeCardImage = document.createElement('img');
          recipeCard.appendChild(recipeCardImage);
          recipeCardImage.setAttribute("src", `${meal.strMealThumb}`);


          const cardDescriptionDiv = document.createElement('div');
          cardDescriptionDiv.classList.add(`card-description`);
          recipeCard.appendChild(cardDescriptionDiv);

          const carddecriptionname = document.createElement('h4');
          carddecriptionname.classList.add(`food-n`);
          cardDescriptionDiv.appendChild(carddecriptionname);
          carddecriptionname.innerHTML = (`${meal.strMeal}`)

          const carddecriptionButton = document.createElement('button');
          carddecriptionButton.setAttribute("mealid", `${meal.idMeal}`);
          carddecriptionButton.setAttribute("class", "get-recipe-btn");
          // carddecriptionButton.setAttribute("data-bs-toggle", "modal");
          carddecriptionButton.setAttribute("data-bs-target", "#staticBackdrop");
          cardDescriptionDiv.appendChild(carddecriptionButton);
          carddecriptionButton.innerHTML = ("Get Recipe")




        });
      } else {
        document.querySelector('.feedback-title').innerHTML = ("Food could not be found");
        document.querySelector('.feedback-title').classList.add("text-danger");
      }


    })
};


document.querySelectorAll('.get-recipe-btn').forEach(function(li) {
  li.addEventListener('click', function() {
    alert(this.id);
  });
});