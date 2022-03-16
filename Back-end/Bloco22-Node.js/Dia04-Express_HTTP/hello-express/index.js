const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão ao molho branco', price: 35.0, waitTime: 25 },
];

const recipesSort = recipes.sort((a, b) => {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

const drinksSort = drinks.sort((a, b) => {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
});

app
  .get('/recipes', (_req, res) => {
    res.json(recipesSort)
  })
  .get('/recipes/search', (req, res) => {
    const { name, maxPrice, minPrice } = req.query;
    const filteredRecipes = recipes
      .filter((recipe) => recipe.name.includes(name) && recipe.price < parseInt(maxPrice) && recipe.price >= parseInt(minPrice));
    res.status(200).json(filteredRecipes);
  })
  .get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });
    res.status(200).json(recipe)
  })
  .get('/drinks', (_req, res) => {
    res.json(drinksSort)
  })
  .get('/drinks/search', (req, res) => {
    const { name } = req.query;
    const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
    res.status(200).json(filteredDrinks);
  })
  .get('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drink = drinks.find((drink) => drink.id === parseInt(id));
    if (!drink) return res.status(404).json({ message: 'Drink not found!' });
    res.status(200).json(drink)
  });

app
  .post('/recipes', (req, res) => {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price });
    res.status(201).json({ message: 'Recipe created successfully!' });
  })
  .post('/drinks', (req, res) => {
    const { id, name, price } = req.body;
    drinks.push({ id, name, price })
    res.status(201).json({ message: 'Drink created successfully!' })
  });

app
  .put('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const findIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
    if (findIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
    recipes[findIndex] = { ...recipes[findIndex], name, price }
    res.status(204).end();
  })
  .put('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));
    if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found' });
    drinks[drinkIndex] = { ...drinks[drinkIndex], name, price }
    res.status(204).end();
  });

app
  .delete('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
    recipes.splice(recipeIndex, 1);
    res.status(204).end();
  })
  .delete('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));
    if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found.' });
    drinks.splice(drinkIndex, 1);
    res.status(204).end();
  });


app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
