let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

displayrecipe();

function addrecipe() {
    const title = document.getElementById("title").value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const instructions = document.getElementById('instructions').value.trim();

    if (title && ingredients && instructions) {
        recipes.push({ title, ingredients, instructions });
        saveRecipes();
        displayrecipe();
        clearform();
    } else {
        alert('Please fill all fields.');
    }
}

function displayrecipe() {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';

    recipes.forEach((recipe, index) => {
        recipesDiv.innerHTML += `
            <div class="recipe">
                <h2>${recipe.title}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <div class="actions">
                    <button onclick="editRecipe(${index})" class="edit">Edit</button>
                    <button onclick="deleteRecipe(${index})" class="delete">Delete</button>
                </div>
            </div>
        `;
    });
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    saveRecipes();
    displayrecipe();
}

function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('title').value = recipe.title;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;
    deleteRecipe(index); 
}

function clearform() {
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
