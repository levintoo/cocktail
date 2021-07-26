const divs = document.querySelector('.btns')
const one = document.createElement("button")
one.setAttribute("id","get-recipe-btn")
divs.appendChild(one)
one.innerHTML=("Buttoni")




document.querySelectorAll('#get-recipe-btn').forEach(function(li) {
  li.addEventListener('click', function() {
    alert(this.id);
  });
});