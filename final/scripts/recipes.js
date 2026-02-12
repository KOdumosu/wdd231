async function loadRecipes() {
  try {
    const response = await fetch('data/recipes.json');
    const recipes = await response.json();

    const container = document.querySelector('#recipe-list');
    recipes.forEach(recipe => {
      container.innerHTML += `
        <article>
          <h2>${recipe.title}</h2>
          <p>Protein Level: ${recipe.protein}</p>
          <p>Preparation Time: ${recipe.prepTime}</p>
          <p>Difficulty: ${recipe.difficulty}</p>
        </article>
      `;
    });
  } catch (error) {
    console.error('Error loading recipes', error);
  }
}

loadRecipes();
