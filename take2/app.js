const mainBody = document.querySelector(".container-two");


getMealList();

// get least that mathes ingridients
function getMealList() {

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=onions`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.meals) {
        data.meals.forEach(meal => {


          const recipeCard = document.createElement('div');
          recipeCard.classList.add(`col-lg-4`, `col-md-4`, `col-sm-10`, `recipe-card`)
          mainBody.appendChild(recipeCard);


          const recipeCardImage = document.createElement('img');
          recipeCard.appendChild(recipeCardImage);
          recipeCardImage.setAttribute("src", `${meal.strMealThumb}`);



          const carddecriptionname = document.createElement('h4');
          carddecriptionname.classList.add(`food-n`);
          recipeCard.appendChild(carddecriptionname);
          carddecriptionname.innerHTML = (`${meal.strMeal}`)

          const carddecriptionButton = document.createElement('button');
          carddecriptionButton.setAttribute("mealid", `${meal.idMeal}`);
          carddecriptionButton.setAttribute("id", "get-recipe-btn");
          // carddecriptionButton.setAttribute("data-bs-toggle", "modal");
          carddecriptionButton.setAttribute("data-bs-target", "#staticBackdrop");
          recipeCard.appendChild(carddecriptionButton);
          carddecriptionButton.innerHTML = ("Get Recipe")




        });
        document.querySelectorAll('#get-recipe-btn').forEach(function(li) {
            li.addEventListener('click', function() {
              alert(this.id);
            });
          });
      } 

    })
};

