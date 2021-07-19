


  async function getdata(){
    let response= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data= await response.json();
   
 
        console.log(data);

    
  }

  getdata();
 