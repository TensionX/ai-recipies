

document.getElementById('generate').addEventListener('click', function() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'inline-block'; // Show the spinner

    setTimeout(function() {
        generateCocktail();
        spinner.style.display = 'none'; // Hide the spinner
    }, 1000); // Simulate loading for 1 second
});


function generateCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktails().length);
    const cocktail = cocktails()[randomIndex];

    const textBlock = document.querySelector("#text");
    textBlock.classList.toggle("animated");

    document.getElementById('cocktail-name').textContent = cocktail.name;
    document.getElementById('recipe').textContent = cocktail.recipe.ingredients.join(", ");
    document.getElementById('preparation').innerHTML = cocktail.preparation.map((el, index)=> {return `${index+1}. ${el}`}).join("<br>");

    setTimeout(() => {
        textBlock.classList.toggle("animated");
    }, 50); // A brief delay to ensure the browser recognizes the display change
}

// Load a cocktail when the page loads
generateCocktail();


