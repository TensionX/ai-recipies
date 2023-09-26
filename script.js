
document.getElementById('generate').addEventListener('click', function() {
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(function() {
        generateCocktail();
        document.getElementById('loading').classList.add('hidden');
    }, 1000); // Simulate loading for 1 second
});

function generateCocktail() {
    const randomIndex = Math.floor(Math.random() * cocktails().length);
    const cocktail = cocktails()[randomIndex];
    document.getElementById('cocktail-name').textContent = cocktail.name;
    document.getElementById('recipe').textContent = cocktail.recipe.ingredients.join(", ");
    document.getElementById('preparation').textContent = cocktail.preparation;
}

// Load a cocktail when the page loads
generateCocktail();


function cocktails(){
    return [
        {
            name: "Tropical Tarragon Temptation",
            recipe: {
                ingredients: [
                    "2 oz white rum",
                    "1 oz passionfruit puree",
                    "1/2 oz tarragon syrup",
                    "1/2 oz lime juice"
                ]
            },
            preparation: "In a shaker, combine rum, passionfruit puree, tarragon syrup, and lime juice. Shake well until chilled. Strain into a glass over ice and garnish with a sprig of fresh tarragon."
        },
        {
            name: "Mellow Mint Mescal",
            recipe: {
                ingredients: [
                    "1 1/2 oz mescal",
                    "1 oz fresh lime juice",
                    "3/4 oz simple syrup",
                    "5 fresh mint leaves",
                    "Soda water"
                ]
            },
            preparation: "In a shaker, muddle the mint leaves with the simple syrup. Add mescal and lime juice. Fill with ice and shake. Strain into a glass over ice and top with soda water. Garnish with a mint sprig."
        },
        {
            name: "Chamomile Calm Cooler",
            recipe: {
                ingredients: [
                    "1 1/2 oz vodka",
                    "1 oz chamomile tea (cooled)",
                    "1/2 oz honey syrup",
                    "1/2 oz lemon juice",
                    "Soda water"
                ]
            },
            preparation: "Combine vodka, cooled chamomile tea, honey syrup, and lemon juice in a shaker. Shake well and strain into a tall glass filled with ice. Top with soda water and garnish with a lemon wheel and chamomile flower."
        },
        {
            name: "Ravishing Red Rooibos",
            recipe: {
                ingredients: [
                    "1 1/2 oz gin",
                    "1 oz rooibos tea concentrate",
                    "1/2 oz orange liqueur",
                    "1/2 oz lemon juice"
                ]
            },
            preparation: "Add gin, rooibos concentrate, orange liqueur, and lemon juice to a shaker. Fill with ice and shake until chilled. Strain into a martini glass and garnish with an orange twist."
        },
        {
            name: "Hibiscus Harmony Highball",
            recipe: {
                ingredients: [
                    "1 1/2 oz tequila",
                    "1 oz hibiscus syrup",
                    "1 oz fresh lime juice",
                    "Soda water",
                    "Lime wheel for garnish"
                ]
            },
            preparation: "In a shaker, combine tequila, hibiscus syrup, and lime juice. Shake well and strain into a highball glass filled with ice. Top with soda water and garnish with a lime wheel."
        },
        {
            name: "Jasmine Juniper Jump",
            recipe: {
                ingredients: [
                    "2 oz gin",
                    "1 oz jasmine tea (cooled)",
                    "1/2 oz lemon juice",
                    "1/2 oz honey syrup",
                    "Lemon twist for garnish"
                ]
            },
            preparation: "Combine gin, cooled jasmine tea, lemon juice, and honey syrup in a shaker. Shake until chilled. Strain into a glass and garnish with a lemon twist."
        },
        {
            name: "Violet Vanilla Vibe",
            recipe: {
                ingredients: [
                    "1 1/2 oz vodka",
                    "1 oz creme de violette",
                    "1/2 oz vanilla syrup",
                    "1 oz lemon juice",
                    "Edible violet flower for garnish"
                ]
            },
            preparation: "Add vodka, creme de violette, vanilla syrup, and lemon juice to a shaker. Shake well and strain into a martini glass. Garnish with an edible violet flower."
        },
        {
            name: "Elderflower Espresso Elegance",
            recipe: {
                ingredients: [
                    "1 oz espresso (cooled)",
                    "1 1/2 oz vodka",
                    "1 oz elderflower liqueur",
                    "Coffee beans for garnish"
                ]
            },
            preparation: "Combine cooled espresso, vodka, and elderflower liqueur in a shaker. Shake until chilled. Strain into a martini glass and garnish with a few coffee beans."
        },
        {
            name: "Spiced Sage Sling",
            recipe: {
                ingredients: [
                    "2 oz bourbon",
                    "1/2 oz sage syrup",
                    "1/2 oz lime juice",
                    "Dash of Angostura bitters",
                    "Sage leaf for garnish"
                ]
            },
            preparation: "Add bourbon, sage syrup, lime juice, and bitters to a shaker. Fill with ice and shake. Strain into a rocks glass filled with ice. Garnish with a sage leaf."
        },
        {
            name: "Pomegranate Pepper Punch",
            recipe: {
                ingredients: [
                    "1 1/2 oz rum",
                    "1 oz pomegranate juice",
                    "1/2 oz black pepper syrup",
                    "1/2 oz lemon juice",
                    "Pomegranate seeds and cracked pepper for garnish"
                ]
            },
            preparation: "Combine rum, pomegranate juice, black pepper syrup, and lemon juice in a shaker. Shake vigorously and strain into a glass. Garnish with pomegranate seeds and a sprinkle of cracked pepper."
        },
        {
            name: "Lavender Litchi Libation",
            recipe: {
                ingredients: [
                    "2 oz gin",
                    "1 oz litchi juice",
                    "1/2 oz lavender syrup",
                    "1/2 oz lime juice",
                    "Lavender sprig for garnish"
                ]
            },
            preparation: "In a shaker, mix gin, litchi juice, lavender syrup, and lime juice. Shake well until chilled. Strain into a glass and garnish with a lavender sprig."
        },
        {
            name: "Basil Berry Bliss",
            recipe: {
                ingredients: [
                    "1 1/2 oz gin",
                    "1 oz fresh blueberry puree",
                    "1/2 oz lemon juice",
                    "1/2 oz basil syrup",
                    "Fresh basil leaf for garnish"
                ]
            },
            preparation: "Combine gin, blueberry puree, lemon juice, and basil syrup in a shaker. Shake well and strain into a glass over ice. Garnish with a basil leaf."
        },
        {
            name: "Tangy Tamarind Twist",
            recipe: {
                ingredients: [
                    "2 oz vodka",
                    "1 oz tamarind concentrate",
                    "1/2 oz agave syrup",
                    "1/2 oz lime juice",
                    "Lime wheel for garnish"
                ]
            },
            preparation: "Add vodka, tamarind concentrate, agave syrup, and lime juice to a shaker. Shake until chilled. Strain into a glass and garnish with a lime wheel."
        },
        {
            name: "Mango Mint Mojito",
            recipe: {
                ingredients: [
                    "1 1/2 oz white rum",
                    "1 oz fresh mango puree",
                    "1/2 oz lime juice",
                    "6 fresh mint leaves",
                    "Soda water"
                ]
            },
            preparation: "Muddle the mint leaves with lime juice in a glass. Add mango puree and rum. Stir well, fill the glass with ice, and top with soda water."
        },
        {
            name: "Pear & Pine Nut Pleasure",
            recipe: {
                ingredients: [
                    "2 oz whiskey",
                    "1 oz pear nectar",
                    "1/2 oz pine nut syrup",
                    "Dash of bitters",
                    "Pear slice for garnish"
                ]
            },
            preparation: "Combine whiskey, pear nectar, pine nut syrup, and bitters in a shaker. Shake and strain into a glass. Garnish with a pear slice."
        },
        {
            name: "Cucumber Cilantro Cooler",
            recipe: {
                ingredients: [
                    "1 1/2 oz tequila",
                    "1 oz fresh cucumber juice",
                    "1/2 oz lime juice",
                    "1/4 oz cilantro syrup",
                    "Cilantro leaf for garnish"
                ]
            },
            preparation: "Mix tequila, cucumber juice, lime juice, and cilantro syrup in a shaker. Shake well and strain into a glass over ice. Garnish with a cilantro leaf."
        },
        {
            name: "Blackberry Bamboo Balance",
            recipe: {
                ingredients: [
                    "1 1/2 oz sake",
                    "1 oz blackberry puree",
                    "1/2 oz lemon juice",
                    "1/4 oz simple syrup",
                    "Blackberry for garnish"
                ]
            },
            preparation: "Combine sake, blackberry puree, lemon juice, and syrup in a shaker. Shake until chilled. Strain into a glass and garnish with a fresh blackberry."
        },
        {
            name: "Apricot Almond Amour",
            recipe: {
                ingredients: [
                    "2 oz brandy",
                    "1 oz apricot nectar",
                    "1/2 oz almond syrup (orgeat)",
                    "1/4 oz lemon juice",
                    "Apricot slice for garnish"
                ]
            },
            preparation: "Mix brandy, apricot nectar, almond syrup, and lemon juice in a shaker. Shake well and strain into a martini glass. Garnish with an apricot slice."
        },
        {
            name: "Raspberry Rose Radiance",
            recipe: {
                ingredients: [
                    "1 1/2 oz gin",
                    "1 oz raspberry puree",
                    "1/2 oz rose water",
                    "1/2 oz simple syrup",
                    "Raspberry for garnish"
                ]
            },
            preparation: "Add gin, raspberry puree, rose water, and simple syrup to a shaker. Shake and strain into a glass. Garnish with a fresh raspberry."
        },
        {
            name: "Golden Grapefruit Glow",
            recipe: {
                ingredients: [
                    "2 oz mezcal",
                    "1 oz grapefruit juice",
                    "1/2 oz agave syrup",
                    "1/4 oz lime juice",
                    "Grapefruit twist for garnish"
                ]
            },
            preparation: "Combine mezcal, grapefruit juice, agave syrup, and lime juice in a shaker. Shake and pour into a glass over ice. Garnish with a grapefruit twist."
        },
        {
            name: "Kiwi Kaffir Kiss",
            recipe: {
                ingredients: [
                    "2 oz vodka",
                    "1 oz fresh kiwi puree",
                    "1/2 oz kaffir lime syrup",
                    "1/2 oz lemon juice",
                    "Kiwi slice for garnish"
                ]
            },
            preparation: "Combine vodka, kiwi puree, kaffir lime syrup, and lemon juice in a shaker. Shake vigorously and strain into a chilled glass. Garnish with a kiwi slice."
        },
        {
            name: "Spicy Sambuca Sunset",
            recipe: {
                ingredients: [
                    "1 1/2 oz sambuca",
                    "1 oz pineapple juice",
                    "1/4 oz chili syrup",
                    "1/2 oz orange juice",
                    "Pineapple chunk for garnish"
                ]
            },
            preparation: "Mix sambuca, pineapple juice, chili syrup, and orange juice in a shaker with ice. Shake and strain into a glass over fresh ice. Garnish with a pineapple chunk."
        },
        {
            name: "Lychee Lemongrass Lift",
            recipe: {
                ingredients: [
                    "1 1/2 oz rum",
                    "1 oz lychee liqueur",
                    "1/2 oz lemongrass syrup",
                    "1/2 oz lime juice",
                    "Lychee for garnish"
                ]
            },
            preparation: "Add rum, lychee liqueur, lemongrass syrup, and lime juice to a shaker. Shake well and strain into a martini glass. Garnish with a lychee."
        },
        {
            name: "Turmeric Tequila Tonic",
            recipe: {
                ingredients: [
                    "2 oz tequila",
                    "1 oz turmeric infusion",
                    "1/2 oz lime juice",
                    "1/4 oz agave syrup",
                    "Soda water"
                ]
            },
            preparation: "Combine tequila, turmeric infusion, lime juice, and agave syrup in a shaker. Shake and strain into a highball glass filled with ice. Top with soda water."
        },
        {
            name: "Cherry Chai Charm",
            recipe: {
                ingredients: [
                    "2 oz bourbon",
                    "1 oz cherry juice",
                    "1/2 oz chai tea concentrate",
                    "1/4 oz simple syrup",
                    "Cherry for garnish"
                ]
            },
            preparation: "Mix bourbon, cherry juice, chai tea concentrate, and syrup in a shaker with ice. Shake until chilled and pour into a glass. Garnish with a cherry."
        },
        {
            name: "Papaya Pepper Pizzazz",
            recipe: {
                ingredients: [
                    "2 oz rum",
                    "1 oz papaya puree",
                    "1/2 oz black pepper syrup",
                    "1/2 oz lime juice",
                    "Slice of papaya for garnish"
                ]
            },
            preparation: "Combine rum, papaya puree, black pepper syrup, and lime juice in a shaker. Shake vigorously and strain into a glass. Garnish with a slice of papaya."
        },
        {
            name: "Zesty Zinfandel Zinger",
            recipe: {
                ingredients: [
                    "2 oz red Zinfandel wine",
                    "1 oz brandy",
                    "1/2 oz lemon juice",
                    "1/4 oz agave nectar",
                    "Lemon twist for garnish"
                ]
            },
            preparation: "In a mixing glass, combine Zinfandel, brandy, lemon juice, and nectar. Stir until well mixed. Pour into a wine glass and garnish with a lemon twist."
        },
        {
            name: "Thyme Tangerine Tipple",
            recipe: {
                ingredients: [
                    "2 oz gin",
                    "1 oz tangerine juice",
                    "1/2 oz thyme syrup",
                    "1/4 oz lemon juice",
                    "Sprig of thyme for garnish"
                ]
            },
            preparation: "Add gin, tangerine juice, thyme syrup, and lemon juice to a shaker. Shake until chilled and strain into a glass. Garnish with a sprig of thyme."
        },
        {
            name: "Apple Anise Aperitif",
            recipe: {
                ingredients: [
                    "1 1/2 oz apple brandy",
                    "1 oz apple juice",
                    "1/2 oz anise liqueur",
                    "Apple slice for garnish"
                ]
            },
            preparation: "Combine apple brandy, apple juice, and anise liqueur in a shaker. Shake and strain into a martini glass. Garnish with an apple slice."
        },
        {
            name: "Guava Ginger Glee",
            recipe: {
                ingredients: [
                    "2 oz vodka",
                    "1 oz guava juice",
                    "1/2 oz ginger syrup",
                    "1/4 oz lime juice",
                    "Candied ginger for garnish"
                ]
            },
            preparation: "Mix vodka, guava juice, ginger syrup, and lime juice in a shaker. Shake well and pour into a glass. Garnish with a piece of candied ginger."
        }
    ]
}