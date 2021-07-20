const searchBtn = document.querySelector('.submit-input');
const mealList = document.querySelector('.search-results');
const mealDetaislContent = document.querySelector('.modal-content');

searchBtn.addEventListener('click', getMealList);

// get least that mathes ingridients
function getMealList() {
  let searchInput = document.querySelector('#search-input').value.trim();
  console.log(searchInput);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
  })
};





























  // async function getdata(){
  //   let response= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
  //   let data= await response.json();
   
 
  //       console.log(data);

    
  // }

  // getdata();
 