let recipes  = JSON.parse(localStorage.getItem('recipes')) || [];

displayrecipe();

function addrecipe (){ 

const title = document.getElementById("title").value;
const  ingredients = document.getElementById('ingredients').value;
const instructions = document.getElementById('instructions').value;
    
  if(title && ingredients && instructions ){
    recipes.push({ title ,ingredients,instructions});
   saveRecpies();
   displayrecipe();
   clearform();
  }
  else{
    alert('plese fill all fileds');
  }
 
}

// display
function displayrecipe () {

    const recpiesDiv  = document.getElementById('recipes');
    recpiesDiv.innerHTML = '';

    recipes.forEach((recipes,index) => {
        recpiesDiv.innerHTML = `
        <div>
             <h2>${ recipe.title}</h2>
        <p><strong>ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>instructions:</strong> ${recipe.instructions}</p>
       <div class ="actions">
       <button> onclick="editRecipe(${recipe.id})" class="Edit"</button>
       <button> onclick="deleteRecipe(${recipe.id})" class="Delete"</button>
       </div>  
        `;
    });
}
  
function deleteRecipe(index){
    recipes.splice(index , 1);
    saveRecpies();
    displayrecipe();
}


function editRecipe(index){
    const recipe = recipes[index];
    document.getElementById('title').value ="recipe.title";
    document.getElementById('title').value ="recipe.ingredients";
    document.getElementById('title').value ="recipe.instructions";
    deleteRecipe(index);
}

function clearform (){
    document.getElementById('title').value='';
    document.getElementById('title').value='';
    document.getElementById('title').value='';

}

function saveRecpies() {
    localStorage.setItem('recipes',JSON.stringify(recipes));
}


