const searchBtn = document.querySelector('.submit-input');
const mealList = document.querySelector('.search-results');
const mealDetaislContent = document.querySelector('.modal-content');
const mealContainer = document.querySelector('.recipes-cards-container');


searchBtn.addEventListener('click', getMealList)

// get least that mathes ingridients
function getMealList() {
  let searchInput = document.querySelector('#search-input').value.trim();
  console.log(searchInput);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.meals) {
        data.meals.forEach(meal => {


          document.querySelector('.feedback-title').innerHTML = ("Food found");
          document.querySelector('.feedback-title').classList.add("text-success");

          let recipeCard = '';
          recipeCard = document.createElement('div');
          recipeCard.classList.add(`col-lg-3`, `col-md-4`, `col-sm-5`, `recipe-card`);
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
          carddecriptionname.innerHTML = (`${meal.strMeal}`);

          const carddecriptionButton = document.createElement('button');

          carddecriptionButton.setAttribute("name", `${meal.idMeal}`);
          carddecriptionButton.setAttribute("id", "get-recipe-btn");
          carddecriptionButton.setAttribute("data-bs-toggle", "modal");
          carddecriptionButton.setAttribute("data-bs-target", "#staticBackdrop");
          cardDescriptionDiv.appendChild(carddecriptionButton);
          carddecriptionButton.innerHTML = ("Get Recipe");

          carddecriptionButton.addEventListener('click', async function () {
            await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                if (data.meals) {
                  data.meals.forEach(meal => {


                    // dynamic creation of popup modal

                    // const modalContent = document.querySelector('.modal-content');

                    // const closeModalButton = document.createElement('button');
                    // closeModalButton.classList.add('btn-close');
                    // modalContent.appendChild(closeModalButton);
                    // closeModalButton.setAttribute('type','button');
                    // closeModalButton.setAttribute('data-bs-dismiss','modal');
                    // closeModalButton.setAttribute('aria-label','Close');

                    // const recipePopup = document.createElement('div');
                    // recipePopup.classList.add('recipe-popup');
                    // modalContent.appendChild(recipePopup);

                    // const foodNameDIalog = document.createElement('h1');
                    // foodNameDIalog.classList.add('food-name');
                    // recipePopup.appendChild(foodNameDIalog);

                    // const foodButtonDIalog = document.createElement('button');
                    // foodButtonDIalog.classList.add('food-namebtn');
                    // recipePopup.appendChild(foodButtonDIalog);

                    // const foodInstructionsDIalog = document.createElement('h6');
                    // recipePopup.appendChild(foodInstructionsDIalog);
                    // foodInstructionsDIalog.innerHTML=('Instructions');

                    // const foodInstructionsTextDIalog = document.createElement('p');
                    // recipePopup.appendChild(foodInstructionsTextDIalog);
                    // foodInstructionsTextDIalog.classList.add('recipe-instructions');

                    // const foodImageDIalog = document.createElement('img');
                    // recipePopup.appendChild(foodImageDIalog);
                    // foodImageDIalog.classList.add('rouded-recipe-image','recipeImage');
                    // foodImageDIalog.setAttribute('alt', 'food-image')

                    // const foodInstructionsLinktDIalog = document.createElement('a');
                    // recipePopup.appendChild(foodInstructionsLinktDIalog);
                    // foodInstructionsLinktDIalog.classList.add('mealVideolink');


                    // const foodInstructionsLinkTextDIalog = document.createElement('p');
                    // foodInstructionsLinktDIalog.appendChild(foodInstructionsLinkTextDIalog);
                    // foodInstructionsLinkTextDIalog.innerHTML=('Watch Video')


                    const mealName = document.querySelector('.food-name');
                    const mealCategory = document.querySelector('.food-namebtn');
                    const mealRecipe = document.querySelector('.recipe-instructions');
                    const mealVideoLink = document.querySelector('.mealVideolink');
                    const mealImage = document.querySelector('.recipeImage');

                    mealName.innerHTML = (meal.strMeal)
                    mealCategory.innerHTML = (meal.strCategory)
                    mealRecipe.innerHTML = (meal.strInstructions)
                    mealVideoLink.setAttribute('href', meal.strYoutube)
                    mealImage.setAttribute('src', meal.strMealThumb)

                  })
                }



              })

          });

        })
      } else {
        document.querySelector('.feedback-title').innerHTML = ("Food could not be found");
        document.querySelector('.feedback-title').classList.add("text-danger");
      }


    })
};