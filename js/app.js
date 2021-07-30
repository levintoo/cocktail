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

          const recipeCard = document.createElement('div');
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

          carddecriptionButton.addEventListener('click', async function(){
            await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                if (data.meals) {
                  data.meals.forEach(meal => {
                    // dynamics creation of popup modal

                    // const recipeDOM = document.querySelector('.recipe-modal');

                    // const modalfade = document.createElement('div');
                    // modalfade.classList.add('modal' ,'fade');
                    // recipeDOM.appendChild(modalfade);

                    const mealName = document.querySelector('.food-name');
                    const mealCategory = document.querySelector('.food-namebtn');
                    const mealRecipe = document.querySelector('.recipe-instructions');
                    const mealVideoLink = document.querySelector('.mealVideolink');
                    const mealImage = document.querySelector('.recipeImage');

                    mealName.innerHTML = (meal.strMeal)
                    mealCategory.innerHTML = (meal.strCategory)
                    mealRecipe.innerHTML = (meal.strInstructions)
                    mealVideoLink.setAttribute('src', meal.strYoutube)
                    mealImage.setAttribute('src', meal.strMealThumb)

                  })
                }



              })

          });
          // document.querySelectorAll('#get-recipe-btn').forEach(function (li) {
          //   li.addEventListener('click', function () {

          //     getMealdetails();
          //     async function getMealdetails() {

          //       // const selectedMealid = this.data-mealid;

          //       console.log(this.id);

          //       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=53031` )
          //         .then(response => response.json())
          //         .then(data => {
          //           console.log(data);
          //           if (data.meals) {
          //             data.meals.forEach(meal => {





          //             })}



          //         })
          //     };


          //     // /end of modal functions
          //   });
          // });
        })
      } else {
        document.querySelector('.feedback-title').innerHTML = ("Food could not be found");
        document.querySelector('.feedback-title').classList.add("text-danger");
      }


    })
};